import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'educations',
  title: 'Educations',
  type: 'document',
  fields: [
    {
      name: "faculty",
      type: "string",
      title: "Faculty",
      validation: (Rule) => Rule.required()
    },
    {
      name: "organization",
      type: "string",
      title: "Organization",
      validation: (Rule) => Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(400)
    },
    {
      name: "startDate",
      type: "number",
      title: "Start date",
      validation: (Rule) => Rule.required()
    },
    {
      name: "endDate",
      type: "number",
      title: "End date",
      validation: (Rule) => Rule.required()
    },
  ]
})
