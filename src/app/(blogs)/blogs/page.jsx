import { getPosts } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import PostList from "./_components/PostList";

async function page({ searchParams }) {
  const queries = queryString.stringify(searchParams);

  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);
  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0 ? (
            <span>no post Found For &quot; {search} &quot;</span>
          ) : (
            <span className="font-bold">
              {posts.length} result for &quot; {search} &quot;
            </span>
          )}
        </p>
      ) : null}

      <PostList posts={posts} />
    </>
  );
}

export default page;
