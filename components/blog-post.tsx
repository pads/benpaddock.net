import Link from "next/link";

import { PostData } from "../lib/posts";
import Date from "./date";

export default function BlogPost({ post }: { post: PostData }): JSX.Element {
    return (
        <article>
            <h1 className="text-3xl font-bold mb-4">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h1>
            <Date dateString={post.date} />
            <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
    );
}
