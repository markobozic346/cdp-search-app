import { Stack, StackProps } from "@chakra-ui/react";

import Stat from "../../components/Stat";
import Cdp from "../../lib/models/Cdp";

type Props = {
  cdp?: Cdp;
};

const CdpInfoCard = ({ cdp }: Props) => {
  const statusColor = cdp?.status === "Safe" ? "green.500" : "red.500";

  return (
    <Stack direction="column" spacing="8" p="6" bg="gray.200" borderRadius="lg">
      <Stack {...flexProps}>
        <Stat title="collateral" value={cdp?.formatCollateralInUsd} />
        <Stat title="debt" value={cdp?.formatDebt} />
        <Stat title="ratio" value={cdp?.formatRatio} />
        <Stat title="current price" value={cdp?.formatCollPrice} />
      </Stack>

      <Stack {...flexProps}>
        <Stat title="liquidation price" value={cdp?.formatLiquidationPrice} />
        <Stat title="max withdrawn" value={cdp?.formatMaxWithdrawn} />
        <Stat title="max debt" value={cdp?.formatMaxDebt} />
        <Stat title="status" value={cdp?.status} color={statusColor} />
      </Stack>
    </Stack>
  );
};

const flexProps = {
  direction: ["column", "column", "column", "row", "row"],
  spacing: 8,
} as StackProps;

export default CdpInfoCard;
