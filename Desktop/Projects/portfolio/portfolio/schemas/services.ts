import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: "image",
      type: "image",
      title: "Photo",
      validation: (Rule) => Rule.required()
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(400)
    },
  ]
})
