import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="bg-amber-100 text-amber-700 flex items-center p-4 mb-4 uppercase border rounded-full shadow-sm">
          <Medal className="w-6 h-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="md:text-6xl text-neutral-800 mb-6 text-3xl text-center">
          Taskify helps team move
        </h1>
        <div className="md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 w-fit p-2 px-4 pb-4 text-3xl text-white rounded-md">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
