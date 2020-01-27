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
                  buildHookId: '5e2f08e7050bb3ce793d251d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hup916fn',
                  apiId: '3237a771-ebbb-4f33-bcdc-4104a56bcad9'
                },
                {
                  buildHookId: '5e2f08e79448eda4c6f332be',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mbkeo5yh',
                  apiId: '9613c65c-0e10-4f0f-9671-f4cf07b431d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dirkschmid/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mbkeo5yh.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
