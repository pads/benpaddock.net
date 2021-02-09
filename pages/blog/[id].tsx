import { GetStaticPaths, GetStaticProps } from "next";

import BlogPost from "../../components/blog-post";
import Layout from "../../components/layout";
import { PostData, getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }: { postData: PostData }): JSX.Element {
    return (
        <Layout title={postData.title} description={postData.description}>
            <BlogPost post={postData}></BlogPost>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData,
        },
    };
};
