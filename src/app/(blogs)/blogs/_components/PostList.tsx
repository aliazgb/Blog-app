import Pagination from "@/ui/Pagination";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import CoverImage from "./CoverImage";
import PostInterAction from "./PostInterAction";
import { JSX } from "react";
import { PostListProps } from "types/ApiTypes";

async function PostList({
  posts,
  totalPages,
  showPagination = true,
}: PostListProps): Promise<JSX.Element | null> {
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 shadow-md p-2 rounded-lg
          hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] transition-all duration-300
          "
          key={post._id}
        >
          <Link href={`/blogs/${post.slug}`}>
            <CoverImage {...post} />
            <div>
              <h2 className="my-2 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
                {post.title}
              </h2>
              <div className="flex items-center justify-between mb-4">
                {/* <Author {...post.author} /> */}
                <div className="flex items-center text-[12px] text-secondary-500">
                  <ClockIcon className="w-4 h-4 stroke-secondary-500 mr-1" />
                  <span>{post.readingTime}</span>
                  <span> Minute</span>
                </div>
              </div>
            </div>
          </Link>
          <PostInterAction post={post} />
        </div>
      ))}
      {showPagination && (
        <div className="mt-8  flex w-full justify-center">
          <Pagination totalPages={totalPages ?? 1} />
        </div>
      )}
    </div>
  ) : null;
}

export default PostList;
