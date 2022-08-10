import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
const Error = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="red.500"
          rounded="50px"
          w="55px"
          h="55px"
          textAlign="center"
        >
          <Icon as={AiFillCloseCircle} boxSize="20px" color="white" />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Opss!
      </Heading>
      <Text color="gray.500">Something went wrong</Text>
    </Box>
  );
};

export default Error;
