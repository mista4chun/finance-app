import { useState } from "react";
import { NavLink } from "react-router-dom";

function PageNavDesktop() {
  const [minimizeMenu, setMinimizeMenu] = useState(false);
  return (
    <section
      className={`h-screen rounded-r-xl bg-[#201f24] ${minimizeMenu ? "w-20" : "w-72"}`}
    >
      <nav className="flex h-screen flex-col items-start justify-between py-10">
        <div className="px-6 ">
          <img
            src={minimizeMenu ? "/logo-small.svg" : "/logo-large.svg"}
            alt="Logo"
          />
        </div>

        <ul className=" -mt-[21rem] space-y-3">
          <li>
            <NavLink
              to="/overview"
              className={({ isActive }) =>
                isActive
                  ? `flex items-start gap-4 rounded-r-xl border-l-4 border-[#277c78] bg-gray-200 py-3.5 ${minimizeMenu ? "w-16 px-4" : "w-64 px-4"}`
                  : `${minimizeMenu ? "px-6" : "px-6"} flex items-start gap-4 py-3.5`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    fill={
                      isActive
                        ? `${minimizeMenu ? "#000" : "#277c78 "}`
                        : "#b3b3b3"
                    }
                    height="19"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 8.593v8.667a1.5 1.5 0 0 1-1.5 1.5h-3.75a1.5 1.5 0 0 1-1.5-1.5v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3.75a1.5 1.5 0 0 1-1.5 1.5H1.5a1.5 1.5 0 0 1-1.5-1.5V8.593a1.5 1.5 0 0 1 .485-1.105l7.5-7.076.01-.01a1.5 1.5 0 0 1 2.029.01l7.5 7.076A1.5 1.5 0 0 1 18 8.593z" />
                  </svg>

                  <span
                    className={
                      isActive
                        ? `${minimizeMenu ? "hidden" : "block"} font-semibold text-black`
                        : `${minimizeMenu ? "hidden" : "block"} font-semibold text-[#b3b3b3]`
                    }
                  >
                    Overview
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                isActive
                  ? `flex items-start gap-4 rounded-r-xl border-l-4 border-[#277c78] bg-gray-200 py-3.5 ${minimizeMenu ? "w-16 px-4" : "w-64 px-4"}`
                  : `${minimizeMenu ? "px-6" : "px-6"} flex items-start gap-4 py-3.5`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    fill={
                      isActive
                        ? `${minimizeMenu ? "#000" : "#277c78 "}`
                        : "#b3b3b3"
                    }
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.193 12.973a.75.75 0 0 1-.162.818l-3 3a.748.748 0 0 1-1.062 0l-3-3A.75.75 0 0 1 1.5 12.51h2.25V1.26a.75.75 0 0 1 1.5 0v11.25H7.5a.75.75 0 0 1 .693.463zM17.03 3.73l-3-3a.749.749 0 0 0-1.061 0l-3 3a.75.75 0 0 0 .53 1.281h2.25v11.25a.75.75 0 1 0 1.5 0V5.01h2.25a.75.75 0 0 0 .53-1.28z" />
                  </svg>

                  <span
                    className={
                      isActive
                        ? `${minimizeMenu ? "hidden" : "block"} font-semibold text-black`
                        : `${minimizeMenu ? "hidden" : "block"} font-semibold text-[#b3b3b3]`
                    }
                  >
                    Transactions
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/budgets"
              className={({ isActive }) =>
                isActive
                  ? `flex items-start gap-4 rounded-r-xl border-l-4 border-[#277c78] bg-gray-200 py-3.5 ${minimizeMenu ? "w-16 px-4" : "w-64 px-4"}`
                  : `${minimizeMenu ? "px-6" : "px-6"} flex items-start gap-4 py-3.5`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    fill={
                      isActive
                        ? `${minimizeMenu ? "#000" : "#277c78 "}`
                        : "#b3b3b3"
                    }
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.32 8.592a9.592 9.592 0 0 1 2.186-5.04 1.5 1.5 0 0 1 2.215-.103l2.594 2.65a1.488 1.488 0 0 1 .159 1.92 2.4 2.4 0 0 0-.347.726.375.375 0 0 1-.358.265H.694a.375.375 0 0 1-.374-.418zM10.88.016A1.5 1.5 0 0 0 9.25 1.51v3.813A1.487 1.487 0 0 0 10.492 6.8 3 3 0 0 1 11 12.59a.38.38 0 0 0-.249.358v6.115a.374.374 0 0 0 .418.375 9.782 9.782 0 0 0 8.582-9.54c.07-5.089-3.826-9.43-8.87-9.882zM8.992 12.588a3 3 0 0 1-1.819-1.821.38.38 0 0 0-.356-.257H.693a.376.376 0 0 0-.375.417 9.76 9.76 0 0 0 8.514 8.515.375.375 0 0 0 .417-.375v-6.12a.38.38 0 0 0-.257-.36z" />
                  </svg>

                  <span
                    className={
                      isActive
                        ? `${minimizeMenu ? "hidden" : "block"} font-semibold text-black`
                        : `${minimizeMenu ? "hidden" : "block"} font-semibold text-[#b3b3b3]`
                    }
                  >
                    Budgets
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pots"
              className={({ isActive }) =>
                isActive
                  ? `flex items-start gap-4 rounded-r-xl border-l-4 border-[#277c78] bg-gray-200 py-3.5 ${minimizeMenu ? "w-16 px-4" : "w-64 px-4"}`
                  : `${minimizeMenu ? "px-6" : "px-6"} flex items-start gap-4 py-3.5`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    fill={
                      isActive
                        ? `${minimizeMenu ? "#000" : "#277c78 "}`
                        : "#b3b3b3"
                    }
                    height="22"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.25 3.336V1.76a1.5 1.5 0 0 0-1.5-1.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v1.576a3.755 3.755 0 0 0-3 3.674v10.5a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V7.01a3.755 3.755 0 0 0-3-3.674zm-6-1.576h1.5v1.5h-1.5zm-3 0h1.5v1.5h-1.5zm4.5 14.25v.75a.75.75 0 1 1-1.5 0v-.75H7.5a.75.75 0 1 1 0-1.5h2.25a.75.75 0 1 0 0-1.5h-1.5a2.25 2.25 0 1 1 0-4.5v-.75a.75.75 0 0 1 1.5 0v.75h.75a.75.75 0 1 1 0 1.5H8.25a.75.75 0 1 0 0 1.5h1.5a2.25 2.25 0 0 1 0 4.5zm3-12.75h-1.5v-1.5h1.5z" />
                  </svg>

                  <span
                    className={
                      isActive
                        ? `${minimizeMenu ? "hidden" : "block"} font-semibold text-black`
                        : `${minimizeMenu ? "hidden" : "block"} font-semibold text-[#b3b3b3]`
                    }
                  >
                    Pots
                  </span>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recurring-bills"
              className={({ isActive }) =>
                isActive
                  ? `flex items-center gap-4 rounded-r-xl border-l-4 border-[#277c78] bg-gray-200 py-3.5 ${minimizeMenu ? "w-16 px-4" : "w-64 px-4"}`
                  : `${minimizeMenu ? "px-6" : "px-6"} flex items-center gap-4 py-3.5`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    fill={
                      isActive
                        ? `${minimizeMenu ? "#000" : "#277c78 "}`
                        : "#b3b3b3"
                    }
                    height="17"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.25.51H1.75a1.5 1.5 0 0 0-1.5 1.5v14.25a.75.75 0 0 0 1.086.67L4 15.598l2.664 1.332a.75.75 0 0 0 .672 0L10 15.598l2.664 1.332a.75.75 0 0 0 .672 0L16 15.598l2.664 1.332a.75.75 0 0 0 1.086-.67V2.01a1.5 1.5 0 0 0-1.5-1.5zm-3.75 9.75h-9a.75.75 0 1 1 0-1.5h9a.75.75 0 1 1 0 1.5zm0-3h-9a.75.75 0 0 1 0-1.5h9a.75.75 0 1 1 0 1.5z" />
                  </svg>

                  <span
                    className={
                      isActive
                        ? `${minimizeMenu ? "hidden" : "block"} font-semibold text-black`
                        : `${minimizeMenu ? "hidden" : "block"} font-semibold text-[#b3b3b3]`
                    }
                  >
                    Recurring Bills
                  </span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
        <button className="px-8" onClick={() => setMinimizeMenu(!minimizeMenu)}>
          {minimizeMenu ? (
            <img src="/icon-minimize-menu.svg" alt="minimize" />
          ) : (
            <>
              <img
                src="/icon-minimize-menu.svg"
                alt="minimize"
                className="inline-block pr-2"
              />
              <span className="font-semibold text-[#b3b3b3]">
                Minimize Menu
              </span>
            </>
          )}
        </button>
      </nav>
    </section>
  );
}

export default PageNavDesktop;
