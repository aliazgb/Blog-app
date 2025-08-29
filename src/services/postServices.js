import http from "./httpService";

export async function getPostSlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(queries = "", options) {
  const { data } = await http
    .get(`/post/list?${queries}`, options)
    .then((res) => res.data);

  return {
    posts: data.posts,
    totalPages: data.totalPages,
  };
}


export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
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
