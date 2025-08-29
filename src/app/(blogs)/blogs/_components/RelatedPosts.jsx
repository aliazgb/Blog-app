import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";

function RelatedPosts({ posts }) {
  return (
    <div className=" mb-10">
      <p className="text-xl mb-4">Related Posts</p>
      <div className="grid gap-4 grid-cols-6">
        {posts.map((item) => {
          return (
            <div
                key={item._id}
                className="col-span-6 md:col-span-3 lg:col-span-2"
              >
            <Link href={`${item.slug}`}>
              
                <CoverImage {...item} />
                <div className="flex items-center justify-between">
                  <Author {...item.author} />
                  <p>{item.title}</p>
                </div>
             
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedPosts;
