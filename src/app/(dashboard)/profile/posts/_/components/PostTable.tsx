import { getPosts } from "@/services/postServices";
import Table from "@/ui/Table";
import TableRow from "./PostRow";
import { JSX } from "react";
import { PostListType } from "types/ApiTypes";

interface PostRowProps {
  queries: string;
}

async function PostRow({ queries }: PostRowProps): Promise<JSX.Element> {
  const { posts } = await getPosts(queries);
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
        {posts.map((post: PostListType, index: number) => (
          <TableRow posts={post} index={index} key={post._id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PostRow;
