import { useParams } from "react-router-dom";

import {
  Layout,
  Loader,
  ErrorWrapper,
  NotFoundMessage,
} from "../../components";
import { useCdpContext } from "../state/cdp-context";

import CdpInfoCard from "./CdpInfoCard";
import CdpPageHeader from "./CdpPageHeader";

const CdpPage = () => {
  const { id } = useParams();
  const {
    allCdps,
    loading,
    error,
    cdp: fetchedCdp,
    onSingleSearch,
    notFound,
  } = useCdpContext();

  const cdpId = parseInt(id ? id : "0");

  // if user comes from home page find clicked cdp
  const existingCdp = allCdps.find((cdp) => cdp.id === cdpId);

  //if user enters manually uuid in browser fetch it
  if (!existingCdp) {
    onSingleSearch(cdpId);
  }
  const cdp = existingCdp || fetchedCdp;

  return (
    <Layout>
      <CdpPageHeader id={cdpId} />
      <ErrorWrapper isError={error}>
        {loading && <Loader {...loaderProps} />}
        {!notFound && !loading && <CdpInfoCard cdp={cdp} />}
        {notFound && <NotFoundMessage />}
      </ErrorWrapper>
    </Layout>
  );
};

const loaderProps = {
  height: "180px",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: "ThreeDShadow",
};
export default CdpPage;
