import { Blocks } from "../components/blocks";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <Layout data={data}>
      <Blocks {...data.getPagesDocument.data} posts={props.posts} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.ContentQuery({
    relativePath: `index.md`,
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

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
