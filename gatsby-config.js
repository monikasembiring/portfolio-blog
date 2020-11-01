module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Monika Sembiring',
    // Main Site Title
    title: `Monika Sembiring | Product Manager`,
    // Description that goes under your name in main bio
    description: `Product manager who is in love with data`,
    // Optional: Twitter account handle
    author: `@MonikaSembiring`,
    // Optional: Github account URL
    github: `https://github.com/monikasembiring`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/monikasembiring/`,
    // Content of the About Me section
    about: `A motivated product manager with end-to-end experience in product development in various domains. Also passionate about data and machine learning in order to have better products that help others and contribute to the common good.`,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Warung Pintar',
        description: 'Product Manager, January 2019 - Present',
        link: 'https://warungpintar.co.id/',
      },
      {
        name: 'Global Digital Prima Labs',
        description: 'Product Manager, September 2016 - January 2019',
        link: 'https://www.linkedin.com/company/gdp-labs/',
      },
      {
        name: 'Radya Labs Teknologi',
        description: 'Technical Writer, March 2016 - August 2016',
        link: 'https://radyalabs.com/',
      },
      {
        name:
          'Information System Laboratory of Bandung Institute of Technology',
        description: 'Laboratory Assistant, September 2014 - May 2016',
        link: 'https://stei.itb.ac.id/',
      },
      {
        name: 'PT Chevron Pacific Indonesia',
        description: 'System Analyst, August 2015 - September 2015',
        link: 'https://indonesia.chevron.com/',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Picker Checker Apps',
        description:
          'Application used by picker and checker in Warung Pintar warehouse to fulfill customer order',
        link: 'https://github.com/monikasembiring',
      },
      {
        name: 'Courier App',
        description:
          'Application used by Warung Pintar courier to do the delivery',
        link: 'https://github.com/monikasembiring',
      },
      {
        name: 'Catapa',
        description: 'Payroll and human resource intelligent system',
        link: 'https://catapa.com/',
      },
      {
        name: 'Grand Indonesia E-directory',
        description:
          'Interactive e-directory and customer loyalty program kiosks made with Unity for Grand Indonesia',
        link: 'https://catapa.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Applied product management',
        description: 'Agile/scrum, design thinking, service design',
      },
      {
        name: 'Data',
        description: 'SQL, Google BigQuery, Redash',
      },
      {
        name: 'Programming',
        description: 'Python, Java',
      },
      {
        name: 'Design',
        description: 'Adobe Photoshop, Balsamiq',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
