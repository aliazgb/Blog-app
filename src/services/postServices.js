import http from "./httpService";

// These functions are for client-side usage only
// For server-side, use postServices.server.js



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
