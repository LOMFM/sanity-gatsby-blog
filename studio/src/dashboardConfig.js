export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e699cea30e515406014b9fc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-g3m24h7v',
                  apiId: '2ed136cc-29e9-4575-96e8-dc2b2157fe47'
                },
                {
                  buildHookId: '5e699ceab95a134fc0e9fe53',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5io8jseo',
                  apiId: 'ca83fa6b-7da6-4619-b821-7a8fe88c609a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LOMFM/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5io8jseo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
