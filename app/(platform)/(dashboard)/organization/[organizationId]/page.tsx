import { Separator } from "@/components/ui/separator";
import { BoardList } from "./_components/board-list";
import { Info } from "./_components/info";

const OrganizationIdPage = () => {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator />
      <div className="md:px-4 px-2">
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationIdPage;
