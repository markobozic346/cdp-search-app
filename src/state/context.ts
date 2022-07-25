import { useContext, createContext } from "react";

import Cdp from "../lib/models/Cdp";

export type CdpContextType = {
  cdp: Cdp | undefined;
  nearestCdps: Cdp[];
  allCdps: Cdp[];
  onCollateralChange: (collateral: string) => void;
  onSingleSearch: (uuid: number) => void;
  onNearestSearch: (data: Cdp | undefined) => void;
  isError: boolean;
  isLoading: boolean;
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
