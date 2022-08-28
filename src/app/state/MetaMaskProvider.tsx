import { PropsWithChildren, useMemo, useState } from "react";

import { metaMaskService } from "../../lib/services/metamaskService";

import MetaMaskContext from "./metamask-context";

const MetaMaskProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [contract, setContract] = useState<string>();

  const loggedIn = useMemo(() => accounts.length > 0, [accounts]);

  const onConnect = async () => {
    const accounts = await metaMaskService.connectMetaMask();

    setAccounts(accounts);
  };

  const getAccounts = async () => {
    const res = await metaMaskService.getAccounts();
    setAccounts(res);
  };

  useMemo(() => {
    getAccounts();
  }, []);

  const onSignContract = async (
    message: string,
    address: string,
    password: string
  ) => {
    if (loggedIn) {
      const contract = await metaMaskService.signContract(
        message,
        address,
        password
      );
      setContract(contract);
      return;
    }

    //if user not logged in, first login
    await onConnect();

    //then sign Contract
    const contract = await metaMaskService.signContract(
      message,
      address,
      password
    );
    setContract(contract);
  };

  const value = {
    accounts,
    contract,
    loggedIn,
    onConnect,
    onSignContract,
  };
  return (
    <MetaMaskContext.Provider value={value}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export default MetaMaskProvider;
