export default async function graphqlRequest(request) {
  let url = `${process.env.SITE_URL}/graphql`;

  const headers = {
    Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
    "Content-Type": "application/json", // GraphQL server expects JSON
    "Cache-Control": "max-age=30",
  };

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(request), // Send the request object as JSON
    // cache: "no-store",
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const resJSON = await res.json();
  return resJSON;
}
