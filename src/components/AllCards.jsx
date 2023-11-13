import { Flex } from "@chakra-ui/react";
import { CardComponent } from "./CardComponent";

export const AllCards = ({ allPlaces, stateAndCountry }) => {
  console.log(allPlaces);
  return (
    <Flex
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(180px, 1fr))"
      alignItems={"center"}
      justifyContent={"center"}
      gap={3}
      flexWrap={"wrap"}
    >
      {allPlaces.map((place) => (
        <CardComponent place={place} stateAndCountry={stateAndCountry} />
      ))}
    </Flex>
  );
};
