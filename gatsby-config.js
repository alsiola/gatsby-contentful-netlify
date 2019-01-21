require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        title: `Gatsby/Contentful/Netlify`
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-typography`,
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: "w3ovls2jxbi0",
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        }
    ]
};
