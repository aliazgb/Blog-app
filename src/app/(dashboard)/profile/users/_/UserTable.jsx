"use client";

import Fallback from "@/ui/Fallback";
import Table from "@/ui/Table";
import useGetAllUsers from "./useGetAllUsers";
import UsersRow from "./UsersRow";

function UsersTable() {
  const {users, isLoading } = useGetAllUsers();
  if (isLoading) return <Fallback />;
  return (
    <Table>
      <Table.Header>
        <th className="w-4 text-center">#</th>
        <th className="max-w-[100px]">Name</th>
        <th className="max-w-[140px]">Email</th>
        <th className="min-w-[90px]">Created At</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
            <UsersRow key={user._id} user={user} index={index} />
          ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
