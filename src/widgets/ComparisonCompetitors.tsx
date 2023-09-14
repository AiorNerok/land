import { AspectRatio, Box } from "@radix-ui/themes";
import { Ticker } from "@/components/common";

import In from "@/assets/c/in.png";
import Other from "@/assets/c/other.png";
import Indeed from "@/assets/c/indeed.png";
import Hronit from "@/assets/c/hronit.png";
import H from "@/assets/c/h.png";

function divideNumberByPieces(x: number, delimiter = " ") {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
}

export const ComparisonCompetitors = () => {
  return (
    <Box className="bg-purple min-h-screen relative flex items-center justify-center">
      <Box className="absolute top-0 inset-x-0">
        <Ticker text="Сompetitor analysis" />
      </Box>
      <Box className="font-work text-xl bg-[#FEFCF7] shadow-button rounded-3xl">
        <Box className="table p-8">
          <Box className="table-header-group">
            <Box className="table-row">
              <Box className="table-cell" />
              <Box className="table-cell">
                <Box className="w-14 h-14 mx-auto">
                  <AspectRatio ratio={1}>
                    <img src={In} alt="" />
                  </AspectRatio>
                </Box>
              </Box>
              <Box className="table-cell">
                <Box className="w-14 h-14 mx-auto">
                  <AspectRatio ratio={1}>
                    <img src={Indeed} alt="" />
                  </AspectRatio>
                </Box>
              </Box>
              <Box className="table-cell">
                <Box className="w-14 h-14 mx-auto">
                  <AspectRatio ratio={1}>
                    <img src={Hronit} alt="" />
                  </AspectRatio>
                </Box>
              </Box>
              <Box className="table-cell">
                <Box className="w-14 h-14 mx-auto">
                  <AspectRatio ratio={1}>
                    <img src={H} alt="" />
                  </AspectRatio>
                </Box>
              </Box>
              <Box className="table-cell">
                <Box className="w-14 h-14 mx-auto">
                  <AspectRatio ratio={1}>
                    <img src={Other} alt="" />
                  </AspectRatio>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="table-row-group">
            <Box className="table-row">
              <Box className="table-cell p-4 py-8">Volume of it vacancies</Box>
              <Box className="table-cell p-4">
                ≈{divideNumberByPieces(50000)}+
              </Box>
              <Box className="table-cell p-4">
                ≈{divideNumberByPieces(25000)}+
              </Box>
              <Box className="table-cell p-4">
                ≈{divideNumberByPieces(20000)}+
              </Box>
              <Box className="table-cell p-4">≈{divideNumberByPieces(50)}+</Box>
              <Box className="table-cell p-4">
                ≈{divideNumberByPieces(1000)}+
              </Box>
            </Box>

            <Box className="table-row">
              <Box className="table-cell p-4 py-8">
                Number of contacts before offer
              </Box>
              <Box className="table-cell p-4">≈1-2%+</Box>
              <Box className="table-cell p-4">≈1-2%+</Box>
              <Box className="table-cell p-4">≈5%+</Box>
              <Box className="table-cell p-4">≈1%+</Box>
              <Box className="table-cell p-4">≈1-2%+</Box>
            </Box>

            <Box className="table-row">
              <Box className="table-cell p-4 py-8">Search time</Box>
              <Box className="table-cell p-4">≈3-4 month</Box>
              <Box className="table-cell p-4">≈2-3 month</Box>
              <Box className="table-cell p-4">≈1 day</Box>
              <Box className="table-cell p-4">≈2-3 month</Box>
              <Box className="table-cell p-4">≈3 weeks</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
