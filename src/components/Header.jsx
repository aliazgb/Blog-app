"use client";

import { useAuth } from "@/context/AutchContext";
import { useDarkMode } from "@/context/DarkModeContext";
import { FaHome, FaRegMoon, FaSignInAlt, FaUserCog } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import NavLink from "./NavLink";

const navLinks = [
  {
    id: 1,
    path: "/",
    icon: <FaHome className="text-xl sm:text-2xl" />,
  },
  {
    id: 2,
    path: "/blogs",
    icon: <FaBloggerB className="text-xl sm:text-2xl" />,
  },
];

function Header() {
  const { user, isLoading } = useAuth();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header
      className={`z-10 shadow-md backdrop-blur-sm mb-10 sticky top-0 
      transition-all duration-200 border-b border-b-secondary-300 bg-white/80
      text-sm sm:text-lg ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }
      ${isDarkMode ? "!bg-gray-900":""}
    `}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.icon}</NavLink>
                </li>
              );
            })}
            <li onClick={toggleDarkMode}  className="hover:text-secondary-900">
              {isDarkMode ? <FiSun /> : <FaRegMoon />}
            </li>
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">
                <FaUserCog className="text-xl sm:text-2xl" />
              </NavLink>
            ) : (
              <NavLink path="/signin">
                <FaSignInAlt className="text-xl sm:text-2xl" />
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
