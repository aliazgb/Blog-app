"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {


  return (
    <form className="relative" >
      <input
        type="text"
        name="search"
        placeholder="search..."
        autoComplete="off"
        className="textField__input py-3 text-xs bg-secondary-0 pl-10"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center "
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}