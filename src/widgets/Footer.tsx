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
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  href="#Content"
                >
                  Content
                </Link>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  href="#Market"
                >
                  Market
                </Link>
              </Flex>
            </Box>
            <Box>
              <Flex direction="column">
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  href="#Finance"
                >
                  Finance
                </Link>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  href="#About_us"
                >
                  About us
                </Link>
              </Flex>
            </Box>
            <Box>
              <Link style={{ color: "black" }} href="https://t.me/mudaist">
                <img src={TgIcon} alt="tg" />
              </Link>
            </Box>
            <Box>
              <Flex direction="column">
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  href="tel:+79992133600"
                >
                  +7(999)213-36-00
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </footer>
  );
};
