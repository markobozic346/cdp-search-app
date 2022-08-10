import { Box, Flex, Icon } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { useEffect } from "react";

import { Layout, Loader } from "../../components";
import Title from "../../components/Title";
import Error from "../../components/Error";
import { useCdpContext } from "../state/context";

import CdpInfoCard from "./CdpInfoCard";

const CdpPage = () => {
  const { id } = useParams();
  const { cdp, loading, error, onUuidChange } = useCdpContext();

  const cdpId = parseInt(id ? id : "0");
  useEffect(() => {
    onUuidChange(cdpId);
  }, [cdpId, id, onUuidChange]);

  return (
    <Layout>
      <Flex alignItems="center">
        <Link to="/">
          <Icon
            as={TiArrowBack}
            fontSize="5xl"
            _hover={{ transform: "scale(1.5)" }}
            transition="transform 0.2s ease-in-out"
          />
        </Link>
        <Title>{`${id} Cdp Info `}</Title>
      </Flex>
      <Box>{loading ? <Loader /> : <CdpInfoCard cdp={cdp} />}</Box>
      {error && <Error />}
    </Layout>
  );
};

export default CdpPage;
