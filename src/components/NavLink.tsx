"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, ReactNode } from "react";

interface NavLinkProps {
  path: string;
  children: ReactNode;
}

function NavLink({ path, children }: NavLinkProps): JSX.Element {
  const pathname = usePathname();

  return (
    <Link
      className={`block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "text-primary-900" : ""}
      `}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
