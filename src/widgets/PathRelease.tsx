import { Flex } from "@radix-ui/themes";

export const PathRelease = () => {
  const stats = [
    { id: 1, name: "3 months", value: "MVP release" },
    { id: 2, name: "6 months", value: "Product launch" },
    {
      id: 3,
      value:
        "Initiation of marketing strategy implementation starting from the",
      name: "4th month",
    },
  ];

  return (
    <Flex align={"center"} justify={"center"}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4 justify-center border bg-[#fff] shadow-button p-5 rounded-2xl"
              >
                <dt className="text-2xl text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Flex>
  );
};
