"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

type SignUpProps = Record<"email" | "password", string>;

export const SigninEntities = () => {
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
      className="max-w-xl w-full flex justify-center items-center gap-4 flex-col m-auto"
    >
      <h2>Sign Up</h2>
      <div className="w-full">
        <Label>Email</Label>
        <Input
          {...register("email")}
          type="email"
          autoComplete="off"
          placeholder="Example@email.com"
        ></Input>
      </div>
      <div className="w-full">
        <Label>Password</Label>
        <Input
          {...register("password")}
          type="password"
          autoComplete="on"
        ></Input>
      </div>
      <Button type="submit" className="w-full">
        Log in
      </Button>
    </form>
  );
};
