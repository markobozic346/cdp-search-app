import { memo, useEffect } from "react";

import {
  Layout,
  Loader,
  ErrorWrapper,
  WelcomeMessage,
  NotFoundMessage,
} from "../../components";
import { cdpListItemCardProps } from "../../components/UI";
import { useCdpContext } from "../state/cdp-context";

import CdpTable from "./CdpTable";
import HomePageHeader from "./HomePageHeader";
import SearchCdp from "./SearchCdp";

const HomePage = () => {
  const { loading, allCdps, cdp, notFound, error, onMultipleSearch } =
    useCdpContext();

  const firstTimeHere = Boolean(!cdp?.id && !loading && !notFound);

  // when user manually enters cdp in directly url and returns from cdp page this will start nearest search
  useEffect(() => {
    const shouldStartSearch = cdp?.id && cdp.ilk && allCdps.length == 1;
    shouldStartSearch && onMultipleSearch(cdp.id, cdp.ilk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <HomePageHeader />
      <SearchCdp />
      <ErrorWrapper isError={error}>
        {cdp && <CdpTable cdps={allCdps} />}
        {firstTimeHere && <WelcomeMessage />}
        {notFound && <NotFoundMessage />}
        {loading && <Loader {...cdpListItemCardProps} />}
      </ErrorWrapper>
    </Layout>
  );
};

export default memo(HomePage);
