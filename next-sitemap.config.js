const fs = require("fs");
const path = require("path");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pbs-nyc.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    // Read blog post slugs dynamically
    const blogDir = path.join(process.cwd(), "src/app/blog");
    const slugs = fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith(".js") || file.endsWith(".md"))
      .map((file) => file.replace(/\.(js|md)$/, ""));

    return [
      { loc: "/" },
      { loc: "/about-us" },
      { loc: "/services" },
      { loc: "/contacts" },
      { loc: "/about-us/our-history" },
      { loc: "/about-us/our-team" },
      { loc: "/about-us/our-values" },
      { loc: "/blog" },
      ...slugs.map((slug) => ({ loc: `/blog/${slug}` })), // Add blog posts dynamically
      { loc: "/OwnerRepresentative" },
      { loc: "/guide-resources/dob-service-updates" },
      { loc: "/guide-resources/history-of-local-laws" },
      { loc: "/guide-resources/nyc-dob-codes" },
      { loc: "/guide-resources/nyc-fdny-codes" },
    ];
  },
};
