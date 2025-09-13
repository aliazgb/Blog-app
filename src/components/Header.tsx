"use client";

import { useAuth } from "@/context/AutchContext";
import { useDarkMode } from "@/context/DarkModeContext";
import {
  FaBloggerB,
  FaHome,
  FaRegMoon,
  FaSignInAlt,
  FaUserCog,
} from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { JSX } from "react";
import NavLink from "./NavLink";

type NavLinkType = {
  id: number;
  path: string;
  icon: JSX.Element;
};

const navLinks: NavLinkType[] = [
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

function Header(): JSX.Element {
  const { user } = useAuth();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header
      className={`z-10 shadow-md backdrop-blur-sm mb-10 sticky top-0 
      transition-all duration-200 border-b border-b-secondary-300 bg-white/80
      text-sm sm:text-lg
      ${isDarkMode ? "!bg-gray-700/40 backdrop-blur-xl" : ""}
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
            <li
              onClick={toggleDarkMode}
              className="hover:text-secondary-900 cursor-pointer"
            >
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
