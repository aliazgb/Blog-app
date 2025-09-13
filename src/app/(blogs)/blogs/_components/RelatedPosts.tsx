import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";
import { PostListType, Post } from "types/ApiTypes";

interface RelatedPostProps {
  posts: Post[];
}

function mapPostToPostListType(post: Post): PostListType {
  return {
    _id: post._id,
    title: post.title,
    coverImage: post.coverImage,
    slug: post.slug ?? "#",
    author: {
      name: post.author?.name ?? "Unknown",
      avatarUrl:
        post.author?.avatarUrl ||
        "https://i.postimg.cc/BbZkbb9F/1721899817313-127506334.png",
    },
    readingTime: post.readingTime ?? 0,
    commentsCount: post.commentsCount,
    isLiked: post.isLiked,
    isBookmarked: post.isBookmarked,
    category: post.category ?? undefined,
    type: post.type ?? undefined,
    createdAt: post.createdAt ?? undefined,
  };
}

function RelatedPosts({ posts }: RelatedPostProps) {
  const mappedPosts: PostListType[] = posts.map(mapPostToPostListType);

  return (
    <div className=" mb-10">
      <p className="text-xl mb-4">Related Posts</p>
      <div className="grid gap-4 grid-cols-6">
        {mappedPosts.map((item) => (
          <div
            key={item._id}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <Link href={`${item.slug}`}>
              <CoverImage {...item} />
              <div className="flex items-center justify-between">
                <Author
                  name={item.author.name}
                  avatarUrl={item.author.avatarUrl}
                />
                <p>{item.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;
