"use client";

import { SigninEntities } from "@/entities";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";

export const SignInButton = () => {
  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>SignIn</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl hr-shadow flex flex-col justify-center items-center">
        <SigninEntities />
      </DialogContent>
    </Dialog>
  );
};
