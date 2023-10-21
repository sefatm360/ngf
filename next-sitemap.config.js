/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://onthe-way.com/';
module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
};
