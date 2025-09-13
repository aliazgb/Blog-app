import Table from "@/ui/Table";
import { User } from "types/Signup";

interface UsersRowProps {
  index: number;
  user: User;
}

function UsersRow({ index, user }: UsersRowProps) {
  const { name, email, createdAt } = user;
  return (
    <Table.Row>
      <td className="px-2 py-2 w-4 text-center">{index + 1}</td>
      <td className="max-w-[100px] truncate">{name}</td>
      <td className="max-w-[140px] truncate">{email}</td>
      <td className="min-w-[90px] text-nowrap">
        {new Date(createdAt).toLocaleDateString("en-US")}
      </td>
    </Table.Row>
  );
}
export default UsersRow;
