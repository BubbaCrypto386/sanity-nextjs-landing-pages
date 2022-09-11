export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '631d6294e699f55346d51741',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tiaccppu',
                  apiId: 'f46c2464-da80-466f-9679-ba1f2f92eb6c'
                },
                {
                  buildHookId: '631d6294aef38053bab19b8f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kyuqffy3',
                  apiId: 'e4e1ec56-326e-4555-a9fb-da90cd0a477b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BubbaCrypto386/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kyuqffy3.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
