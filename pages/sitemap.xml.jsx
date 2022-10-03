import { createClient, linkResolver } from "prismicio";
import glob from "glob";
import * as prismic from "@prismicio/client";
const pagesDir = "pages/**/*.tsx";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  let pagesPaths = await glob.sync(pagesDir);
  const client = createClient();
  const BASE_URL = process.env.WEBSITE_URL;

  const dynamicPages = [
    "trek",
    "family_trek",
    "document_trek_type",
    "post",
    "articles_landing_type",
  ];

  let dynamicPaths = await Promise.all(
    dynamicPages.map((page) => {
      return new Promise(async (res, rej) => {
        let documents;
        try {
          documents = await client.getAllByType(page);
        } catch (err) {
          rej(err);
        }
        if (documents) {
          const paths = documents.map((doc) => ({
            url: `${BASE_URL}/${doc.uid}`,
            lastModDate: new Date(doc.last_publication_date).toDateString(),
          }));

          res(paths);
        }
      });
    })
  );

  dynamicPaths = dynamicPaths.flat();

  let dynamicTreksResults = [];
  dynamicTreksResults = await client.query(
    prismic.predicate.at("document.type", "trek")
  );

  let dynamicPathsForTreks = dynamicTreksResults?.results;
  if (dynamicPathsForTreks.length) {
    console.log(dynamicPathsForTreks[0]);
    dynamicPathsForTreks = dynamicPathsForTreks.map((doc) => ({
      url: `${BASE_URL}/${doc.uid}`,
      lastModDate: new Date(doc.last_publication_date).toDateString(),
    }));
  }

  pagesPaths = pagesPaths
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
        "trek",
        "family_trek",
        "document_trek_type",
        "post",
        "articles_landing_type",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return {
        url: `${BASE_URL}/${staticPagePath}`,
        lastModDate: new Date().toDateString(),
      };
    });

  const allPaths = [...pagesPaths, ...dynamicPaths, ...dynamicPathsForTreks];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((path) => {
          return `
            <url>
              <loc>${path.url}</loc>
              <lastmod>${path.lastModDate}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
