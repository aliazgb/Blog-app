import { getPosts } from "@/services/postServices";
import Pagination from "@/ui/Pagination";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import PostList from "./_components/PostList";
import { JSX } from "react";

interface BlogsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

async function Page({ searchParams }: BlogsPageProps): Promise<JSX.Element> {
  const searchParamsPromise = await searchParams;
  const queries = queryString.stringify(searchParamsPromise);

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);

  const { posts, totalPages } = await getPosts(queries, options);

  const { search } = (await searchParams) || {};
  const resultsText = posts.length > 1 ? "results" : "result";

  return (
    <>
      {search && (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "No posts found with these criteria"
            : `Found ${posts.length} ${resultsText} for `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      )}

      {posts.length > 0 && <PostList posts={posts} showPagination={false} />}

      <div className="mt-9 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}

export default Page;
