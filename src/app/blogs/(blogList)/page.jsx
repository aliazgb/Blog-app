import { getPosts } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import PostList from "../_components/PostList";

async function page() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options);
  return (
    <div>
      <p className="text-secondary-400 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        similique aut iusto sunt cum, quisquam harum! Officia dolores aperiam
        eveniet consequuntur, dolorum numquam necessitatibus sapiente nam
        perferendis atque. Quae, unde.
      </p>
      <PostList posts={posts} />
    </div>
  );
}

export default page;
