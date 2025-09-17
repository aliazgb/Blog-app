import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  ActionResponse,
  APIResponse,
  Post,
  PostListResponse,
} from "types/ApiTypes";
import http from "./httpService";

export async function getPostSlug(slug: string): Promise<Post> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`,
    {
      cache: "no-store",  
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const { data } = await res.json();
  const { post } = data || {};
  return post;
}


export async function getPosts(
  queries: string = "",
  options?: AxiosRequestConfig
): Promise<PostListResponse> {
  const { data }: { data: PostListResponse } = await http
    .get(`/post/list?${queries}`, options)
    .then((res) => res.data);
  return {
    posts: data.posts,
    totalPages: data.totalPages,
  };
}

export async function likePostApi(postId: string): Promise<ActionResponse> {
  try {
    const { data }: AxiosResponse<APIResponse<ActionResponse>> =
      await http.post(`/post/like/${postId}`, null, {
        withCredentials: true,
      });
    return data.data as ActionResponse;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw err.response?.data || { message: "Server error" };
  }
}

export async function bookmarkPostApi(postId: string): Promise<ActionResponse> {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
export async function createPostApi(data: FormData): Promise<ActionResponse> {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}
export async function editPostApi({
  id,
  data,
}: {
  id: string;
  data: FormData;
}): Promise<ActionResponse> {
  return http.patch(`post/update/${id}`, data).then(({ data }) => data.data);
}

export async function getPostById(
  id: number | string
): Promise<{ post: Post }> {
  return http.get(`post/${id}`).then(({ data }) => data.data);
}

export async function deletePostApi(id: string) {
  return http.delete(`/post/remove/${id}`).then(({ data }) => data.data);
}
