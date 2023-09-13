import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-3 max-w-6xl w-full mx-auto min-h-screen relative flex">{children}</div>
  );
};
