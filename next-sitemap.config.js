/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.DOMAIN}.com`, // 이후 도메인 확정 시 변경
  generateIndexSitemap: false, // This is useful for small/hobby sites which does not require an index sitemap
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    additionalSitemaps: [
      `https://${process.env.DOMAIN}/server-sitemap.xml`, // 이후 도메인 확정 시 변경
    ],
  },
  exclude: [],
};
