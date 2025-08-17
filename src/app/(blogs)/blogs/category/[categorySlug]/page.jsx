import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import PostList from "../../_components/PostList";
import { getPosts } from "@/services/postServices";

async function Category({ params, searchParams }) {
  const { categorySlug } = params;
  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug${categorySlug}`;

  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p>no category found</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;
