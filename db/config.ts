import { NOW, column, defineDb, defineTable } from "astro:db";

const Links = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    url: column.text(),
    date: column.date({ default: NOW }),
    isRead: column.boolean({ default: true }),
    upvoteNum: column.number(),
    isCool: column.boolean({ default: false }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Links },
});
