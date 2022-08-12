import { FC, memo } from "react";
import { Icon, LinkBox, LinkOverlay, Td, Tooltip, Tr } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";

import Cdp from "../../lib/models/Cdp";

type CdpTableRowProps = {
  cdp: Cdp;
};

const CdpTableRow: FC<CdpTableRowProps> = ({ cdp }) => {
  const statusColor = cdp.status === "Safe" ? "green.500" : "red.500";
  return (
    <LinkBox as={Tr} _hover={{ bg: "gray.200" }} role="group">
      <LinkOverlay href={`${cdp.id}`}>{cdp.id}</LinkOverlay>

      <Td isNumeric>
        <Tooltip label={cdp.stringFullDebt}>{cdp.formatDebt}</Tooltip>
      </Td>
      <Td isNumeric>
        <Tooltip label={cdp.stringFullCollateral}>
          {cdp.formatCollateral}
        </Tooltip>
      </Td>
      <Td isNumeric>{cdp.formatRatio}</Td>
      <Td isNumeric color={statusColor}>
        {cdp.status}
      </Td>

      <Td>
        <Icon
          mx="5"
          as={FaLocationArrow}
          _groupHover={{ transform: "scale(1.5)" }}
          transition="transform 0.2s ease-in-out"
        />
      </Td>
    </LinkBox>
  );
};

export default memo(CdpTableRow);
