import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";
import PostInterAction from "./PostInterAction";

async function PostList() {
  await new Promise((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 p-2 rounded-lg"
        >
          <CoverImage {...post} />
          {/*post content */}

          <Link href={`/blogs/${post.slug}`}>
            <h2 className="mb-4 font-bold text-secondary-700">{post.title}</h2>
          </Link>

          {/*post author - ReadingTime */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-[10px] text-secondary-500">
              <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />

              <span className="ml-1"> Read time:</span>
              <span className="ml-1 leading-3">{post.readingTime}</span>
              <span>minutes</span>
            </div>

        
          </div>
          <PostInterAction post={post}/>
        </div>
      ))}
    </div>
  );
}

export default PostList;
