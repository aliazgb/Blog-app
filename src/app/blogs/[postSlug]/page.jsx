import { getPostSlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import NotFound from "./not-found";



export async function generateMetadata({ params }) {
  const post = await getPostSlug(params.postSlug);

  return {
    title: `${post.title}`,
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.slice(0, 2).map((post) => ({ postSlug: post.slug }));
}

async function SinglePost({ params }) {
  await new Promise((res) => setTimeout(() => res(), 3000));

  const post = await getPostSlug(params.postSlug);

  if (!post) return NotFound();
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
          alt={post.briefText}
        />
      </div>
    </div>
  );
}

export default SinglePost;
