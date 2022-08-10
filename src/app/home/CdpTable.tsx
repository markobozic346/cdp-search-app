import { Table, TableContainer, Tbody } from "@chakra-ui/react";
import { memo } from "react";

import Cdp from "../../lib/models/Cdp";

import CdpTableHeader from "./CdpTableHeader";
import CdpTableRow from "./CdpTableRow";

type CdpTableProps = {
  cdps: Cdp[];
};

const CdpTable = ({ cdps }: CdpTableProps) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <CdpTableHeader />
        <Tbody>
          {cdps.map((cdp) => (
            <CdpTableRow key={cdp.id} cdp={cdp} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default memo(CdpTable);
