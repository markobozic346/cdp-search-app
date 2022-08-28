import { Flex } from "@chakra-ui/react";

import { Title } from "../../components";
import AccountInfo from "../metamask/AccountInfo";
import ConnectWrapper from "../metamask/ConnectWrapper";

const HomePageHeader = () => {
  return (
    <Flex
      justify={["center", "center", "center", "space-between", "space-between"]}
      flexDirection={["column", "column", "column", "row", "row"]}
      alignItems="center"
    >
      <Title>Defi Challenge</Title>
      <ConnectWrapper>
        <AccountInfo />
      </ConnectWrapper>
    </Flex>
  );
};

export default HomePageHeader;
