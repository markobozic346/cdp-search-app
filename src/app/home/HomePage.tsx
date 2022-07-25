import { useCdpContext } from "../../state/context";

import CdpList from "./CdpList";
import SearchCdp from "./SearchCdp";

const HomePage = () => {
  const { allCdps } = useCdpContext();
  return (
    <div>
      <h1>Defi challenge</h1>
      <SearchCdp />
      <CdpList cdps={allCdps} />
    </div>
  );
};

export default HomePage;
