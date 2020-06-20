import { Builder } from "@builder.io/react";

// Register our heading component for use in
// the visual editor
const HeadingCustom = ({ title }) => {
  return <h1>{title}</h1>;
};

Builder.registerComponent(HeadingCustom, {
  name: "Heading",
  inputs: [{ name: "title", type: "text" }],
});
