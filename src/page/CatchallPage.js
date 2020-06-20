import React, { useState, useEffect } from "react";
import builder, { BuilderComponent } from "@builder.io/react";

const CatchAllPage = () => {
  const [pageJson, setPage] = useState(undefined);

  useEffect(() => {
    builder
      .get("page", { url: window.location.pathname })
      // The value will be `null` if no page was found
      .promise()
      .then(setPage);
  }, []);

  return pageJson === undefined ? (
    <p>Loading</p>
  ) : pageJson ? (
    <BuilderComponent model="page" content={pageJson} />
  ) : (
    <p>Not found</p>
  );
};

export default CatchAllPage;
