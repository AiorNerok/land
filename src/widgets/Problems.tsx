import { Container } from "@/components/common";
import { Box, Text } from "@radix-ui/themes";

export const Problems = () => (
  <Container>
    <Box className="w-full flex flex-col justify-center items-center">
      <Text as="p">
        <Text as="span">We heard</Text> it’s hard to get quality inbound
        applications for your jobs. So we fixed it.
      </Text>
      <Text as="p">
        <Text as="span">Turns out</Text>, sourcing isn’t the only way to
        convince passive candidates to join your team
      </Text>
    </Box>
  </Container>
);
