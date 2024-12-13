import Masto from "mastodon";
import fs from "node:fs/promises";
import { glob } from "glob";
import { resolve } from "path";
import matter from "gray-matter";
import slug from "slug";

const MASTODON_API = "https://hachyderm.io/api/v1/";

const client = new Masto({
    api_url: MASTODON_API,
    // Generate via https://tinysubversions.com/notes/mastodon-bot/index.html
    access_token: process.env.MASTODON_AUTH_TOKEN,
    timeout_ms: 60 * 1000,
});

const getLatestBlogPost = async () => {
    const files = await glob("posts/*.md");

    const allPostMeta = await Promise.all(
        files.map(async (file) => {
            const content = await fs.readFile(resolve(file), { encoding: "utf8" });
            const meta = matter(content);
            const { title, description, date } = meta.data;
            const url = `${process.env.HOST}/blog/${slug(meta.data.title)}`;
            return {
                url,
                date,
                title,
                description,
            };
        }),
    );

    return allPostMeta.sort((current, next) => {
        return new Date(next.date).getTime() - new Date(current.date).getTime();
    })[0];
};

const publishLatestBlogPost = (post) => {
    const content = `${post.title}: ${post.description} ${post.url}`;

    client.post("statuses", { status: content }, function (err) {
        if (err) {
            console.error(err);
            return process.exit(-1);
        }
        console.log("done");
    });
};

getLatestBlogPost().then(publishLatestBlogPost);
