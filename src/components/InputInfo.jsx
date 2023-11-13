import { Alert, AlertIcon, Stack } from "@chakra-ui/react";

export const InputInfo = () => {
  return (
    <Stack spacing={1} w={'md'} justifyContent={"center"} alignItems={"center"} ml={"30%"} mt={"1%"}>
      <Alert status="info">
        <AlertIcon />
        Please insert a six digit postal code.
      </Alert>
    </Stack>
  );
};
