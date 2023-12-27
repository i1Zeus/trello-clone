import { Medal } from "lucide-react";

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-amber-100 text-amber-700 flex items-center justify-center p-4 mb-4 uppercase border rounded-full shadow-sm">
          <Medal className="w-6 h-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="md:text-6xl text-neutral-800 mb-6 text-3xl text-center">
          Taskify helps teams move
        </h1>
        <div className="md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 w-fit p-2 px-4 pb-4 text-3xl text-white rounded-md">
          work forward.
        </div>
      </div>
      <div className="md:text-lg text-neutral-400 max-w-xs mx-auto mt-4 text-sm text-center">
        Collaborate, manage projects, and reach new productivity peaks. From
        high home office, the way your team works is unique - accomplish it all
        with Taskify.
      </div>
    </div>
  );
};

export default MarketingPage;
