// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SAURET Doc',
  tagline: 'Bienvenue sur la documentation de SAURET Mathieu',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sauretmathieu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SAURETMathieu', // Usually your GitHub org/user name.
  projectName: 'SAURET-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/SAURETMathieu',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      ({
        hashed: true,
        searchResultLimits: 10,
        searchBarShortcutHint: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Accueil',
        logo: {
          alt: 'SAURET Doc Logo',
          src: 'img/logo192x192.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'javascript',
            position: 'left',
            label: 'Javascript',
          },
          {
            type: 'docSidebar',
            sidebarId: 'css',
            position: 'left',
            label: 'CSS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'htmlSidebar',
            position: 'left',
            label: 'HTML',
          },
          {
            type: 'docSidebar',
            sidebarId: 'reactSidebar',
            position: 'left',
            label: 'React',
          },
          {
            href: 'https://github.com/SAURETMathieu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Liens utiles',
            items: [
              {
                label: 'MDN Web Docs',
                href: 'https://developer.mozilla.org/fr/',
              },
              {
                label: 'Chat GPT',
                href: 'https://chat.openai.com/',
              },
              {
                label: 'Font awesome',
                href: 'https://fontawesome.com/search',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/sauret-mathieu',
              },
              {
                label: 'Email',
                href: 'mailto:mathieu.sauret.dev@gmail.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SAURETMathieu',
              },
              {
                label: 'Portfolio',
                href: 'https://sauret-mathieu.up.railway.app',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Mathieu SAURET, Réalisé avec React et Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
