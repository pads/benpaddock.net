import { GetServerSideProps } from "next";

import { getSortedPostsData } from "../lib/posts";
import { generateFeed } from "../lib/rss";

export default function Feed(): null {
    return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const posts = getSortedPostsData();
    const feed = generateFeed(posts);

    res.setHeader("Content-Type", "text/xml");
    res.write(feed);
    res.end();

    return { props: {} };
};
