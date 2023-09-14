import { Container } from "@/components/common";
import { Box, Flex, Text } from "@radix-ui/themes";

export const Advantages = () => {
  return (
    <Container classNames="min-h-[800px] mx-auto">
      <Flex justify={"center"} align={"center"} width={"100%"}>
        <Flex justify={"between"} gap={"8"} className="h-96">
          <Box className="w-80 bg-[#FFF7F0] rounded-3xl shadow-button p-6 relative flex ">
            <Text
              className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-button px-6 py-4 text-2xl font-work bg-[#9F87F4] rounded-xl border"
              as="p"
            >
              Сompanies
            </Text>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              gap={"9"}
            >
              <Text className="font-medium text-2xl font-work" as="p">
                3000€ per offer <br /> for companies
              </Text>
              <Text
                className="font-medium text-2xl font-work text-center"
                as="p"
              >
                % for outstaffing <br /> (add after finding out <br /> the
                prices)
              </Text>
            </Flex>
          </Box>
          <Box className="w-80 bg-[#FFF7F0] rounded-3xl shadow-button p-6 relative flex items-center justify-center">
            <Text
              className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-button px-6 py-4 font-work font-medium text-2xl  bg-light-green rounded-xl border"
              as="div"
            >
              Agencies
            </Text>
            <Text className="font-medium text-2xl font-work text-center" as="p">
              10€ per contact for agencies
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};
