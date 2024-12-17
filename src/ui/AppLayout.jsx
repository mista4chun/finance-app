import { Outlet } from "react-router-dom";
import PageNavMobile from "./PageNavMobile";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <section className="grid h-screen lg:grid-cols-[auto_1fr] ">
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      <div className="grid grid-rows-[1fr_auto] overflow-y-scroll">
        <main className=" mx-auto container  px-4 xl:px-16">
          <Outlet />
        </main>

        <footer>
          <PageNavMobile />
        </footer>
      </div>
    </section>
  );
}

export default AppLayout;
