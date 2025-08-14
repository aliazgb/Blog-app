import PostList from "app/blogs/_components/PostList";

async function Category({ params }) {
  const { categorySlug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`
  );
  const { data } = await res.json();
  const { posts } = data || {};

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
