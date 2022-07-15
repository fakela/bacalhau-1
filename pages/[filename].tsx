import { Blocks } from "../components/blocks";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";

export default function DynamicPage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <Layout data={data}>
      <p className="text-black pt-24">Posts {JSON.stringify(props.posts.getPostsList?.edges )}</p>
      <Blocks {...data.getPagesDocument.data} posts={props.posts?.getPostsList?.edges} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.ContentQuery({
    relativePath: `${params.filename}.md`,
  });
  const postProps = await client.getPostsList();
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
      posts: postProps.data
    },
  };
};

export const getStaticPaths = async () => {
  const client = ExperimentalGetTinaClient();
  const pagesListData = await client.getPagesList();
  return {
    paths: pagesListData.data.getPagesList.edges.map((page) => ({
      params: { filename: page.node.sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
