import { useState, useEffect } from "react";

import Cdp from "../lib/models/Cdp";
import { cdpService } from "../lib/services/cdpService";

type UseNearestCdpsProps = {
  noOfCdps?: number;
  maxRequestAtOnce?: number;
};
const useNearestCdps = ({
  noOfCdps = 19,
  maxRequestAtOnce = 5,
}: UseNearestCdpsProps) => {
  const [initialCdp, setInitialCpd] = useState<Cdp>();
  const [collateral, setCollateral] = useState<string>();
  const [nearestCdps, setNearestCdps] = useState<Cdp[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    findNearestCdps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCdp]);

  const findNearestCdps = async () => {
    if (!initialCdp) {
      return;
    }

    let larger = initialCdp.uuid;
    let smaller = initialCdp.uuid;

    const tempArr = [] as number[];
    const finalArr = [] as Cdp[];

    //iterate through while requested number of cdps is not reached
    while (finalArr.length < noOfCdps) {
      setLoading(true);

      try {
        const shouldIncrease = tempArr.length % 2 === 0 || smaller === 0; // decides if the next cdp uuid should be larger or smaller

        shouldIncrease ? tempArr.push(++larger) : tempArr.push(--smaller);

        // when there are enough cdps in the temp array, send a request
        if (tempArr.length % maxRequestAtOnce === 0) {
          const cdps = await cdpService.fetchMultipleCdp(tempArr);

          finalArr.push(...cdps.filter((cdp) => cdp.ilk === collateral));

          setNearestCdps([...finalArr]); // set filtered cdps to state

          tempArr.length = 0; // reset temp array
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const onNearestSearch = (data: Cdp | undefined) => {
    setInitialCpd(data);
  };

  const onCollateralChange = (selectedCollateral: string) => {
    setCollateral(selectedCollateral);
  };

  return {
    onNearestSearch,
    onCollateralChange,
    nearestCdps,
    loading,
    error,
  };
};

export default useNearestCdps;
