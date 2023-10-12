"use client";

import { SigninEntities } from "@/entities";
import { useSignInModal } from "@/hooks/useSignInModal";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog";
import Link from "next/link";

export const SignInButton = () => {
  const toggleStatusBool = useSignInModal((s) => s.toggleStatusBool);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>SignIn</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl hr-shadow flex flex-col justify-center items-center">
        {/* <SignIn /> */}
        <button onClick={() => toggleStatusBool()}>SignIn</button>
      </DialogContent>
    </Dialog>
  );
};
