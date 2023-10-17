"use client";

import { LogInButton, SignUpButton } from "@/features";
import { Icons } from "@/shared";
import { AvatarEntities } from "@/entities";

export default function Header() {
  return (
    <header className="hr-h-header flex items-center">
      <div className="container flex items-center justify-between">
        <Icons.logo />
        <div className="gap-8">
          <LogInButton />
          <SignUpButton />
        </div>
        <div>
          <AvatarEntities />
        </div>
      </div>
    </header>
  );
}
