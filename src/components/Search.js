import React, { useState } from "react";
import { withBuilder, BuilderComponent } from "@builder.io/react";

const SearchInput = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggle = () => {
    setIsSubmitted((prevState) => !prevState);
  };
  return (
    <>
      <input
        value={searchValue}
        onChange={setSearchValue}
        placeholder={placeholder}
      />
      <button onClick={toggle}>Search (is a custom component</button>

      {isSubmitted && (
        <div>
          This data and component is coming from CMS:
          <BuilderComponent name="article-component" />
        </div>
      )}
    </>
  );
};

export default withBuilder(SearchInput, {
  name: "Search Input",
  inputs: [{ name: "placeholder", type: "string", defaultValue: "Search ..." }],
});
