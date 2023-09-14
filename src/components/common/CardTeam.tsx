import { Card, AspectRatio, Flex, Box, Heading, Text } from "@radix-ui/themes";



export const CardTeam = () => {
  return (
    <Card>
      <div>
        <div>
          <AspectRatio>
            <img src="" alt="" />
          </AspectRatio>
        </div>
      </div>
      <Flex>
        <Box>
          <Heading as="h4"></Heading>
          <Text as="p"></Text>
        </Box>
      </Flex>
    </Card>
  );
};
