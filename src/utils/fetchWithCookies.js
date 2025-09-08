// Server-side fetch with cookies forwarding
export async function serverFetchWithCookies(url, options = {}, cookieHeader) {
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
export function clientFetch(url, options = {}) {
  // For client-side, we should use axios with withCredentials
  // This is just a fallback for any edge cases
  return fetch(url, {
    ...options,
    credentials: 'include',
  });
}
