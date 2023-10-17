"use client";

import { LogInEntities } from "@/entities";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";

export const LogInButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Log In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl hr-shadow bg-[#FFF7F0] flex flex-col justify-center items-center">
        <LogInEntities />
      </DialogContent>
    </Dialog>
  );
};
