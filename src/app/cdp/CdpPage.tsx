import { Flex, Icon } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { FcUpLeft } from "react-icons/fc";

import {
  Layout,
  Loader,
  Title,
  ErrorWrapper,
  NotFoundMessage,
} from "../../components";
import { useCdpContext } from "../state/context";

import CdpInfoCard from "./CdpInfoCard";

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
  const existingCdp = allCdps.find((cdp) => cdp.id === cdpId);

  if (!existingCdp) {
    onSingleSearch(cdpId);
  }
  const cdp = existingCdp || fetchedCdp;

  return (
    <Layout>
      <Flex alignItems="center">
        <Link to="/">
          <Icon
            as={FcUpLeft}
            fontSize="5xl"
            _hover={{ transform: "scale(1.2)" }}
            transition="transform 0.2s ease-in-out"
          />
        </Link>
        <Title>{`${id} Cdp Info `}</Title>
      </Flex>

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
