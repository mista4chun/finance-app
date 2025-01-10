import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageNavMobile from "./PageNavMobile";
import Sidebar from "./Sidebar";

function AppLayout() {
  const location = useLocation(); 
  return (
    <section className="grid h-screen lg:grid-cols-[auto_1fr] ">
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      <div className="grid grid-rows-[1fr_auto] overflow-y-scroll">
      <AnimatePresence mode="wait">
        <motion.main
           key={location.pathname} // Re-animate on route change
           initial={{ opacity: 0, y: 20 }} // Starting animation
           animate={{ opacity: 1, y: 0 }} // While in DOM
           exit={{ opacity: 0, y: -20 }} // Exit animation
           transition={{ duration: 0.4, ease: "easeInOut" }}
         className=" mx-auto container mb-10  px-6 ">
          <Outlet />
        </motion.main>
        </AnimatePresence>

        <footer>
          <PageNavMobile />
        </footer>
      </div>
    </section>
  );
}

export default AppLayout;
