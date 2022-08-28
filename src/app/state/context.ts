import { useContext, createContext } from "react";

import Cdp from "../../lib/models/Cdp";

export type CdpContextType = {
  cdp: Cdp | undefined;
  onSingleSearch: (uuid: number) => void;
  onMultipleSearch: (uuid: number, collateral: string) => void;
  notFound?: boolean;
  nearestCdps: Cdp[];
  allCdps: Cdp[];
  loading: boolean;
  error: boolean;
};

const CdpSearchContext = createContext<CdpContextType | null>(null);

export const useCdpContext = () => {
  const ctx = useContext(CdpSearchContext);

  if (!ctx) {
    throw Error("useCdp must be used within a CdpProvider");
  }
  return ctx;
};

export default CdpSearchContext;
