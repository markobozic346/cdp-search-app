import { PropsWithChildren, useState, useMemo } from "react";

import { collaterals, noOfCdps, maxRequestAtOnce } from "../../lib/constants";
import Cdp from "../../lib/models/Cdp";
import { cdpService } from "../../lib/services/cdpService";

import CdpSearchContext from "./context";

const CdpSearchProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [collateral, setCollateral] = useState<string>(collaterals[0]);
  const [uuid, setUuid] = useState<number>();
  const [cdp, setCdp] = useState<Cdp>();
  const [nearestCdps, setNearestCdps] = useState<Cdp[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onSingleSearch = async (uuid: number) => {
    setLoading(true);
    try {
      const cdp = await cdpService.fetchSingleCdp(uuid);

      cdp.exist && setCdp(cdp);

      setNotFound(!cdp.exist);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onNearestSearch = async (data: {
    uuid: number;
    collateral: string;
  }) => {
    let larger = data.uuid;
    let smaller = data.uuid;

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

          finalArr.push(
            ...cdps.filter((cdp) => cdp.ilk === data.collateral && cdp.exist)
          ); // filter out the cdps that are not of the same ilk

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
  const removeCdps = () => {
    setCdp(undefined);
    setNearestCdps([]);
  };

  const onUuidChange = (uuid: number) => {
    removeCdps();
    setUuid(uuid);
  };

  useMemo(() => {
    uuid && onSingleSearch(uuid);
  }, [uuid]);

  useMemo(() => {
    cdp && uuid && onNearestSearch({ uuid, collateral });
  }, [cdp, uuid, collateral]);

  const allCdps = cdp ? [cdp, ...nearestCdps.slice(0, noOfCdps + 1)] : [];

  const value = {
    cdp,
    uuid,
    notFound,
    collateral,
    nearestCdps,
    allCdps,
    loading,
    error,
    onCollateralChange: setCollateral,
    onUuidChange: onUuidChange,
  };
  return (
    <CdpSearchContext.Provider value={value}>
      {children}
    </CdpSearchContext.Provider>
  );
};

export default CdpSearchProvider;
