import { memo, useEffect } from "react";

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
  const { loading, allCdps, cdp, notFound, error, onMultipleSearch } =
    useCdpContext();

  const firstTimeHere = Boolean(!cdp?.id && !loading && !notFound);

  // when user manually enters cdp in url and returns from cdp page this will start nearest search
  useEffect(() => {
    const shouldStartSearch = cdp?.id && cdp.ilk && allCdps.length == 1;
    shouldStartSearch && onMultipleSearch(cdp.id, cdp.ilk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Title>Defi Challenge</Title>
      <SearchCdp />
      <ErrorWrapper isError={error}>
        {cdp && <CdpTable cdps={allCdps} />}
        {firstTimeHere && <WelcomeMessage />}
        {notFound && <NotFoundMessage />}
        {loading && <Loader />}
      </ErrorWrapper>
    </Layout>
  );
};

export default memo(HomePage);
