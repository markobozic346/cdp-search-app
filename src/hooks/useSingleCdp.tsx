import { bytesToString } from "@defisaver/tokens/esm/utils";
import { useState } from "react";

import Cdp from "../lib/models/Cdp";
import { cdpService } from "../lib/services/cdpService";

export type RoughCdpType = {
  uuid: number;
  collateral: string;
};

const useCdp = () => {
  const [cdp, setCdp] = useState<Cdp | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const findRoughCdp = async (data: RoughCdpType) => {
    try {
      setLoading(true);

      const cdp = await cdpService.fetchSingleCdp(data.uuid);

      if (bytesToString(cdp.ilk) !== "") {
        setCdp(cdp);
      }
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return {
    cdp,
    error,
    loading,
    onSearch: findRoughCdp,
  };
};

export default useCdp;
