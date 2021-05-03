import RSS from "rss";

import { PostRssData } from "./posts";

export function generateFeed(posts: Array<PostRssData>): string {
    const feed = new RSS({
        title: "benpaddock.net Blog",
        site_url: "https://benpaddock.net",
        feed_url: "https://benpaddock.net/feed.xml",
    });

    posts.forEach((post) => {
        feed.item({
            guid: post.id,
            title: post.title,
            description: post.description,
            url: `https://benpaddock.net/${post.id}`,
            date: post.date,
            author: "Ben Paddock",
        });
    });

    return feed.xml({ indent: true });
}
