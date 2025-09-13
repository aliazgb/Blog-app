import { createPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ActionResponse } from "types/ApiTypes";

export default function useCreatePost() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createPost , } = useMutation<
  ActionResponse,
  AxiosError<{ message: string }>,
  FormData
>({
    mutationFn: createPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    // onError: (err) => toast.error(err?.response?.data?.message),
    onError: (err) => toast.error(err?.response?.data?.message || "An error occurred"),
  });

  return { isCreating, createPost };
}
