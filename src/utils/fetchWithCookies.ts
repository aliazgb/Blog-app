// Server-side fetch with cookies forwarding
export async function serverFetchWithCookies(
  url: string,
  options: RequestInit = {},
  cookieHeader?: string
): Promise<Response> {
  const fetchOptions = {
    ...options,
    headers: {
      ...options.headers,
      ...(cookieHeader && { Cookie: cookieHeader }),
    },
  };

  return fetch(url, fetchOptions);
}

// Client-side fetch (uses axios with credentials instead)
export function clientFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  // For client-side, we should use axios with withCredentials
  // This is just a fallback for any edge cases
  return fetch(url, {
    ...options,
    credentials: 'include',
  });
}
