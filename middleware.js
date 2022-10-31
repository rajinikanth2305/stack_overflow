import { NextResponse } from "next/server";
import { getRootPages, getPrismicDocument } from "utils/middleware-helper";

const middleware = async (req) => {
  const url = req.nextUrl.clone();
  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get("host");
  //console.log(hostname);// If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.vercel.app", "vercel.app" is the root URL)
  const currentHost =
    process.env.NODE_ENV == "production"
      ? hostname.replace(`.${process.env.ROOT_URL}`, "")
      : process.env.CURR_HOST;

  if (
    !url.pathname.includes(".") && // exclude all files in the public folder
    !url.pathname.startsWith("/api") && // exclude all API routes
    !req.headers.has("x-prerender-revalidate")
  ) {
    if (url.pathname === "/" && url.pathname.length === 1) {
      return NextResponse.next();
    }

    if (url.pathname.startsWith("/user-dashboard/")) {
      return NextResponse.next();
    }

    //Temporary fix for channa durga trek since the original link is not working
    // console.log(url.pathname)
    if (url.pathname.startsWith("/channarayana-durga-trek")) {
      url.pathname = `channarayana-durga-weekend-trek`;
      return NextResponse.redirect(url);
    }

    // Temprary fix ends

    if (
      url.pathname.startsWith("/blog/") || //  new format Redirections to old format
      url.pathname.startsWith("/trek/") ||
      url.pathname.startsWith("/family-trek/") ||
      url.pathname.startsWith("/articles/") ||
      url.pathname.startsWith("/documented-trek/")
    ) {
      let iresource = url.pathname;
      const urlFragments = url.pathname.split("/");
      if (urlFragments?.length > 0) {
        iresource = urlFragments[urlFragments?.length - 1];
      }
      url.pathname = `${iresource}`; //absoluteUrl
      return NextResponse.redirect(url); // redirect to old format
    }

    const urlFragments = url.pathname.split("/");
    let resource;
    if (urlFragments?.length > 0) {
      resource = urlFragments[urlFragments?.length - 1];
      /// cleanup questions
    } else {
      resource = url.pathname;
    }

    const findPage = getRootPages().find((x) => x.pageid === resource);
    if (findPage === undefined) {
      const page = await getPrismicDocument(resource);
      const jsonData = JSON.parse(JSON.stringify(page));

      if (jsonData !== undefined) {
        const type = jsonData.type;
        if (type === "trek") {
          url.pathname = `/trek/${resource}`; //absoluteUrl
          return NextResponse.rewrite(url);
        } else if (type === "post") {
          url.pathname = `/blog/${resource}`; //absoluteUrl
          return NextResponse.rewrite(url);
        } else if (type === "family_trek") {
          url.pathname = `/family-trek/${resource}`; //absoluteUrl
          return NextResponse.rewrite(url);
        } else if (type === "articles_landing_type") {
          url.pathname = `/articles/${resource}`; //absoluteUrl
          return NextResponse.rewrite(url);
        } else if (type === "document_trek_type") {
          url.pathname = `/documented-trek/${resource}`; //absoluteUrl
          return NextResponse.rewrite(url);
        } else if (type === "not-found") {
          return NextResponse.next();
        }
      } else {
        NextResponse.next();
      }
    } else {
      NextResponse.next();
    }
  }
};
export default middleware;
