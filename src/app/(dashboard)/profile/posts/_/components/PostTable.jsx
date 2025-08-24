import { getPosts } from "@/services/postServices";
import Table from "@/ui/Table";
import TableRow from "./PostRow";

async function PostRow({queries}) {
  const {posts} = await getPosts(queries);
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>title</th>
        <th>category</th>
        <th>Author</th>
        <th>create at</th>
        <th>Type</th>
        <th>Action</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <TableRow posts={post} index={index} key={post._id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PostRow;
