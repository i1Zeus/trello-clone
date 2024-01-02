import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";
import { HelpCircle, User2 } from "lucide-react";

export const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="text-neutral-700 flex items-center text-lg font-semibold">
        <User2 className="w-6 h-6 mr-2" />
        Your Boards
      </div>
      <div className="sm:grid-cols-3 lg:grid-cols-4 grid grid-cols-4 gap-4">
        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video bg-muted gap-y-1 hover:opacity-75 relative flex flex-col justify-center w-full h-full transition rounded-sm"
          >
            <p className="text-sm">Create, new board</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              sideOffset={30}
              description="Free work spaces can have up to 5 open boards, For unlimited boards upgrade this workspace"
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14ps]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="gird-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid gap-4">
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
    </div>
  );
};
