import { Container, CardTeam } from "@/components/common";

import Vasia from "@/assets/vasia.gif";
import ania from "@/assets/ania.jpg";
import anton from "@/assets/anton.jpg";
import masha from "@/assets/masha.jpg";
import ruslan from "@/assets/ruslan.jpg";
import { TeamProps } from "@/components/common/CardTeam";
import { Box, Flex, Heading } from "@radix-ui/themes";

export const Team = () => {
  const Team: TeamProps[] = [
    {
      img: Vasia,
      name: "Vasily Schwartz",
      position: "Author of the idea",
    },
    {
      img: masha,
      name: "Masha",
      position: "No Author of the idea",
    },
    {
      img: anton,
      name: "Anton",
      position: "No Author of the idea",
    },
    {
      img: ania,
      name: "Ania",
      position: "No Author of the idea",
    },
    {
      img: ruslan,
      name: "Ruslan Samoylov aka Peesya The Great",
      position: "No Author of the idea",
    },
  ];

  return (
    <Container classNames="flex-row">
      <Box width={"100%"} height={"100%"} pt={'6'}>
        <Flex align={"center"} justify={"center"} mb={"6"}>
          <Heading
            as="h2"
            className="shadow-button shadow-purple rounded-xl font-work text-5xl font-medium px-8 py-5"
            style={{
              background: "rgba(162, 226, 254, 1)",
            }}
          >
            Team
          </Heading>
        </Flex>
        <Flex gap={"3"}>
          {Team.map((el) => (
            <CardTeam key={el.img} {...el}></CardTeam>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};
