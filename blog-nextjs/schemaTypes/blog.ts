import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title Of Blog',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug Of Blog',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: "Image for blog's thumbnail",
    }),
    defineField({
      name: 'dateReleased',
      type: 'date',
      title: 'Date Released',
    }),
    defineField({
      name: 'author',
      type: 'string',
      title: 'Author',
    }),
    defineField({
      name: 'smallDescription',
      type: 'text',
      title: 'Description For Blog',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    }),
  ],
})
