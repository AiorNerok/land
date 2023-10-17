"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

import GOOGLE from "@/assets/google.png";
import Image from "next/image";

type SignUpProps = Record<"email" | "password", string>;

export const LogInEntities = () => {
  const { register, handleSubmit, reset, getFieldState } = useForm<SignUpProps>(
    {
      defaultValues: {
        email: "",
        password: "",
      },
    }
  );

  const SignUpHandler = (data: SignUpProps) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(SignUpHandler)}
      className="max-w-xl w-full flex justify-center items-center gap-4 flex-col m-auto mb-9"
    >
      <h2>Log in</h2>
      <div className="w-full">
        <Label className="text-black text-sm font-bold mb-2">
          Email
          <Input
            className="rounded-none border-black placeholder:text-[#8F9BB3]"
            {...register("email")}
            type="email"
            autoComplete="off"
            placeholder="Example@email.com"
          />
        </Label>
      </div>
      <div className="w-full">
        <Label className="text-black text-sm font-bold mb-2">
          Password
          <Input
            className="rounded-none border-black placeholder:text-[#8F9BB3]"
            {...register("password")}
            type="password"
            autoComplete="on"
          />
        </Label>
      </div>

      <div className="w-full flex justify-between">
        <Label className="flex items-center gap-2">
          <input type="checkbox" /> Remember me
        </Label>
        <Link href={"/"}>Forgot password?</Link>
      </div>
      <div>
        <Image src={GOOGLE} alt="google"></Image>
      </div>
      <Button type="submit" className="w-full font-bold text-xl">
        Log in
      </Button>
    </form>
  );
};
