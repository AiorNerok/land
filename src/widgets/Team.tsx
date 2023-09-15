import { Container, CardTeam } from "@/components/common";

import Vasia from "@/assets/vasia.png";
import ania from "@/assets/ania.jpg";
import anton from "@/assets/anton.png";
import masha from "@/assets/masha.png";
import ruslan from "@/assets/ruslan.png";
import { TeamProps } from "@/components/common/CardTeam";
import { Box, Flex, Heading } from "@radix-ui/themes";

export const Team = () => {
  const Team: TeamProps[] = [
    {
      img: Vasia,
      name: "Vasily Schwartz",
      position: "Ceo",
    },
    {
      img: masha,
      name: "Masha",
      position: "Product Manager",
    },
    {
      img: anton,
      name: "Anton",
      position: "FullStack Dev",
    },
    {
      img: ania,
      name: "Ania",
      position: "UI/UX Design",
    },
    {
      img: ruslan,
      name: "Ruslan Samoylov",
      position: "Architect",
    },
  ];

  return (
    <Container classNames="flex-row min-h-min">
      <Box width={"100%"} pt={"6"} id="About_us">
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
