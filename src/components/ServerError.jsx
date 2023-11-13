import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const ServerError = () => {
  return (
    <Box w = {"100%"} >
      <Image
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hqcXY0bXkybGUxaGkyN3g4MnJyZXJhcndnbG9qYmR6YjM5eWp3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0Dxuk20eU0bDYaxRR8/giphy.gif"
        alt="server error image"
        w={"50%"}
        ml={"25%"}
        mt={"10%"}
      />
    </Box>
  );
};
