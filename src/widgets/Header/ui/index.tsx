import { SignInButton, SignUpButton } from "@/features";
import { Icons } from "@/shared";

export default function Header() {
  return (
    <header className="py-10">
      <div className="container flex items-center justify-between">
        <Icons.logo />
        <div className="gap-8">
          <SignUpButton />
          <SignInButton />
        </div>
      </div>
    </header>
  );
}