import Cdp from "../../lib/models/Cdp";

type CdpListItemProps = {
  cdp: Cdp;
};

const CdpListItem = ({ cdp }: CdpListItemProps) => {
  return <div>{cdp.uuid}</div>;
};

export default CdpListItem;
