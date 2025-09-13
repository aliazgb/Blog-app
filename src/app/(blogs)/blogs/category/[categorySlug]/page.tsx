import { getPosts } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import Link from "next/link";
import queryString from "query-string";
import { IoMdArrowRoundBack } from "react-icons/io";
import PostList from "../../_components/PostList";

interface CategoryProps {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

async function Category({ params, searchParams }: CategoryProps) {
  const { categorySlug } = await params;
  const search = await searchParams;

  const queries = `${queryString.stringify(
    search
  )}&categorySlug=${categorySlug}`;
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts, totalPages } = await getPosts(queries, options);
  return (
    <div>
      <div className="mb-8">
        <Link href="/blogs">
          <IoMdArrowRoundBack className="text-primary-900 w-6 h-6" />
        </Link>
      </div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          No posts found in this category.
        </p>
      ) : (
        <PostList
          posts={posts}
          totalPages={totalPages}
          showPagination={false}
        />
      )}
    </div>
  );
}

export default Category;
