const path = require("path");

module.exports = {
  // target: "serverless",
  staticPageGenerationTimeout: 150,
  poweredByHeader: false,
  optimizeFonts: false,
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  prismic: {
    preview: true,
  },
  images: {
    domains: ["images.prismic.io"],
  },

  //images: {
  //domains: ['images.prismic.io','img.youtube.com']
  //},*/

  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Access-Control-Allow-Origin",
          },
        ],
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=0, s-maxage=31536000, stale-while-revalidate",
          },
        ],
      },
    ];
  },
};
