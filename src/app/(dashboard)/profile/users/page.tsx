import { JSX } from "react";
import UsersTable from "./_/UserTable";

export default function CategoryPage(): JSX.Element {
  return (
    <div>
      <h1 className="text-secondary-700 mb-8 font-bold text-xl">Users list</h1>
      <UsersTable />
    </div>
  );
}
