module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Developer Blog of Nerando', // Navigation and Site Title
  titleAlt: 'Nerando Johnson Self Hosted Blog', // Title for JSONLD
  description: '@Nerajno self hosted blog',
  url: 'https://gatsby-tutorial-starter.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://gatsby-tutorial-starter.netlify.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'NerandosBlog', // shortname for manifest. MUST be shorter than 12 characters
  author: '@Nerajno', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@nerajno', // Twitter Username
};
