// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Endless Devs',
  tagline: 'Your Gateway to Endless Online Development – Tools, Servers, and More!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://endlessdevs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Endless Community Developers', // Usually your GitHub org/user name.
  projectName: 'main', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/Endless-Community-Developers/main/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/Endless-Community-Developers/main/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      metadata: [
        {name: 'keywords', content: 'endless, endlessonline, endless-online, endless online, endless developers, endless, Endless Online game development, Endless Online private server, Endless Online emulator, Endless Online remake, Endless Online coding tutorials, Endless Online custom server, Endless Online graphics development, Endless Online map editor, Endless Online game assets, Endless Online programming, Endless Online modding, Endless Online sprite editor, Endless Online server scripting, Endless Online MMORPG development, Endless Online community projects, Endless Online fan servers, Endless Online open-source projects, Endless Online engine development, Endless Online client development, endless community, endless online community, programming, game development, developers'},
      ],  
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Endless Devs',
        logo: {
          alt: 'Endless Devs Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
           to: '/blog',
           label: 'Blog',
           position: 'left',
          },
          {
            to: 'docs/Extra/credits',
            label: 'Credits',
            position: 'left',
          },
          {
            to: 'docs/Extra/links',
            label: 'Links',
            position: 'left',
          },
          {
            href: 'https://discord.com/invite/MCk65uP',
            label: '404 Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/Endless-Community-Developers/main',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Credits',
                to: 'docs/Extra/credits',
              },
              {
                label: 'Links',
                to: 'docs/Extra/links',
              },
            ],
          },
          {
            title: 'Important Links',
            items: [
              {
                label: 'Endless Online',
                href: 'http://endless-online.com',
              },
              {
                label: '404 Developer Community Discord',
                href: 'https://discord.com/invite/MCk65uP',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Endless-Community-Developers/main',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Endless Devs. Except where noted Copyright © ${new Date().getFullYear()} Endless Online`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
