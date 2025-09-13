import { getPostById } from "@/services/postServices";
import Breadcrumbs from "@/ui/BreadCrumbs";
import { notFound } from "next/navigation";
import CreatePostForm from "../../_/CreatePostForm";
import { JSX } from "react";

interface EditPageProps {
  params: Promise<{ postId: string }>;
}

async function EditPage({ params }: EditPageProps): Promise<JSX.Element> {
  const { postId } = await params;
  const { post } = await getPostById(postId);
  if (!post) {
    notFound();
  }
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "posts", href: "/profile/posts" },
          {
            label: "Edit Post",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <h1 className="text-secondary-700 font-bold text-2xl mb-6">
        Create a Post
      </h1>
      <CreatePostForm postEdit={post} />
    </div>
  );
}

export default EditPage;
