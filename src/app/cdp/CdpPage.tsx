import { useParams } from "react-router-dom";

const CdpPage = () => {
  const { uuid } = useParams();
  console.log(uuid);
  return (
    <div>
      <h1>Single Cdp Page</h1>
    </div>
  );
};

export default CdpPage;
