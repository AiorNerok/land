import { Box, Flex, Text } from "@radix-ui/themes";

export const Copyright = () => {
  return (
    <Box className="bg-[black] h-14 text-[white] font-work">
      <Flex align={"center"} justify={"center"} height={"100%"}>
        <Text as="p">Copyright 2023. Hronit</Text>
      </Flex>
    </Box>
  );
};
