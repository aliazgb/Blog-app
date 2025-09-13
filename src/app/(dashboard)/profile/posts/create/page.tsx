import Breadcrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "../_/CreatePostForm";
import { JSX } from "react";

function CeatePostPage(): JSX.Element {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "posts", href: "/profile/posts" },
          {
            label: "Create Post",
            href: `/profile/posts/create`,
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
export default CeatePostPage;
