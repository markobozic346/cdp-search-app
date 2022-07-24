import { useParams } from "react-router-dom";

const CdpPage = () => {
  const { uuid } = useParams();
  return <div>{uuid}</div>;
};

export default CdpPage;
