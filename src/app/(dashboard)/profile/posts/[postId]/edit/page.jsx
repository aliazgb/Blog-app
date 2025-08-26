import { getPostById } from "@/services/postServices";
import Breadcrumbs from "@/ui/BreadCrumbs";

function EditPage({ params: { postId } }) {
  const post = getPostById();
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "posts", href: "/profile/posts" },
          {
            label: "Create Post",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <h1 className="text-secondary-700 font-bold text-2xl mb-6">
        Create a Post
      </h1>
      <CreatePostForm />
    </div>
  );
}

export default EditPage;
