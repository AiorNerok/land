import { cn } from "@/lib";
import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren & {
  classNames?: string;
};

export const Container = ({ children, classNames }: ContainerProps) => {
  return (
    <div
      className={cn(
        "px-3 max-w-6xl w-full mx-auto min-h-screen relative flex",
        classNames
      )}
    >
      {children}
    </div>
  );
};
