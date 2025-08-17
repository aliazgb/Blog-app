"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";

function SideBar({ onClose }) {
  const logoutHandler = async () => {
    await logout;
  };

  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <div className="flex items-center  justify-between w-full   mb-5 pb-2 border-b-secondary-200 ">
        <Link
          href="/"
          className="flex items-center gap-x-2 px-3  text-secondary-700  lg:flex-1"
        >
          <HomeIcon className="w-6 h-6" />
          <span> next-blog</span>
        </Link>
        <ButtonIcon
          onClick={onClose}
          className="block lg:hidden border-none"
          variant="outline"
        >
          <XMarkIcon />
        </ButtonIcon>
      </div>
      {/* Drawer content */}
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <div className="flex items-center gap-x-1 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3  hover:text-red-400 cursor-pointer">
          <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
          <span>sign out</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
