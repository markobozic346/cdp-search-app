import { Box, Flex } from "@chakra-ui/react";

import Stat from "../../components/Stat";
import Cdp from "../../lib/models/Cdp";

type Props = {
  cdp?: Cdp;
};

const CdpInfoCard = ({ cdp }: Props) => {
  return (
    <Box p="6" bg="gray.200" borderRadius="lg">
      <Flex
        alignItems={[
          "flex-start",
          "flex-start",
          "flex-start",
          "center",
          "center",
        ]}
        justify="space-around"
      >
        <Stat title="collateral" value={cdp?.formatCollateralInUsd} />
        <Stat title="debt" value={cdp?.formatDebt} />
        <Stat title="ratio" value={cdp?.formatRatio} />
        <Stat title="current price" value={cdp?.collPrice} />
        <Stat title="liquidation price" value={cdp?.formatLiquidationPrice} />
      </Flex>
    </Box>
  );
};

export default CdpInfoCard;
