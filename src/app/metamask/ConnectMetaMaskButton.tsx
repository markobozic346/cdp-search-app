import { Box, Button } from "@chakra-ui/react";

import { useMetaMaskContext } from "../state/metamask-context";

const ConnectMetaMaskButton = () => {
  const { onConnect } = useMetaMaskContext();

  return (
    <Box m="4">
      <Button onClick={onConnect}>Connect</Button>
    </Box>
  );
};

export default ConnectMetaMaskButton;
