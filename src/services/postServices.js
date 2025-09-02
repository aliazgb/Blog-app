import http from "./httpService";
import { serverFetch } from "@/utils/serverFetch";


export async function getPostSlug(slug) {
  const res = await serverFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(queries, options) {
  // ARTIFICIALLY DELAY A REPONSE FOR DEMO PURPOSES
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await serverFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
}



export async function likePostApi(postId) {
  try {
    const { data } = await http.post(`/post/like/${postId}`, null, {
      withCredentials: true, // حتماً برای ارسال کوکی
    });
    return data.data;
  } catch (error) {
    // خطاهای سرور رو درست برگردون
    throw error.response?.data || { message: "Server error" };
  }
}
export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
export async function createPostApi(data) {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}
export async function editPostApi({ id, data }) {
  return http.patch(`post/update/${id}`, data).then(({ data }) => data.data);
}

export async function getPostById(id) {
  return http.get(`post/${id}`).then(({ data }) => data.data);
}

export async function deletePostApi(id) {
  return http.delete(`/post/remove/${id}`).then(({ data }) => data.data);
}
