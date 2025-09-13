import { deletePostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ActionResponse } from "types/ApiTypes";

export default function useDeletePost() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deletePost } = useMutation<
    ActionResponse,
    AxiosError<{ message: string }>,
    string
  >({
    mutationFn: deletePostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    // onError: (err) => toast.error(err?.response?.data?.message),
    onError: (err) => toast.error(err?.response?.data?.message || "An error occurred"),
  });

  return { isDeleting, deletePost };
}
