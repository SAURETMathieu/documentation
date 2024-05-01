/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  javascript: [
    "javascript/index",
    {
      type: "category",
      label: "Error",
      link: {
        type: "generated-index",
        slug: "javascript/error",
      },
      collapsed: true,
      items: ["javascript/error/error"],
    },
    {
      type: "category",
      label: "Tableau",
      link: {
        type: "generated-index",
        slug: "javascript/tableau",
        keywords: ["tableau", "array", "array methods"],
      },
      items: ["javascript/tableau/concat", "javascript/tableau/every"],
    },
    {
      type: "category",
      label: "Middlewares",
      link: { type: "generated-index",
      slug: "javascript/middlewares", },
      items: [
        "javascript/middlewares/cors",
        "javascript/middlewares/validation",
      ],
    },
  ],
  css: [
    "css/index",
    {
      type: "category",
      label: "Tutorial",
      link: {
        type: "generated-index",
        image: '/img/react.svg',
      },
      items: ["css/tutoriel/flex-wrap",
        "css/tutoriel/flexbox"
      ],
    },
  ],
  htmlSidebar: [{ type: 'autogenerated', dirName: 'html' }],
  reactSidebar: [
    "react/index",
    /*{
      type: "category",
      label: "Error",
      link: {
        type: "generated-index",
        slug: "javascript/error",
      },
      collapsed: true,
      items: ["javascript/error/error"],
    },*/
  ],
};

export default sidebars;
