import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  //
  const posts = await getCollection("posts", ({ data }) => data.description);

  return new Response(JSON.stringify(posts.map((p) => p.data.title)));
};
