require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: 'josephk.io',
    description: 'I am Joseph, web frontend developer. This website is a personal blog where I share my thoughts and life',
    author: process.env.AUTHOR,
    deployBranch: process.env.NOW_GITHUB_COMMIT_REF || 'dev',
    staticmanEndpoint: process.env.STATICMAN_ENDPOINT,
    staticmanVersion: process.env.STATICMAN_VERSION,
    githubUsername: process.env.GITHUB_USERNAME,
    githubRepository: process.env.GITHUB_REPOSITORY,
    githubBranch: process.env.GITHUB_BRANCH,
  },
  plugins: [
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: process.env.SITE_URL,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'devlogs',
        path: `${__dirname}/devlogs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'comments',
        path: `${__dirname}/data`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: `${__dirname}/src/components/layout.js`,
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-images' },
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
        plugins: [
          { resolve: 'gatsby-remark-images' },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Yaml',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'josephk.io',
        short_name: 'josephk',
        start_url: '/',
        background_color: '#29C785',
        theme_color: '#29C785',
        display: 'minimal-ui',
        icon: 'static/images/profile-black.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
}
