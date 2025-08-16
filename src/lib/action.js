"use server";

import { commentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(postId, parentId, formData) {


  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  const rawFormData = {
    postId,
    parentId,
    text:formData.get("text")
  };
  try {
    const { message } = await commentApi(rawFormData, options);
    console.log({message});
    console.log(rawFormData)
  } catch (error) {
    console.log(error?.respone?.data?.message);
  }
  revalidatePath("/blogs/[postSlug]")
}
