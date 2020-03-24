module.exports = {
  siteMetadata: {
    title: `ETC Cooperative`,
    siteUrl: `https://etccooperative.org`,
    description: `Accelerating the growth of Ethereum Classic`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "About",
            url: "/about"
          },
          {
            title: "Filings",
            url: "/filings"
          },
          {
            title: "People",
            url: "/people"
          }
        ]
      },
      footer: {
        copyright: "yoursite.com",
        columns: [
          {
            heading: "Column 1",
            links: [
              {
                title: "Link 1",
                url: "#"
              },
              {
                title: "Link 2",
                url: "#"
              },
              {
                title: "Link 3",
                url: "#"
              }
            ]
          },
          {
            heading: "Column 2",
            links: [
              {
                title: "Link A",
                url: "#"
              },
              {
                title: "Link B",
                url: "#"
              },
              {
                title: "Link C",
                url: "#"
              }
            ]
          },
          {
            heading: "Column 3",
            links: [
              {
                title: "Link x",
                url: "#"
              },
              {
                title: "Link y",
                url: "#"
              },
              {
                title: "Link z",
                url: "#"
              }
            ]
          }
        ]
      }
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6
            }
          }
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `#eff2f6`,
        theme_color: `#1f55ff`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};
