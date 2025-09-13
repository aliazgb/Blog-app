import Table from "@/ui/Table";
import { CommentRowData } from "types/ApiTypes";
import { DeleteComment, UpdateComment } from "./Buttons";

interface StatusStyle {
  label: string;
  className: string;
}

const statusStyle: StatusStyle[] = [
  {
    label: "Rejected",
    className: "badge--danger",
  },
  {
    label: "Pending Approval",
    className: "badge--secondary",
  },
  {
    label: "Approved",
    className: "badge--success",
  },
];

function CommentRow({ index, comment }: CommentRowData) {
  const {
    content: { text },
    user,
    status,
    createdAt,
  } = comment;
  return (
    <Table.Row>
      <td className="px-2 py-2 w-4 text-center">{index}</td>
      <td className="max-w-[140px] truncate">{text}</td>
      <td className="max-w-[120px] truncate"> {user.name}</td>
      <td className="min-w-[90px] text-nowrap">
        {new Date(createdAt).toLocaleDateString("en-US")}
      </td>
      <td>
        {/* <span
          className={`badge max-w-[150px] ${statusStyle[status].className}`}
        >
          {statusStyle[status].label}
        </span> */}
        <span
          className={`badge max-w-[150px] ${
            statusStyle[Number(status)].className
          }`}
        >
          {statusStyle[Number(status)].label}
        </span>
      </td>
      <td>
        <div className="flex items-center justify-start gap-x-3">
          <UpdateComment comment={comment} />
          <DeleteComment comment={comment} />
        </div>
      </td>
    </Table.Row>
  );
}
export default CommentRow;
