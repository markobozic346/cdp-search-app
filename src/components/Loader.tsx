import { Skeleton, Stack } from "@chakra-ui/react";

import { cdpListItemCardProps } from "./UI";

const Loader = () => {
  return (
    <Stack>
      <Skeleton {...cdpListItemCardProps} />
    </Stack>
  );
};

export default Loader;
