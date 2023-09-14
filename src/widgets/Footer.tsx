import { Box, Flex, Link } from "@radix-ui/themes";

import Logo from "@/assets/logo.png";
import TgIcon from "@/assets/tg-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-[white] py-6">
      <Flex align={"center"} justify={"center"}>
        <Box>
          <Flex gap={"9"} align={"center"}>
            <Box>
              <img src={Logo} alt="Logo" />
            </Box>
            <Box>
              <Flex direction="column">
                <Link style={{ color: "black" }} href="">
                  Content
                </Link>
                <Link style={{ color: "black" }} href="">
                  Market
                </Link>
              </Flex>
            </Box>
            <Box>
              <Flex direction="column">
                <Link style={{ color: "black" }} href="">
                  Finance
                </Link>
                <Link style={{ color: "black" }} href="">
                  About us
                </Link>
              </Flex>
            </Box>
            <Box>
              <Link style={{ color: "black" }} href="http://">
                <img src={TgIcon} alt="tg" />
              </Link>
            </Box>
            <Box>
              <Flex direction="column">
                <Link style={{ color: "black" }} href="tel:+12389765432">
                  +123 89 76 543 2
                </Link>
                <Link style={{ color: "black" }} href="mailto:hronit@gmail.com">
                  hronit@gmail.com
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </footer>
  );
};
