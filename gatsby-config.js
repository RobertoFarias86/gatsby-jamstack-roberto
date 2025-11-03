module.exports = {
  pathPrefix: "/gatsby-jamstack-roberto",
  siteMetadata: {
    title: `Blog Jamstack do Roberto`,
    description: `Projeto de pós-graduação: Front-end Jamstack com Gatsby.`,
    siteUrl: `https://robertofarias86.github.io/gatsby-jamstack-roberto`, 
    image: `/hero.jpg`,
    author: `Roberto Carlos Dias de Lucena Farias`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
  resolve: `gatsby-plugin-robots-txt`,
  options: {
    host: `https://robertofarias86.github.io/gatsby-jamstack-roberto`,
    sitemap: `https://robertofarias86.github.io/gatsby-jamstack-roberto/sitemap.xml`,
    policy: [{ userAgent: "*", allow: "/" }],
  },
},
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
};