"use server";
import { updateCommentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import toast from "react-hot-toast";

type UpdateCommentFormData = {
  commentId: string;
  formData: FormData;
};

type State = {
  message?: string;
  error?: string;
};

export default async function updateComment(
  prevState: State | undefined,
  { commentId, formData }: UpdateCommentFormData
): Promise<State> {
  const cookieStore = await cookies();

  // const data = {
  //   status: formData.get("status"),
  // };
  const statusValue = formData.get("status");
  const data = {
    status: typeof statusValue === "string" ? statusValue : undefined,
  };

  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await updateCommentApi(
      { id: commentId, data },
      options
    );

    revalidatePath("/profile/comments");

    return {
      message,
    };
  } catch (err) {
    // const error = err?.response?.data?.message;
    const axiosError = err as AxiosError<{ message: string }>;
    const errorMessage =
      axiosError?.response?.data?.message || "An error occurred";
    return { error: errorMessage };
  }
}
