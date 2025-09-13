"use server";

import { commentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type StateType = {
  error?: string;
  message?: string;
};

type CreateCommentArgs = {
  postId: string;
  parentId?: string | null;
  formData: FormData;
};

export async function createComment(
  prevState: StateType,
  { postId, parentId, formData }: CreateCommentArgs
): Promise<StateType> {
  const cookiesStore = await cookies();
  const options = setCookieOnReq(cookiesStore);
  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text") as string,
  };
  try {
    const { message }: { message: string } = await commentApi(rawFormData, options);
    revalidatePath("/blogs/[postSlug]");
    return { message };
  } catch (err) {
    // const error = err?.respone?.data?.message;
    const error =
      (err as AxiosError<{ message: string }>)?.response?.data?.message ||
      "Server error";
    return { error };
  }
}
