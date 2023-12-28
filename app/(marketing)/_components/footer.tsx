import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-slate-100 fixed bottom-0 w-full p-4 border-t">
      <div className="md:max-w-screen-2xl flex items-center justify-between w-full mx-auto">
        <Logo />
        <div className="md:block md:w-auto flex items-center justify-between w-full space-x-4">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </footer>
  );
};
