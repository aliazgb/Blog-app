import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import PostRow from "./PostRow";

async function PostsTable({ query = "" }) {
  const { posts } = await getPosts(query);


  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Title</th>
        <th>Category</th>
        <th>Author</th>
        <th>Created At</th>
        <th>Type</th>
        <th>Actions</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default PostsTable;
