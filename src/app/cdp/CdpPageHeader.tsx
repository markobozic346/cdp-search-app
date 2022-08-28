import { Flex, Icon, Box } from "@chakra-ui/react";
import { FcUpLeft } from "react-icons/fc";
import { Link } from "react-router-dom";

import { Title } from "../../components";
import ConnectWrapper from "../metamask/ConnectWrapper";
import SignContractButton from "../metamask/SignContractButton";

const CdpPageHeader = ({ id }: { id: number }) => {
  return (
    <Flex
      flexDirection={["column", "column", "column", "row", "row"]}
      justify={["center", "center", "center", "normal", "normal"]}
      alignItems="center"
    >
      <Link to="/">
        <Icon
          as={FcUpLeft}
          fontSize="5xl"
          _hover={{ transform: "scale(1.2)" }}
          transition="transform 0.2s ease-in-out"
        />
      </Link>
      <Title>{`${id} Cdp Info `}</Title>

      <Box ml={["normal", "normal", "normal", "auto", "auto"]}>
        <ConnectWrapper>
          <SignContractButton />
        </ConnectWrapper>
      </Box>
    </Flex>
  );
};

export default CdpPageHeader;
