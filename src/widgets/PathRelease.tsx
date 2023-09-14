import { BarChart } from "@mui/x-charts";

type MyDatum = { position: number; value: number; conversion: number };

export const PathRelease = () => {
  const data: MyDatum[] = [
    {
      position: 1,
      value: 0,
      conversion: 0,
    },
    {
      position: 2,
      value: 0,
      conversion: 0,
    },
    {
      position: 3,
      value: 0,
      conversion: 0,
    },
    {
      position: 4,
      value: 30,
      conversion: 0.25,
    },
    {
      position: 5,
      value: 100,
      conversion: 0.5,
    },
    {
      position: 6,
      value: 200,
      conversion: 1,
    },
    {
      position: 7,
      value: 300,
      conversion: 1.5,
    },
    {
      position: 8,
      value: 400,
      conversion: 2,
    },
    {
      position: 9,
      value: 500,
      conversion: 2.75,
    },
    {
      position: 10,
      value: 600,
      conversion: 3.5,
    },
    {
      position: 11,
      value: 800,
      conversion: 4.25,
    },
    {
      position: 12,
      value: 1000,
      conversion: 5,
    },
  ];

  const Positions = data.map((el) => String(el.position));
  const Series = data.map((el) => el.value);

  return (
    <>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: Positions,
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: Series,
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
};
