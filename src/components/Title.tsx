import { Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  children: string;
};

const Title: FC<Props> = ({ children }) => {
  return <Text fontSize="5xl">{children}</Text>;
};

export default memo(Title);
