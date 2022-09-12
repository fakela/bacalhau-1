import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../../components/layout";

export default function DynamicPage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const post = data.getPostsDocument.data
  const postDate = new Date(post.date)


  return (
    <>
      <Layout pageData={props.globals.getPagesDocument.data} globalData={props.globals.getGlobalDocument.data}>
        <section>
          <div className="max-w-site-3/4 mx-auto my-40 px-20 sm:px-8">
            {post?.image?.src && <img className="mb-10" src={post.image.src} alt={post.image.alt || post.headline} />}
            <p className="text-gray-dark text-sm font-3 mb-4">{postDate.toDateString()}</p>
            <h1 className="text-primary text-5xl font-bold font-1 mb-10">{post.headline}</h1>
            <div className="markdown font-2 text-base">
              <TinaMarkdown content={post.text} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.ContentQuery({
    relativePath: `../posts/${params.filename}.md`,
  })
  const postProps = await client.getPostsDocument({
    relativePath: `../posts/${params.filename}.md`,
  })
  return {
    props: {
      globals: tinaProps.data,
      query: postProps.query,
      variables: postProps.variables,
      data: postProps.data
    },
  };
};


export const getStaticPaths = async () => {
  const client = ExperimentalGetTinaClient();
  const postsListData = await client.getPostsList();
  return {
    paths: postsListData.data.getPostsList.edges.map((post) => ({
      params: { filename: post.node.sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
