import { Cards } from "./cards";

export const PostCards = ({ data, parentField = "", posts = [] }) => {
  const sortedItems = posts?.getPostsList?.edges?.sort((a, b) => {
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
      text: item.node.data.text
    }
  })

  return (
    <Cards data={data} items={items} parentField={parentField} />
  );
};
