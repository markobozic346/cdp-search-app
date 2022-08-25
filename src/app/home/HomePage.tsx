import {
  Layout,
  Loader,
  ErrorWrapper,
  WelcomeMessage,
  NotFoundMessage,
  Title,
} from "../../components";
import { useCdpContext } from "../state/context";

import CdpTable from "./CdpTable";
import SearchCdp from "./SearchCdp";

const HomePage = () => {
  const { allCdps, loading, cdp, uuid, notFound, error } = useCdpContext();

  const firstTimeHere = Boolean(!uuid && !loading);
  const cdpNotFound = Boolean(notFound && !loading);
  return (
    <Layout>
      <Title>Defi Challenge</Title>
      <SearchCdp />
      <ErrorWrapper isError={error}>
        {cdp && <CdpTable cdps={allCdps} />}
        {firstTimeHere && <WelcomeMessage />}
        {cdpNotFound && <NotFoundMessage />}
        {loading && <Loader />}
      </ErrorWrapper>
    </Layout>
  );
};

export default HomePage;
