import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useClipboard,
} from "@chakra-ui/react";
import { MdOutlineContentCopy, MdOutlineDoneAll } from "react-icons/md";

import { useMetaMaskContext } from "../state/metamask-context";

const SignContractButton = () => {
  const { contract, onSignContract, accounts } = useMetaMaskContext();

  const { hasCopied, onCopy } = useClipboard(contract ? contract : "");

  const handleSignContract = () => {
    onSignContract("Ovo je moj cdp", accounts[0], "DefiSaverPassword");
  };

  const icon = hasCopied ? MdOutlineDoneAll : MdOutlineContentCopy;

  return (
    <Box m="4">
      {contract ? (
        <InputGroup>
          <InputRightElement onClick={onCopy} cursor="pointer">
            <Icon as={icon} />
          </InputRightElement>
          <Input value={contract} readOnly />
        </InputGroup>
      ) : (
        <Button onClick={handleSignContract}>sign contract</Button>
      )}
    </Box>
  );
};

export default SignContractButton;
