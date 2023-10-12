"use client";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchemas } from "./validation";

export const SignInButton = () => {
  const EmailId = useId();
  const PasswordId = useId();

  const form = useForm<z.infer<typeof formSchemas>>({
    resolver: zodResolver(formSchemas),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>SignIn</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl hr-shadow flex flex-col justify-center items-center">
        <DialogHeader>
          <DialogTitle>Sign In Form</DialogTitle>
        </DialogHeader>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
