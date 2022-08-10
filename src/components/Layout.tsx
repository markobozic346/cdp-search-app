import { Container } from "@chakra-ui/react";
import { FC, memo, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="900px" mx="auto">
      {children}
    </Container>
  );
};

export default memo(Layout);
