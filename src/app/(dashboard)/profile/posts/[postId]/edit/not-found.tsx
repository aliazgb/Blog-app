import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { JSX } from "react";

export default function NotFound(): JSX.Element {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-secondary-400" />
      <p>No post found with these details</p>
      <Link
        href="/profile/posts"
        className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-400"
      >
        Go back
      </Link>
    </main>
  );
}
