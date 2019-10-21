export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dae0943e565e08188cbf775',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-products-studio',
                  apiId: 'ec94168c-aaef-45b1-b6f2-ec740adad53d'
                },
                {
                  buildHookId: '5dae09431529c2b39014eba3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-products',
                  apiId: '7693d4bb-590b-4024-afe9-92c07d0d8ec8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swak/sanity-gatsby-products',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-products.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
