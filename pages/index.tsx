import { GetStaticProps } from "next";

import BlogPost from "../components/blog-post";
import Layout from "../components/layout";
import { PostData, getIdOfLatestPost, getPostData } from "../lib/posts";

export default function Home({ latestPost }: { latestPost: PostData }): JSX.Element {
    return (
        <Layout title="Ben Paddock Dot Net" description="Welcome to the home of Ben Paddock" url={process.env.HOST}>
            <BlogPost post={latestPost}></BlogPost>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const id = getIdOfLatestPost();
    return {
        props: {
            latestPost: await getPostData(id),
        },
    };
};
