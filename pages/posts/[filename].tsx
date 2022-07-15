import { ExperimentalGetTinaClient } from "../../.tina/__generated__/types";
import { useTina } from "tinacms/dist/edit-state";
import { Layout } from "../../components/layout";

export default function DynamicPage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    // posts: props.posts
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <p className="text-black pt-24">Posts {JSON.stringify(props.data )}</p>
    // <Layout data={data}>
    //   <p className="text-black pt-24">Posts {JSON.stringify(props.posts.getPostsList?.edges )}</p>
    // </Layout>
  );
}

// export const getStaticProps = async ({ params }) => {
//   const client = ExperimentalGetTinaClient();
//   const postProps = await client.getPostsList();
//   return {
//     props: {
//       posts: postProps.data
//     },
//   };
// };

export const getStaticProps = async ({ params }) => {
  const client = ExperimentalGetTinaClient();
  // const tinaProps = await client.ContentQuery({
  //   relativePath: `../posts/${params.filename}.md`,
  // })
  const postProps = await client.getPostsDocument({
    relativePath: `../posts/${params.filename}.md`,
  })
  return {
    props: {
      data: postProps.data,
      query: postProps.query,
      variables: postProps.variables
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
