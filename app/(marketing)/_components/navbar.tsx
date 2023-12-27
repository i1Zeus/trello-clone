import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="h-14 fixed top-0 flex items-center w-full px-4 bg-white border-b shadow-sm">
      <div className="md:max-w-screen-2xl flex items-center justify-between w-full mx-auto">
        <Logo />
        <div className="md:block md:w-auto flex items-center justify-between w-full space-x-4">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
