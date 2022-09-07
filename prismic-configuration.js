// -- Prismic API endpoint
///-- simple comments
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = "https://indiahike.cdn.prismic.io/api/v2";

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  "MC5ZS0ljT2hJQUFDVUF5Tk5X.EGDvv70577-9Gu-_vX9Y77-9BhF_aO-_vSRx77-9UO-_ve-_vUHvv73vv70QC--_vWN1Hu-_vV4";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  /*if (doc.type === 'post') {
    return `/blog/${doc.uid}`;
  }
  if (doc.type === 'family_trek') {
    return `/family-trek/${doc.uid}`;
  }
  if (doc.type === 'document_trek_type') {
    return `/documented-trek/${doc.uid}`;
  }
  if (doc.type === 'articles_landing_type') {
    return `/articles/${doc.uid}`;
  }*/

  if (doc.type === "hike_home_ctype") {
    return `/`;
  }

  /*
  if (doc.type === 'trek') {
    return `/trek/${doc.uid}`;
  }*/

  return `/${doc.uid}`;
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.link_type === "Document") {
    /* if (doc.type === 'post') {
      return '/blog/'+ doc.uid;
    }
    else if (doc.type === 'trek') {
      return '/trek/'+ doc.uid;
    }
    else if (doc.type === 'family_trek') {
      return `/family-trek/${doc.uid}`;
    }
   else  if (doc.type === 'document_trek_type') {
      return `/documented-trek/${doc.uid}`;
    }
   else  if (doc.type === 'articles_landing_type') {
      return `/articles/${doc.uid}`;
    }*/
    return `/${doc.uid}`;
  } else {
    return doc.url;
  }
};

export const blogLinkResolver = (doc) => {
  if (doc === undefined) {
    return "/";
  }

  if (doc?.link_type === "Document") {
    /* if (doc.type === 'post') {
      return '/blog/'+ doc.uid;
    }
    else if (doc.type === 'trek') {
      return '/trek/'+ doc.uid;
    }
    else if (doc.type === 'family_trek') {
      return `/family-trek/${doc.uid}`;
    }
   else  if (doc.type === 'document_trek_type') {
      return `/documented-trek/${doc.uid}`;
    }
   else  if (doc.type === 'articles_landing_type') {
      return `/articles/${doc.uid}`;
    }*/

    return `/${doc.uid}`;
  } else {
    return doc?.url ? doc.url : "/";
  }
};

// Additional helper function for Next/Link components
export const blogHrefResolver = (doc) => {
  if (doc.link_type === "Document") {
    /* if (doc.type === 'post') {
      return '/blog/'+ doc.uid;
    }
    else if (doc.type === 'trek') {
      return '/trek/'+ doc.uid;
    }
    else if (doc.type === 'family_trek') {
      return `/family-trek/${doc.uid}`;
    }
   else  if (doc.type === 'document_trek_type') {
      return `/documented-trek/${doc.uid}`;
    }
   else  if (doc.type === 'articles_landing_type') {
      return `/articles/${doc.uid}`;
    }*/
    return `/${doc.uid}`;
  } else {
    if (doc === undefined) return "/";

    const val = doc?.url ? doc.url : "/";
    return val === undefined ? "/" : val;
  }
};

export const reValidateLinkResolver = (doc) => {
  if (doc.type === "post") {
    return `/blog/${doc.uid}`;
  }
  if (doc.type === "family_trek") {
    return `/family-trek/${doc.uid}`;
  }
  if (doc.type === "document_trek_type") {
    return `/documented-trek/${doc.uid}`;
  }
  if (doc.type === "articles_landing_type") {
    return `/articles/${doc.uid}`;
  }

  if (doc.type === "hike_home_ctype") {
    return `/`;
  }
  if (doc.type === "trek") {
    return `/trek/${doc.uid}`;
  }

  return `/${doc.uid}`;
};
