import http from "./httpService";

export async function getPostSlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(queries, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}
