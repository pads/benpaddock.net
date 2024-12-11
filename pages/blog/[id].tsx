import { GetStaticPaths, GetStaticProps } from "next";

import BlogPost from "../../components/blog-post";
import Layout from "../../components/layout";
import { PostData, getAllPostIds, getPostData } from "../../lib/posts";
import slug from "slug";

export default function Post({ postData, url }: { postData: PostData; url: string }): JSX.Element {
    return (
        <Layout title={postData.title} description={postData.description} url={url} image={postData.image}>
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
    const url = `https://benpaddock.net/blog/${slug(postData.title)}`;
    return {
        props: {
            postData,
            url,
        },
    };
};
