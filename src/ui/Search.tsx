"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLFormElement;
    // const search = e.target.search;
    const searchValue = search.value;
    const newParams = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(pathName + "?" + newParams.toString(), { scroll: false });
  };

  return (
    <form className="relative" onSubmit={formSubmit}>
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
