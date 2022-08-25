import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { FcCancel } from "react-icons/fc";
const ErrorMessage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Icon
        as={FcCancel}
        boxSize="80px"
        transition="all .2s ease-in-out"
        _hover={{ transform: "rotate(10deg) scale(1.5)" }}
      />
      <Heading as="h2" size="xl" mt={4} mb={2}>
        Opss Error!
      </Heading>
      <Text color={"gray.500"}>There went something wrong :(</Text>
    </Box>
  );
};

export default ErrorMessage;
