import React, { useState, useEffect } from "react";
import builder, { BuilderComponent } from "@builder.io/react";

const LandingPage = () => {
  const [pageJson, setPage] = useState(null);

  useEffect(() => {
    builder
      .get("page", { url: "/" })
      .promise()
      .then((json) => {
        console.log({ json });

        setPage(json);
      });
  }, []);

  return <BuilderComponent model="page" content={pageJson} />;
};

export default LandingPage;
