export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "id",
      title: "Id",
      type: "number",
    },

    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "galleryImage" }],
      options: {
        hotspot: true,
      },
    },

    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "personal" },
          { value: "client", title: "Client" },
          { value: "organisation", title: "Organisation" },
        ],
      },
    },

    { name: "link", type: "url" },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
    },
  ],
};
