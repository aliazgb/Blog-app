import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllCommentsApi } from "./commentService";
import { getAllUsers } from "./authService";
import { getPosts } from "./postServices";

export async function fetchAllData() {
  const cookieStore = cookies();
  const option = setCookieOnReq(cookieStore);

  try {
    const data =await Promise.all([
       getAllCommentsApi(option),
       getAllUsers(option),
       getPosts(),
    ]);

    const numberOfComments = data[0].commentsCount ?? "0";
    const numberOfUsers = data[1].users.length ?? "0";
    const numberOfPosts = data[2].posts.length ?? "0";
    return {
      numberOfComments,
      numberOfUsers,
      numberOfPosts,
    };
  } catch (error) {
    throw new Error("Error loading");
  }
}
