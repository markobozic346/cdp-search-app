import { memo } from "react";

import Cdp from "../../lib/models/Cdp";

import CdpListItem from "./CdpListItem";

type CdpListProps = {
  cdps: Cdp[];
};
const CdpList = ({ cdps }: CdpListProps) => {
  return (
    <>
      {cdps.map((cdp, i) => (
        <CdpListItem key={`cdp_list_item_${i}`} cdp={cdp} />
      ))}
    </>
  );
};

export default memo(CdpList);
