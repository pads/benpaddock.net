import { GetStaticProps } from "next";
import Link from "next/link";

import Date from "../components/date";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function Blog({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}): JSX.Element {
    return (
        <Layout
            title="All Blog Posts"
            description="Index of all blog posts on the site"
            url="https://benpaddock.net/blog"
        >
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li className="mb-4" key={id}>
                        <Link href={`/blog/${id}`}>
                            <h2 className="text-2xl font-bold">{title}</h2>
                        </Link>
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};
