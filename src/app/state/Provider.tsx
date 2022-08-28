import { PropsWithChildren, useState, useMemo } from "react";

import { noOfCdps, maxRequestAtOnce } from "../../lib/constants";
import Cdp from "../../lib/models/Cdp";
import { cdpService } from "../../lib/services/cdpService";

import CdpSearchContext from "./context";

const CdpSearchProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [cdp, setCdp] = useState<Cdp>();
  const [nearestCdps, setNearestCdps] = useState<Cdp[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onSingleSearch = async (uuid: number) => {
    setLoading(true);
    try {
      const fetchedCdp = await cdpService.fetchSingleCdp(uuid);
      setCdp(fetchedCdp.exist ? fetchedCdp : undefined);

      setNotFound(!fetchedCdp?.exist);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onMultipleSearch = useMemo(
    () => (uuid: number, collateral: string) =>
      multipleSearch(uuid, collateral),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const multipleSearch = async (uuid: number, collateral: string) => {
    setLoading(true);

    try {
      const fetchedCdp = await cdpService.fetchSingleCdp(uuid);

      setCdp(fetchedCdp.exist ? fetchedCdp : undefined);

      setNotFound(!fetchedCdp.exist);

      fetchedCdp.exist &&
        findNearestCdps({
          uuid,
          collateral,
        });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const findNearestCdps = async (data: {
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
        const shouldIncrease = tempArr.length % 2 === 0 || smaller === 0; // should increase if number is even or if smaller is
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

  const allCdps = useMemo(
    () => (cdp ? [cdp, ...nearestCdps.slice(0, noOfCdps + 1)] : []),
    [cdp, nearestCdps]
  );

  const value = useMemo(
    () => ({
      cdp,
      notFound: notFound && !loading,
      nearestCdps,
      allCdps,
      loading,
      error,
      onSingleSearch: onSingleSearch,
      onMultipleSearch: onMultipleSearch,
    }),
    [cdp, notFound, loading, nearestCdps, allCdps, error, onMultipleSearch]
  );
  return (
    <CdpSearchContext.Provider value={value}>
      {children}
    </CdpSearchContext.Provider>
  );
};

export default CdpSearchProvider;
