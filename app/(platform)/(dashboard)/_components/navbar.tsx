import { Plus } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="h-14 fixed top-0 z-50 flex items-center w-full px-4 bg-white border-b shadow-sm">
      {/* Mobile Side bar */}
      <div className="gap-x-4 flex items-center">
        <div className="md:flex hidden">
          <Logo />
        </div>
        <Button
          size="sm"
          variant="primary"
          className="rounded-sm md:block py-1.5 hidden h-auto px-2"
        >
          Create
        </Button>
        <Button className="md:hidden block rounded-sm">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      <div className="gap-x-2 flex items-center ml-auto">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
