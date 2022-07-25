import { useContext, createContext, Dispatch, SetStateAction } from "react";

import Cdp from "../lib/models/Cdp";

export type CdpContextType = {
  cdp: Cdp | undefined;
  nearestCdps: Cdp[];
  allCdps: Cdp[];
  loading: boolean;
  error: boolean;
  onCollateralChange: Dispatch<SetStateAction<string>>;
  onUuidChange: Dispatch<SetStateAction<number | undefined>>;
};

const CdpContext = createContext<CdpContextType | null>(null);

export const useCdpContext = () => {
  const ctx = useContext(CdpContext);

  if (!ctx) {
    throw Error("useCdp must be used within a CdpProvider");
  }
  return ctx;
};

export default CdpContext;
