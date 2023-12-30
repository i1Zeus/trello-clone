import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="md:pt-24 2xl:max-w-screen-xl max-w-6xl px-4 pt-20 mx-auto">
      <div className="gap-x-7 flex">
        <div className="shrink-0 md:block hidden w-64">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
