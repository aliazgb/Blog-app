import { headers } from "next/headers";
import { serverFetchWithCookies } from "@/utils/fetchWithCookies";

export async function getPostSlug(slug) {
  const headersList = headers();
  const cookie = headersList.get("cookie");
  
  const res = await serverFetchWithCookies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`,
    {},
    cookie
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(queries, options = {}) {
  // ARTIFICIALLY DELAY A REPONSE FOR DEMO PURPOSES
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const headersList = headers();
  const cookie = headersList.get("cookie");

  const fetchOptions = {
    ...options,
    headers: {
      ...options.headers,
      ...(cookie && { Cookie: cookie }),
    },
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    fetchOptions
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
}
