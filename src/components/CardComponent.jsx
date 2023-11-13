import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { randomNumber } from "../utils/randomNumbers";

export const CardComponent = ({ place, stateAndCountry }) => {
  console.log(place, stateAndCountry);
  return (
    <Card maxW="xs" bgGradient='linear(to-r, gray.300, blue.100, teal.100)' backdropFilter={"blur(10px)"}>
      <CardBody>
        <Image
          src={`https://dummyimage.com/600x400/${randomNumber()}/aeb0d4.png&text=${
            place?.["place name"]??'place'
          }`}
          borderRadius="lg"
          size={'sm'}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{place["place name"]}</Heading>
          <Text>
            {stateAndCountry.stateAbb}
            {","} {stateAndCountry.countryAbb}
          </Text>
          <Text color="blue.600">
            {place.latitude}
            {" Latitude"}
          </Text>
          <Text color="green.600">
            {place.longitude}
            {" longitude"}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
