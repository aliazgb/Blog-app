import { deleteCommentApi } from "@/services/commentService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ActionResponse } from "types/ApiTypes";

interface DeleteCommentPayload {
  id: string;
}

export default function useDeleteComment() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteComment } = useMutation<
    ActionResponse,
    AxiosError<{ message: string }>,
    DeleteCommentPayload
  >({
    mutationFn: deleteCommentApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
    onError: (err) => {
      // toast.error(err?.response?.data?.message);
      toast.error(err?.response?.data?.message || "An error occurred");
    },
  });

  return { isDeleting, deleteComment };
}
