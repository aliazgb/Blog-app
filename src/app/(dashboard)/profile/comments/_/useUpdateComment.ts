import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCommentApi } from "@/services/commentService";
import { ActionResponse, CommentUpdatePayload } from "types/ApiTypes";
import { AxiosError } from "axios";

export default function useUpdateComment() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateComment } = useMutation<
    ActionResponse,
    AxiosError<{ message: string }>,
    CommentUpdatePayload
  >({
    mutationFn: updateCommentApi,
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

  return { isUpdating, updateComment };
}
