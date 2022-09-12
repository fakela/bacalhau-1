import { Cards } from "./cards";

export const PostCards = ({ data, parentField = "", posts }) => {
  const postsList = posts?.getPostsList ? posts.getPostsList.edges : []
  const sortedItems = postsList.sort((a, b) => {
    const dateA = new Date(a.node?.data?.date)
    const dateB = new Date(b.node?.data?.date)
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });

  const items = sortedItems.map(item => {
    return {
      image: item.node.data.image,
      headline: item.node.data.headline,
      subhead: item.node.data.excerpt,
      link: `/posts/${item.node.sys.filename}`,
    }
  })

  return (
    <Cards data={data} items={items} parentField={parentField} />
  );
};
