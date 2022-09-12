import type { TinaCollection } from "tinacms"

export const postsSchema: TinaCollection = {
  label: "Posts",
  name: "posts",
  path: "content/posts",
  fields: [
    {
      label: "Image",
      name: "image",
      type: "object",
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Title",
      name: "headline",
    },
    {
      type: "string",
      label: "Excerpt",
      name: "excerpt",
      description: "The text used in the card summary",
      ui: {
        component: 'textarea',
      },
    },
    {
      type: "rich-text",
      label: "Text",
      name: "text",
    },
    {
      type: "datetime",
      label: "Date",
      name: "date",
      ui: {
        dateFormat: "MMM DD YYYY"
      }
    },
  ],
}