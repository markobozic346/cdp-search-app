import { useContext, createContext } from "react";

import { CdpType } from "../lib/types";

export type CdpContextType = {
  cdp: CdpType | undefined;
  nearestCdps: CdpType[];
};

const CdpContext = createContext<CdpContextType | null>(null);

export const useCdpContext = () => {
  const ctx = useContext(CdpContext);

  if (!ctx) {
    throw Error("useCdp must be used within a CdpProvider");
  }
};

export default CdpContext;
