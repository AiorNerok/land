"use client";

import { SignUp } from "@/entities";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
import { useForm } from "react-hook-form";

export const SignUpButton = () => {
  const form = useForm();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">SignUp</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl hr-shadow">
        <SignUp />
      </DialogContent>
    </Dialog>
  );
};
