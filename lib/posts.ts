import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type IdParams = {
    params: {
        id: string;
    };
};

export type PostData = {
    id: string;
    title: string;
    description: string;
    date: string;
    contentHtml: string;
    image: string | null;
};

export type PostRssData = {
    id: string;
    title: string;
    description: string;
    date: string;
};

export function getAllPostIds(): IdParams[] {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    const image = contentHtml.match(/src\s*=\s*"(?<url>.+?)"/)?.groups?.url || null;

    return {
        id,
        title: matterResult.data.title,
        description: matterResult.data.description,
        date: matterResult.data.date.toISOString(),
        image,
        contentHtml,
    };
}

export function getSortedPostsData(): Array<PostRssData> {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            title: matterResult.data.title,
            description: matterResult.data.description,
            date: matterResult.data.date.toISOString(),
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getIdOfLatestPost(): string {
    return getSortedPostsData()[0].id;
}
