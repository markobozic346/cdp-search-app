import { Layout, Loader } from "../../components";
import Title from "../../components/Title";
import Error from "../../components/Error";
import { useCdpContext } from "../state/context";

import CdpTable from "./CdpTable";
import SearchCdp from "./SearchCdp";

const HomePage = () => {
  const { allCdps, loading, error } = useCdpContext();

  return (
    <Layout>
      <Title>Defi Challenge</Title>
      <SearchCdp />
      {error ? <Error /> : <CdpTable cdps={allCdps} />}
      {loading && <Loader />}
    </Layout>
  );
};

export default HomePage;
