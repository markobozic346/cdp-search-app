import { PropsWithChildren } from "react";
import useNearestCdps from "../hooks/useNearestCdps";

import CdpContext, { useCdp } from "./context";

const CdpProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { cdp, onSearch } = useSingleCdp();
  const { onCdpChange, nearestCdps } = useNearestCdps();

  return <CdpContext.Provider value={}>{children}</CdpContext.Provider>;
};

export default CdpProvider;
