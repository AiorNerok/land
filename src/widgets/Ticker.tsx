import { useState, useLayoutEffect } from "react";
import { Box, Flex } from "@radix-ui/themes";

import Marquee from "react-fast-marquee";

const Item = () => (
  <Box className="font-grotesk text-light-green mr-6 w-[190px]">
    <Flex direction={"row"} align={"center"} justify={"between"} gap={"2"}>
      <Cloud />
      Сompetitor analysis
    </Flex>
  </Box>
);

export const Ticker = () => {
  const [count, setCount] = useState(10);

  useLayoutEffect(() => {
    setCount(Math.round(window.innerWidth / 200) + 1);

    window.addEventListener("resize", () =>
      setCount(Math.round(window.innerWidth / 200) + 1)
    );

    return () => {
      window.removeEventListener("resize", () =>
        setCount(Math.round(window.innerWidth / 195) + 1)
      );
    };
  }, []);

  return (
    <Marquee className="bg-[black] py-6">
      {[...Array(count).keys()].map((i) => (
        <Item key={i} />
      ))}
    </Marquee>
  );
};

const Cloud = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.74 12.9101C21.48 12.0501 21.05 11.3001 20.48 10.6901C19.75 9.8601 18.78 9.2901 17.69 9.0401C17.14 6.5401 15.6 4.7401 13.41 4.0701C11.03 3.3301 8.27 4.0501 6.54 5.8601C5.02 7.4501 4.52 9.6401 5.11 11.9701C3.11 12.4601 2.12 14.1301 2.01 15.7201C2 15.8301 2 15.9301 2 16.0301C2 17.9101 3.23 20.0201 5.97 20.2201H16.35C17.77 20.2201 19.13 19.6901 20.17 18.7401C21.8 17.3101 22.4 15.0801 21.74 12.9101Z"
      fill="#49DBC8"
    />
  </svg>
);
