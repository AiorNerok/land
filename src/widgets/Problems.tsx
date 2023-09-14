import { Container } from "@/components/common";
import { Box, Text } from "@radix-ui/themes";

export const Problems = () => (
  <Container>
    <Box className="w-full flex flex-col justify-center items-center space-y-10">
      <Text as="p" className="text-4xl w-[780px] text-center">
        <Text as="span" className="text-purple-text text-5xl">
          We heard
        </Text>{" "}
        it’s hard to get quality inbound applications for your jobs. So we fixed
        it.
      </Text>
      <Text as="p" className="text-3xl w-[780px] text-center">
        <Text as="span" className="text-purple-text text-4xl">
          Turns out
        </Text>
        , sourcing isn’t the only way to convince passive candidates to join
        your team
      </Text>
    </Box>
  </Container>
);
