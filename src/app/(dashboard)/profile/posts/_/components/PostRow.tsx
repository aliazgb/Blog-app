import { toShorDate } from "@/lib/toShortDate";
import Table from "@/ui/Table";
import { PostListType } from "types/ApiTypes";
import { JSX } from "react";
import { DeletePost, EditPost } from "./Buttons";

interface TableRowProps {
  posts: PostListType;
  index: number;
}

function TableRow({ posts, index }: TableRowProps): JSX.Element {
  // const { title, category, type, author, createdAt } = posts;
  // const date = toShorDate(createdAt);
  const title = posts.title;
  const categoryTitle = posts.category?.title ?? "Unknown";
  const authorName = posts.author?.name ?? "Unknown";
  const date = posts.createdAt ? toShorDate(posts.createdAt) : "-";
  const type = posts.type ?? "free";

  const typeStyle: Record<
    "free" | "premium",
    { label: string; className: string }
  > = {
    free: {
      label: "free",
      className: "badge--success",
    },
    premium: {
      label: "premium",
      className: "badge--secondary",
    },
  };

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{title}</td>
      {/* <td>{category.title}</td> */}
      <td>{categoryTitle}</td>
      {/* <td>{author.name}</td> */}
      <td>{authorName}</td>
      <td>{date}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td>
        <div className="flex justify-end  gap-x-3">
          <DeletePost post={posts} />
          <EditPost id={posts._id} />
        </div>
      </td>
    </Table.Row>
  );
}

export default TableRow;
