import { BoxProps, Skeleton, Stack } from "@chakra-ui/react";

const Loader = (props: BoxProps) => {
  return (
    <Stack>
      <Skeleton {...props} />
    </Stack>
  );
};

export default Loader;
