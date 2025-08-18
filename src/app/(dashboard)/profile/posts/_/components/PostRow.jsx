import { toShorDate } from "@/lib/toShortDate";
import Table from "@/ui/Table";
import { DeletePost, EditPost } from "./Buttons";

function TableRow({ posts, index }) {
  const { title, category, type, author, createdAt } = posts;
  const date = toShorDate(createdAt);

  const typeStyle = {
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
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{date}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td>
        <div className="flex justify-end  gap-x-3">
          <DeletePost id={posts._id} />
          <EditPost id={posts._id} />
        </div>
      </td>
    </Table.Row>
  );
}

export default TableRow;
