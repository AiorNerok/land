"use client";

import { SignUpEntities } from "@/entities";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";

export const SignUpButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>SignUp</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl hr-shadow">
        <SignUpEntities />
      </DialogContent>
    </Dialog>
  );
};
