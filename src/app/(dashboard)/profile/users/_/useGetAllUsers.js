import { getAllUsers } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllUsers() {
  const { data,isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  const { users = [] } = data || {};

  return { users ,isLoading};
}
