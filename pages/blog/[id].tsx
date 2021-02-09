import { GetStaticPaths, GetStaticProps } from "next";

import Date from "../../components/date";
import Layout from "../../components/layout";
import { PostData, getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }: { postData: PostData }): JSX.Element {
    return (
        <Layout title={postData.title} description={postData.description}>
            <article>
                <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
                <Date dateString={postData.date} />
                <div className="mt-8" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
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
