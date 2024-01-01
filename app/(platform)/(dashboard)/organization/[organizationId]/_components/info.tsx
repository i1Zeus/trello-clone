"use client";

import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";

export const Info = () => {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) return <Info.Skeleton />;

  return (
    <div className="gap-x-4 flex items-center">
      <div className="w-[60px] h-[60px] relative">
        <Image
          src={organization?.imageUrl!}
          alt="organization"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="space-yt-1">
        <p className="text-xl font-semibold">{organization?.name}</p>
        <div className="text-muted-foreground flex items-center text-xs">
          <CreditCard className="w-3 h-3 mr-1" />
          Free
        </div>
      </div>
    </div>
  );
};

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="gap-x-4 flex items-center">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="absolute w-full h-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-[200px]" />
        <div className="flex items-center">
          <Skeleton className="w-4 h-4 mr-2" />
          <Skeleton className="w-[200px] h-4" />
        </div>
      </div>
    </div>
  );
};
