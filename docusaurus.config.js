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
  url: 'https://github.com/SAURETMathieu/documentation',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SAURETMathieu', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  
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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/SAURETMathieu',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/SAURETMathieu',
        // },
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
        title: 'SAURET Doc',
        logo: {
          alt: 'SAURET Doc Logo',
          src: 'img/logo192x192.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'homeSidebar',
            position: 'left',
            label: 'Accueil',
          },
          {
            type: 'docSidebar',
            sidebarId: 'javascriptSidebar',
            position: 'left',
            label: 'Javascript',
          },
          {
            type: 'docSidebar',
            sidebarId: 'cssSidebar', // Identifiant distinct pour la barre latérale CSS
            position: 'left',
            label: 'CSS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'htmlSidebar', // Identifiant distinct pour la barre latérale HTML
            position: 'left',
            label: 'HTML',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sqlSidebar', // Identifiant distinct pour la barre latérale SQL
            position: 'left',
            label: 'SQL',
          },
          {
            type: 'docSidebar',
            sidebarId: 'reactSidebar', // Identifiant distinct pour la barre latérale REACT
            position: 'left',
            label: 'REACT',
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
            title: 'Liens',
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
                href: 'https://www.linkedin.com/in/sauret-mathieu-b5730b273/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Email',
                href: 'https://twitter.com/docusaurus',
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
                label: 'CV',
                href: 'https://www.linkedin.com/in/sauret-mathieu-b5730b273/',
              },
              {
                label: 'Portfolio',
                href: 'https://www.linkedin.com/in/sauret-mathieu-b5730b273/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SAURET Doc, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
