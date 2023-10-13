"use client";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useForm } from "react-hook-form";

type SignUpProps = Record<
  "username" | "email" | "password" | "passwordRepeat",
  string
>;

export const SignUpEntities = () => {
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
      <h2>SignUp</h2>
      <div className="w-full">
        <Label>Username</Label>
        <Input {...register("username")} type="text" autoComplete="off" />
      </div>
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
      <div className="w-full">
        <Label>Password Repeat</Label>
        <Input
          {...register("passwordRepeat")}
          type="password"
          autoComplete="on"
        ></Input>
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};

//
