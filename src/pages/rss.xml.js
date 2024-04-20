import { baseData } from '@/data/siteData';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('posts')

  return rss({
    title: baseData.title,
    description: baseData.description,
    stylesheet: '/rss/styles.xsl',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })), customData: `<language>en-us</language>`,
  });
}
