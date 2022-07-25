import { Loader } from "../../components";
import { useCdpContext } from "../../state/context";

import CdpList from "./CdpList";
import SearchCdp from "./SearchCdp";

const HomePage = () => {
  const { allCdps, loading } = useCdpContext();

  console.log(loading);

  return (
    <div>
      <h1>Defi challenge</h1>
      <SearchCdp />
      <CdpList cdps={allCdps} />
      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
