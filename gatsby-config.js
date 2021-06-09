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
            title: "Roadmap",
            url: "/roadmap"
          },
          {
            title: "Governance",
            url: "/posts/2020-03-17-etc-cooperative-agm-2020-new-governance"
          },
          {
            title: "Filings",
            url: "/filings"
          },
          {
            title: "People",
            url: "/people"
          },
          {
            title: "Contact",
            url: "/contact"
          }
        ]
      },
      footer: {
        copyright: "etccooperative.org",
        columns: [
          {
            heading: "Learn",
            links: [
              {
                title: "ethereumclassic.org",
                url: "https://ethereumclassic.org"
              },
              {
                title: "ETC Discord",
                url: "https://discord.gg/HgBa9b4"
              },
              {
                title: "ETC Global Comms",
                url: "https://bobsummerwill.com/2019/10/03/addressing-east-west-disconnect-in-etc/"
              },
              {
                title: "ECIPs",
                url: "https://ecips.ethereumclassic.org/"
              }
            ]
          },
          {
            heading: "Run",
            links: [
              {
                title: "Hyperledger Besu",
                url: "https://github.com/hyperledger/besu"
              },
              {
                title: "Core-Geth",
                url: "https://github.com/etclabscore/core-geth"
              },
              {
                title: "Multi-Geth",
                url: "https://github.com/multi-geth/multi-geth"
              },
              {
                title: "OpenEthereum",
                url: "https://github.com/openethereum/openethereum"
              }
            ]
          },
          {
            heading: "ETC Coop Projects",
            links: [
              {
                title: "Hyperledger Besu",
                url: "https://github.com/hyperledger/besu"
              },
              {
                title: "BlockScout",
                url: "https://blockscout.com/etc/mainnet/"
              },
              {
                title: "Ethercluster",
                url: "https://ethercluster.com"
              },
              {
                title: "etcnodes.org",
                url: "https://etcnodes.org"
              },
              {
                title: "Messari",
                url: "https://messari.io/asset/ethereum-classic"
              },
              {
                title: "Connext",
                url: "https://connext.network/"
              },
              {
                title: "Keccak256 hash algorithm",
                url: "/posts/2020-02-10-etc-coop-support-switch-to-keccak256"
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
