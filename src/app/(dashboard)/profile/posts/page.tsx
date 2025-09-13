import { getPosts } from "@/services/postServices";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import queryString from "query-string";
import { JSX, Suspense } from "react";
import { CreatePost } from "./_/components/Buttons";
import PostTable from "./_/components/PostTable";
import Pagination from "@/ui/Pagination";

interface PageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

async function page({ searchParams }: PageProps): Promise<JSX.Element> {
  const resolvedSearchParams = await searchParams;
  const queries = queryString.stringify(resolvedSearchParams || {});
  const { totalPages } = await getPosts(queries);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">Post List</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Fallback />} key={queries}>
        <PostTable queries={queries} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center mx-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default page;
