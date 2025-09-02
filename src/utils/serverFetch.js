import { headers } from "next/headers";

export async function serverFetch(url, options = {}) {
  const headersList = headers();
  const cookie = headersList.get("cookie");

  const fetchOptions = {
    ...options,
    headers: {
      ...options.headers,
      ...(cookie && { Cookie: cookie }),
    },
  };

  return fetch(url, fetchOptions);
}