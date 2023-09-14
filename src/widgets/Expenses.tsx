/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Ticker } from "@/components/common";
import { Box, Heading, Text } from "@radix-ui/themes";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function divideNumberByPieces(x: number, delimiter = " ") {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
}

export const Expenses = () => {
  const data = [
    {
      name: "1",
      Vacancy: 0,
      Conversion: 0,
    },
    {
      name: "2",
      Vacancy: 0,
      Conversion: 0,
    },
    {
      name: "3",
      Vacancy: 0,
      Conversion: 0,
    },
    {
      name: "4",
      Vacancy: 30,
      Conversion: 0.25,
    },
    {
      name: "5",
      Vacancy: 100,
      Conversion: 0.5,
    },
    {
      name: "6",
      Vacancy: 200,
      Conversion: 1.0,
    },
    {
      name: "7",
      Vacancy: 300,
      Conversion: 1.5,
    },
    {
      name: "8",
      Vacancy: 400,
      Conversion: 2.0,
    },
    {
      name: "9",
      Vacancy: 500,
      Conversion: 2.75,
    },
    {
      name: "10",
      Vacancy: 600,
      Conversion: 3.5,
    },
    {
      name: "11",
      Vacancy: 800,
      Conversion: 4.25,
    },
    {
      name: "12",
      Vacancy: 1000,
      Conversion: 5,
    },
  ];

  const dataUsers = [
    { name: 1, Users: 0 },
    { name: 2, Users: 0 },
    { name: 3, Users: 0 },
    { name: 4, Users: 10000 },
    { name: 5, Users: 20000 },
    { name: 6, Users: 40000 },
    { name: 7, Users: 60000 },
    { name: 8, Users: 80000 },
    { name: 9, Users: 110000 },
    { name: 10, Users: 140000 },
    { name: 11, Users: 170000 },
    { name: 12, Users: 200000 },
  ];

  const dataFinance = [
    { name: 1, Revenue: 0.0, Profit: -33000.0 },
    { name: 2, Revenue: 0.0, Profit: -33000.0 },
    { name: 3, Revenue: 0.0, Profit: -33000.0 },
    { name: 4, Revenue: 0.0, Profit: -53000.0 },
    { name: 5, Revenue: 0.0, Profit: -53000.0 },
    { name: 6, Revenue: 6000.0, Profit: -67000.0 },
    { name: 7, Revenue: 15000.0, Profit: -58000.0 },
    { name: 8, Revenue: 24000.0, Profit: -49000.0 },
    { name: 9, Revenue: 42000.0, Profit: -51000.0 },
    { name: 10, Revenue: 63000.0, Profit: -30000.0 },
    { name: 11, Revenue: 102000.0, Profit: 9000.0 },
    { name: 12, Revenue: 150000.0, Profit: 57000.0 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip rounded-xl border p-3 shadow-button bg-[white]">
          <p>{`Vacancy ${payload[0].value} `}</p>
          <p>{`Conversion ${payload[1].value}%`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltipUsers = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip rounded-xl border p-3 shadow-button bg-[white]">
          <p>{`Users: ${divideNumberByPieces(payload[0].value)} `}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <Box className="bg-purple">
      <Ticker text="Progress to future" />
      <Container classNames="flex-col gap-6 py-10">
        <Box className="flex justify-between gap">
          <Box>
            <Heading as="h3" className="text-2xl font-work font-medium">
              Expenses:
            </Heading>
            <Text as="p" className="text-2xl font-work font-medium">
              $400,000 on marketing
            </Text>
            <Text as="p" className="text-2xl font-work font-medium">
              $400,000 on payroll
            </Text>
          </Box>
          <Box className="bg-[white] w-fit border shadow-button rounded-3xl p-3">
            <ComposedChart width={700} height={350} data={data}>
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickFormatter={(tick) => {
                  return `${tick}%`;
                }}
                type="number"
                domain={[0, 6]}
              />
              <Tooltip
                content={CustomTooltip}
                cursor={{ fill: "transparent" }}
              />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar
                yAxisId={"left"}
                dataKey="Vacancy"
                barSize={20}
                fill="blue"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Conversion"
                stroke="red"
              />
            </ComposedChart>
          </Box>
        </Box>
        <Box>
          <Box className="bg-[white] w-fit border shadow-button rounded-3xl p-3">
            <ComposedChart width={700} height={350} data={dataUsers}>
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />

              <Tooltip content={CustomTooltipUsers} />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar yAxisId={"left"} dataKey="Users" barSize={20} fill="blue" />
            </ComposedChart>
          </Box>
        </Box>
        <Box className="flex justify-end">
          <Box className="bg-[white] border shadow-button rounded-3xl p-3">
            <ComposedChart width={700} height={350} data={dataFinance}>
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" domain={[-80000, 170000]} />

              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Bar
                yAxisId={"left"}
                dataKey="Revenue"
                barSize={20}
                fill="blue"
              />
              <Bar yAxisId={"left"} dataKey="Profit" barSize={20} fill="red" />
            </ComposedChart>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
