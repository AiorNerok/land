"use client";

import { SignInButton, SignUpButton } from "@/features";
import { Icons } from "@/shared";
import Link from "next/link";
import { useSignInModal } from "@/hooks/useSignInModal";
import { useRouter } from "next/navigation";

export default function Header() {
  const { toggleStatusBool, isOpen } = useSignInModal();
  const router = useRouter();

  const testHan = () => {
    toggleStatusBool();
    router.push("/sign-in");
  };

  return (
    <header className="hr-h-header flex items-center">
      <div className="container flex items-center justify-between">
        <Icons.logo />
        <div className="gap-8">
          <Link href={"/sign-in"}>SignIIIN</Link>
        </div>
      </div>
    </header>
  );
}
