import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, ReactNode } from "react";

interface SidebarNav {
  id: number;
  title: string;
  icon: ReactNode;
  href: string;
}

const sidebarNavs: SidebarNav[] = [
  {
    id: 1,
    title: "dashboard",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "posts",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 3,
    title: "comments",
    icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    href: "/profile/comments",
  },

  {
    id: 54,
    title: "users",
    icon: <UsersIcon className="w-5 h-5" />,
    href: "/profile/users",
  },
];

export default function SideBarNavs(): JSX.Element {
  // const router = useRouter(); pathname nadare dg!
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-4",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    // router.pathname === nav.href,
                    pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
