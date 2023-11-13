import { useState } from "react";
import { Button, FormControl, Input, HStack, Flex } from "@chakra-ui/react";
import { InputInfo } from "./InputInfo";

export const Pincode = ({ fetchLocationInfo, isLoading }) => {
  const [userPinCode, setUserPinCode] = useState("");
  const [incorrectPin, setIncorrectPin] = useState(false);

  const handleChange = (event) => {
    setUserPinCode(event.target.value);
    setIncorrectPin(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userPinCode.length !== 6) {
      setIncorrectPin(true);
    } else {
      fetchLocationInfo(userPinCode);
    }
  };

  return (
    <>
      <Flex alignItems="center" justifyContent={"center"}>
        <form onSubmit={handleSubmit}>
          <HStack spacing={3}>
            <FormControl>
              <Input
                type="number"
                name="pincode"
                value={userPinCode}
                onChange={handleChange}
                color={"white"}
                placeholder="Please enter a six digit pincode"
                _placeholder={{ color: 'inherit' }}
                focusBorderColor={
                  userPinCode.length === 0
                    ? "blue.500"
                    : (userPinCode.length > 0 && userPinCode.length < 6) ||
                      userPinCode.length > 6
                    ? "red.700"
                    : "green.700"
                }
                fontSize={'lg'}
                fontWeight={400}
                size={"lg"}
                minWidth={"md"}
                border={"2px solid black"}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blackAlpha"
              size={"lg"}
              isDisabled={isLoading}
            >
              Submit
            </Button>
          </HStack>
        </form>
      </Flex>
      {incorrectPin && <InputInfo />}
    </>
  );
};
