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
      items: ["javascript/error/error-centralize"],
    },
    {
      type: "category",
      label: "Tableau",
      link: {
        type: "generated-index",
        slug: "javascript/tableau",
        keywords: ["tableau", "array", "array methods"],
      },
      items: [
        "javascript/tableau/concat",
        "javascript/tableau/every",
        "javascript/tableau/filter",
        "javascript/tableau/find",
        "javascript/tableau/find-index",
        "javascript/tableau/flat",
        "javascript/tableau/foreach",
        "javascript/tableau/includes",
        "javascript/tableau/index-of",
        "javascript/tableau/join",
        "javascript/tableau/map",
        "javascript/tableau/reduce",
        "javascript/tableau/reduce-right",
        "javascript/tableau/reverse",
        "javascript/tableau/slice",
        "javascript/tableau/some",
        "javascript/tableau/sort",
        "javascript/tableau/splice",
      ],
    },
    {
      type: "category",
      label: "Middlewares",
      link: { type: "generated-index", slug: "javascript/middlewares" },
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
      label: "CSS Vanilla",
      link: {
        type: "generated-index",
      },
      items: ["css/vanilla/flex-wrap", "css/vanilla/flexbox"],
    },
    {
      type: "category",
      label: "Tailwind CSS",
      link: {
        type: "generated-index",
      },
      items: ["css/tailwind/installation"],
    },
  ],
  htmlSidebar: [{ type: "autogenerated", dirName: "html" }],
  reactSidebar: [
    "react/index",
    {
      type: "category",
      label: "Services",
      link: {
        type: "generated-index",
        slug: "react/services",
      },
      collapsed: true,
      items: [
        "react/services/auth/check-admin",
        "react/services/auth/check-connect",
      ],
    },
    {
      type: "category",
      label: "API",
      link: {
        type: "generated-index",
        slug: "react/api",
      },
      collapsed: true,
      items: ["react/api/fetch-data"],
    },
    {
      type: "category",
      label: "Templates",
      link: {
        type: "generated-index",
        slug: "react/templates",
      },
      collapsed: true,
      items: [
        "react/templates/template-auto-form",
        "react/templates/template-table",
      ],
    },
  ],
};

export default sidebars;
