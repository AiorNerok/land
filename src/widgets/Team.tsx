import { AspectRatio } from "@radix-ui/themes";
import { Container } from "@/components/common";

import Vasia from "@/assets/vasia.gif";

export const Team = () => {
  return (
    <Container>
      <div className="max-w-[245px] max-h-[245px] w-full h-full">
        <AspectRatio ratio={1}>
          <img
            src={Vasia}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
          />
        </AspectRatio>
      </div>
    </Container>
  );
};
