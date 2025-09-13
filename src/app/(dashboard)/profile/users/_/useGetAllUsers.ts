import { getAllUsers } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";
import { User } from "types/Signup";

export default function useGetAllUsers() {
  const { data,isLoading } = useQuery<{ users: User[] }>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  const { users = [] } = data || {};

  return { users ,isLoading};
}
