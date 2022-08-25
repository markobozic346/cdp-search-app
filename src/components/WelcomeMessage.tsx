import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
const WelcomeMessage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      {/* <CheckCircleIcon  /> */}
      <Icon
        as={FcSearch}
        boxSize="80px"
        transition="all .2s ease-in-out"
        _hover={{ transform: "rotate(90deg) scale(1.5)" }}
      />
      <Heading as="h2" size="xl" mt={4} mb={2}>
        Start typing!
      </Heading>
      <Text color={"gray.500"}>There is nothing to show :(</Text>
    </Box>
  );
};

export default WelcomeMessage;
