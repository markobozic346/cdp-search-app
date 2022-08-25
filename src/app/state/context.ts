import { useContext, createContext, Dispatch, SetStateAction } from "react";

import Cdp from "../../lib/models/Cdp";

export type CdpContextType = {
  cdp: Cdp | undefined;
  uuid?: number;
  collateral?: string;
  notFound?: boolean;
  nearestCdps: Cdp[];
  allCdps: Cdp[];
  loading: boolean;
  error: boolean;
  onCollateralChange: Dispatch<SetStateAction<string>>;
  onUuidChange: (uuid: number) => void;
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
