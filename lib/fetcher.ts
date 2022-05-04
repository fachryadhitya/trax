export default function fetcher(url: string, data?: any) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => {
    if (!res.ok) {
      throw new Error('fetch failed')
    }
    return res.json()
  })
}
