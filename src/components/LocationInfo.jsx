import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export const LocationInfo = ({ location }) => {
  if (!location) {
    return null;
  }

  const { country, state, placeName } = location;

  return (
    <Box mt={5}>
      <Flex border={"0px solid red"} justifyContent={"center"}>
        <Heading as="h2" size="md" mb={2}>
          Location:
        </Heading>
        <Text ml={"1%"}>
         {"  "} {placeName}, {state}, {country}
        </Text>
      </Flex>
      
    </Box>
  );
};


