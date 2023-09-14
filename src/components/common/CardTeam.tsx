import { Card, AspectRatio, Flex, Box, Heading, Text } from "@radix-ui/themes";

export type TeamProps = {
  name: string;
  position: string;
  img: string;
};

export const CardTeam = ({ img, name, position }: TeamProps) => {
  return (
    <Card style={{
      flex: 1
    }}>
      <Box width={"100%"}>
        <AspectRatio ratio={1}>
          <img className="rounded-full" src={img} alt="" />
        </AspectRatio>
      </Box>
      <Flex>
        <Box>
          <Heading as="h4">{name}</Heading>
          <Text as="p">{position}</Text>
        </Box>
      </Flex>
    </Card>
  );
};
