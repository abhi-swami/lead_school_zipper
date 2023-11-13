import { Box, Image } from "@chakra-ui/react";

export const NotFound = () => {
  return (
    <Box w = {"100%"} >
      <Image
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTg3bWgyMWxrZTdjZXU0cmF3c2hvY3E1bzRjMjJscTlwdmZ5d2Z2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cccpTlG85cCdEtyybs/giphy.gif"
        alt="server error image"
        w={"50%"}
        ml={"25%"}
      />
    </Box>
  );
};
