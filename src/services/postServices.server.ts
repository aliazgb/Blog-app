import { headers } from "next/headers";
import { serverFetchWithCookies } from "@/utils/fetchWithCookies";
import { Post } from "types/ApiTypes";

interface GetPostsResponse {
  posts: Post[];
  totalPages: number;
}

export async function getPostSlug(slug: string): Promise<Post | undefined> {
  const headersList = await headers();
  const cookie = headersList.get("cookie");

  const res = await serverFetchWithCookies(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`,
    {},
    cookie ?? undefined
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch post with slug: ${slug}`);
  }

  // const { data } = await res.json();
  // const { post } = data || {};
  // return post;
  const { data } = (await res.json()) as { data?: { post?: Post } };
  return data?.post;
}

export async function getPosts(
  queries: string,
  options: RequestInit = {}
): Promise<GetPostsResponse> {
  // ARTIFICIALLY DELAY A REPONSE FOR DEMO PURPOSES
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const headersList = await headers();
  const cookie = headersList.get("cookie");

  const fetchOptions: RequestInit = {
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

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const { data } = (await res.json()) as {
    data?: { posts?: Post[]; totalPages?: number };
  };

  return {
    posts: data?.posts ?? [],
    totalPages: data?.totalPages ?? 0,
  };
  // const { data } = await res.json();
  // const { posts, totalPages } = data || {};
  // return { posts, totalPages };
}
