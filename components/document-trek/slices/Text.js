import React from "react";
import { RichText } from "prismic-reactjs";
import { blogLinkResolver } from "prismic-configuration";
import { blogCustomLink } from "utils/prismicHelpers";

/**
 * Text slice component
 * ////https://community.prismic.io/t/rich-text-hyperlink-problem/5940  issue here to see how to resolve
 */
const Text = ({ slice }) => (
  <div className="post-part single img-ctrl">
    <RichText
      render={slice?.primary?.text}
      linkResolver={blogLinkResolver}
      serializeHyperlink={blogCustomLink}
    />
  </div>
);

export default Text;
