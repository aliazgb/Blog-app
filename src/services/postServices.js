import http from "./httpService";

export async function getPostSlug(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
    );
    const { data } = await res.json();
    return data?.post || null;
  } catch (err) {
    console.error("getPostSlug error:", err);
    return null;
  }
}

export async function getPosts(queries = "", options) {
  try {
    const { data } = await http
      .get(`/post/list?${queries}`, options)
      .then((res) => res.data);

    return {
      posts: data?.posts || [],
      totalPages: data?.totalPages || 0,
    };
  } catch (err) {
    console.error("getPosts error:", err);
    return { posts: [], totalPages: 0 };
  }
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
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
