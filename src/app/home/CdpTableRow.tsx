import { FC, memo } from "react";
import { Icon, Td, Tooltip, Tr } from "@chakra-ui/react";
import { FcRightUp } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import Cdp from "../../lib/models/Cdp";

type CdpTableRowProps = {
  cdp: Cdp;
};

const CdpTableRow: FC<CdpTableRowProps> = ({ cdp }) => {
  const statusColor = cdp.status === "Safe" ? "green.500" : "red.500";
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${cdp.id}`);
  };
  return (
    <Tr
      _hover={{ bg: "gray.200" }}
      cursor="pointer"
      role="group"
      onClick={handleNavigate}
    >
      <Td isNumeric>{cdp.id}</Td>
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
          as={FcRightUp}
          boxSize="20px"
          _groupHover={{ transform: "scale(1.5)" }}
          transition="transform 0.2s ease-in-out"
        />
      </Td>
    </Tr>
  );
};

export default memo(CdpTableRow);
