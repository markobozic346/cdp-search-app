import { Box, Icon, Heading, Text } from "@chakra-ui/react";
import { FcCancel } from "react-icons/fc";

const NotFoundMessage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Icon
        as={FcCancel}
        boxSize="80px"
        transition="all .2s ease-in-out"
        _hover={{ transform: "rotate(10deg) scale(1.5)" }}
      />
      <Heading as="h2" size="xl" mt={4} mb={2}>
        Not found!
      </Heading>
      <Text color={"gray.500"}>There is no cdp with searched uuid :(</Text>
    </Box>
  );
};

export default NotFoundMessage;
