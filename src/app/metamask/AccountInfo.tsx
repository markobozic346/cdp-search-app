import { Text } from "@chakra-ui/react";

import { truncateEthAddress } from "../../lib/utils";
import { useMetaMaskContext } from "../state/metamask-context";

const AccountInfo = () => {
  const { accounts } = useMetaMaskContext();
  return <Text m="4">logged in as {truncateEthAddress(accounts[0])}</Text>;
};

export default AccountInfo;
