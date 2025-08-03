export default {
  name: 'writeup',
  type: 'document',
  title: 'Write-up',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 3
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              options: {
                isHighlighted: true
              }
            }
          ]
        },
        {
          type: 'code',
          title: 'Code Block',
          options: {
            language: 'javascript',
            languageAlternatives: [
              {title: 'Bash', value: 'bash'},
              {title: 'CSS', value: 'css'},
              {title: 'HTML', value: 'html'},
              {title: 'JavaScript', value: 'javascript'},
              {title: 'Python', value: 'python'},
              {title: 'Ruby', value: 'ruby'},
              {title: 'SQL', value: 'sql'},
              {title: 'TypeScript', value: 'typescript'},
            ]
          }
        }
      ]
    }
  ]
}