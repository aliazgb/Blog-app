import { getPosts } from "@/services/postServices.server";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import queryString from "query-string";
import { Suspense } from "react";
import { CreatePost } from "./_/components/Buttons";
import PostTable from "./_/components/PostTable";
import Pagination from "@/ui/Pagination";

async function page({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const { totalPages } = await getPosts(queries);
  // console.log(totalPages);
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
