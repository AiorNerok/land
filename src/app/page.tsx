import { cn } from "@/lib/utils";
import { buttonVariants } from "@/shared/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <Link href={"/s"} className={cn( buttonVariants({ variant: "default" }), 'max-w-xl w-full')}>
        Start research
      </Link>
    </div>
  );
}
