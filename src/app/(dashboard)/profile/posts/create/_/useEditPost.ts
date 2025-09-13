import { editPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ActionResponse } from "types/ApiTypes";

export interface EditPostPayload {
  id: string;
  data: FormData;
}

export default function useEditPost() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editPost } = useMutation<
    ActionResponse,
    AxiosError<{ message: string }>,
    EditPostPayload
  >({
    mutationFn: editPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    // onError: (err) => toast.error(err?.response?.data?.message),
    onError: (err) => toast.error(err?.response?.data?.message || "An error occurred"),
  });

  return { isEditing, editPost };
}
