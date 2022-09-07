import React from "react";

import DefaultLayout from "layouts";
import { apiEndpoint } from "prismic-configuration";
import { setupRepoStyles } from "styles";

/**
 * Setup repo component
 */
const SetupRepo = () => {
  const repoUrl = `${apiEndpoint.replace(".cdn", "").slice(0, -6)}documents/`;

  return (
    <DefaultLayout>
      <div className="setup-repo">
        <h1>Loading ......</h1>
      </div>
      <style jsx global>
        {setupRepoStyles}
      </style>
    </DefaultLayout>
  );
};

export default SetupRepo;
