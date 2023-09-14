import { Card, AspectRatio, Flex, Box, Heading, Text } from "@radix-ui/themes";

export type TeamProps = {
  name: string;
  position: string;
  img: string;
};

export const CardTeam = ({ img, name, position }: TeamProps) => {
  return (
    <Card
      className="rounded-2xl shadow-button inline-block even:mt-6 h-fit"
      style={{
        flex: 1,
        background: "rgba(255, 247, 240, 1)",
      }}
    >
      <Flex direction={"column"} height={"100%"} gap={"5"}>
        <Box width={"100%"}>
          <AspectRatio ratio={1}>
            <img className="rounded-full" src={img} alt="" />
          </AspectRatio>
        </Box>
        <Box style={{ flex: 1 }} className="mb-3">
          <Flex
            justify={"center"}
            align={"center"}
            direction={"column"}
            height={"100%"}
          >
            <Heading
              className="text-center font-work font-medium text-4xl"
              as="h4"
            >
              {name}
            </Heading>
            <Text
              className="text-center font-work font-medium text-2xl"
              style={{ letterSpacing: "-2px" }}
              as="p"
            >
              {position}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};
