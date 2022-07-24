import { bytesToString } from "@defisaver/tokens/esm/utils";
import { useEffect, useState } from "react";

import { cdpService } from "../lib/services/cdpService";

import { RoughCdpType } from "./useSingleCdp";

type UseNearestCdpsProps = {
  noOfCdps?: number;
  maxRequestAtOnce?: number;
};
const useNearestCdps = ({
  noOfCdps = 19,
  maxRequestAtOnce = 5,
}: UseNearestCdpsProps) => {
  const [initialCdp, setInitialCpd] = useState<RoughCdpType>();
  const [nearestCdps, setNearestCdps] = useState<any[]>([]);

  useEffect(() => {
    findNearestCdps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCdp]);

  const findNearestCdps = async () => {
    //skip if there is no initialCdp
    if (!initialCdp) {
      return;
    }

    //set roughCdpUuid as starter position
    let larger = initialCdp.uuid;
    let smaller = initialCdp.uuid;

    const tempArr = [] as number[]; // temporary array for new generated cdps
    const finalArr = []; // final array for cdps with same collateral

    //iterate through while requested number of cdps is not reached
    while (finalArr.length < noOfCdps) {
      const shouldIncrease = tempArr.length % 2 === 0 || smaller === 0; // decides if the next cdp uuid should be larger or smaller

      shouldIncrease ? tempArr.push(++larger) : tempArr.push(--smaller);

      // when there are enough cdps in the temp array, send a request
      //TODO: move this to service
      if (tempArr.length % maxRequestAtOnce === 0) {
        const cdps = await cdpService.fetchMultipleCdp(tempArr);

        // filter out cdps with same collateral and set to state
        finalArr.push(
          ...cdps.filter((cdp) => bytesToString(cdp.ilk) === "ETH-A")
        );
        setNearestCdps([...finalArr]);

        // reset temp array
        tempArr.length = 0;
      }
    }
  };

  const onCdpChange = (data: RoughCdpType | undefined) => {
    setInitialCpd(data);
  };
  return {
    onCdpChange,
    nearestCdps,
  };
};

export default useNearestCdps;
