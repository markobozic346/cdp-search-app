import { useState } from "react";

import Cdp from "../lib/models/Cdp";
import { cdpService } from "../lib/services/cdpService";

export type RoughCdpType = {
  uuid: number;
};

const useCdp = () => {
  const [cdp, setCdp] = useState<Cdp | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onSingleSearch = async (uuid: number) => {
    setLoading(true);
    try {
      const cdp = await cdpService.fetchSingleCdp(uuid);
      setCdp(cdp);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return {
    cdp,
    error,
    loading,
    onSingleSearch,
  };
};

export default useCdp;
