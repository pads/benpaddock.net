import RSS from "rss";

import { PostRssData } from "./posts";

export function generateFeed(posts: Array<PostRssData>): string {
    const feed = new RSS({
        title: "thisispads.me.uk Blog",
        site_url: process.env.HOST,
        feed_url: `${process.env.HOST}/feed.xml`,
    });

    posts.forEach((post) => {
        feed.item({
            guid: post.id,
            title: post.title,
            description: post.description,
            url: `${process.env.HOST}/blog/${post.id}`,
            date: post.date,
            author: "Ben Paddock",
        });
    });

    return feed.xml({ indent: true });
}
