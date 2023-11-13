import { Box, Image } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Box w = {"100%"} zIndex = {3} border = {"0px solid"} >
      <Image
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExandiNjlsc3RnZDJkaHdma2tyNW52azhqOWdrcmY0bHdkMW51aDh6YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTk9ZvMnbIiIew7IpW/giphy.gif"
        alt="loader image"
        w={"20%"}
        ml={"40%"}
      />
    </Box>
  );
};
