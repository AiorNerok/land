import { cn } from "@/lib/utils";
import { buttonVariants } from "@/shared/ui/button";
import Link from "next/link";

import LINKED from "@/assets/linked.png";
import TG from "@/assets/tg.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="self-end">
          <Image src={LINKED} alt="linked" width={200} height={200} />
        </div>
        <h1 className="text-8xl font-black mb-5">Find your ideal job in IT</h1>
        <p className="text-3xl font-normal leading-10">Ai job search in IT</p>
        <p className="text-3xl font-normal leading-10">
          All vacancies in IT are available in one place
        </p>
        <p className="text-3xl font-normal leading-10 mb-14">
          Get 100% relevant talents here
        </p>
        <Link
          href={"/s"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "max-w-xl w-full  font-bold text-xl"
          )}
        >
          Start research
        </Link>
        <div className="self-start">
          <Image src={TG} alt="tg" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
