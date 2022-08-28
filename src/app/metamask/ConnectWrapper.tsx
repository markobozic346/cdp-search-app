import { FC, PropsWithChildren } from "react";

import { useMetaMaskContext } from "../state/metamask-context";

import ConnectMetaMaskButton from "./ConnectMetaMaskButton";

const ConnectWrapper: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { loggedIn } = useMetaMaskContext();

  return <>{loggedIn ? children : <ConnectMetaMaskButton />}</>;
};

export default ConnectWrapper;
