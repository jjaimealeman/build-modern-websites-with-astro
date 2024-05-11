import { Links, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Links).values([
    {
      title: "Title",
      url: "https://google.com",
      isRead: true,
      upvoteNum: 3,
    },
    {
      title: "Another Title",
      url: "https://example.com",
      isRead: false,
      upvoteNum: 5,
    },
    {
      title: "Yet Another Title",
      url: "https://github.com",
      isRead: true,
      upvoteNum: 10,
    },
  ]);
}
