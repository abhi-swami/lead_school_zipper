import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../asset/logo.png";

export const Navbar = () => {
  return (
    <>
      <Box px={4} bgGradient="linear(to-r, black, blue.100, white)">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image src={logo} h={12} alt="logo_1" />
          </Box>
          <Box>
            <Image
              src={
                "https://i.pinimg.com/originals/d7/ae/01/d7ae0170d3d5ffcbaa7f02fdda387a3b.gif"
              }
              alt="logo_2"
              h={12}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
