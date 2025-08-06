import Spinner from "@/ui/Spinner";
import { Suspense } from "react";
import PostList from "../_components/PostList";

function page() {
  return (
    <div>
      <p className="text-secondary-400 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        similique aut iusto sunt cum, quisquam harum! Officia dolores aperiam
        eveniet consequuntur, dolorum numquam necessitatibus sapiente nam
        perferendis atque. Quae, unde.
      </p>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default page;
