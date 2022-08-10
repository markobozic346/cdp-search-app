import { Thead, Tr, Th } from "@chakra-ui/react";

const CdpTableHeader = () => {
  return (
    <Thead>
      <Tr>
        <Th>uuid</Th>
        <Th isNumeric>debt</Th>
        <Th isNumeric>collateral</Th>
        <Th isNumeric>ratio</Th>
        <Th isNumeric>status</Th>
        <Th>more info</Th>
      </Tr>
    </Thead>
  );
};

export default CdpTableHeader;
