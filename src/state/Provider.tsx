import { PropsWithChildren, useEffect } from "react";

import useNearestCdps from "../hooks/useNearestCdps";
import useSingleCdp from "../hooks/useSingleCdp";

import CdpContext from "./context";

const CdpProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { cdp, error, loading, onSingleSearch } = useSingleCdp();
  const {
    nearestCdps,
    loading: nearestLoading,
    onCollateralChange,
    error: nearestError,
    onNearestSearch,
  } = useNearestCdps({});

  useEffect(() => {
    // trigger nearest search on cdp change
    onNearestSearch(cdp);
  }, [cdp, onNearestSearch]);

  const allCdps = cdp ? [cdp, ...nearestCdps] : nearestCdps;

  const isError = error || nearestError;
  const isLoading = loading || nearestLoading;

  const value = {
    cdp,
    nearestCdps,
    allCdps,
    onSingleSearch,
    onCollateralChange,
    onNearestSearch,
    isError,
    isLoading,
  };
  return <CdpContext.Provider value={value}>{children}</CdpContext.Provider>;
};

export default CdpProvider;
