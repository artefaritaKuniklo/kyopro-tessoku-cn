const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '序章 算法竞赛简介',
        link: '/序章 算法竞赛简介',
      },      
      {
        text: '第 1 章 算法与计算复杂度',
        link: '/第 1 章 算法与计算复杂度',
      },
      {
        text: '第 2 章 部分和',
        link: '/第 2 章 部分和',
      },      
    ],
    sidebar:
       [
        {
          title: '第 1 章 算法与计算复杂性',
          collapsable: false,
          children: [
            '/第 1 章 算法与计算复杂性/',
          ]
        },
        {
          title: '第 2 章 部分和',
          collapsable: false,
          children: [
            '/第 2 章 部分和/',
          ]
        },
        {
          title: '第 3 章 二分搜索',
          collapsable: false,
          children: [
            '/第 3 章 二分搜索/',
          ]
        },
        {
          title: '第 4 章 动态规划',
          collapsable: false,
          children: [
            '/第 4 章 动态规划/',
          ]
        },
        {
          title: '第 5 章 数学问题',
          collapsable: false,
          children: [
            '/第 5 章 数学问题/',
          ]
        },
        {
          title: '第 6 章 考察法',
          collapsable: false,
          children: [
            '/第 6 章 考察法/',
          ]
        },
        {
          title: '第 7 章 启发式方法',
          collapsable: false,
          children: [
            '/第 7 章 启发式方法/',
          ]
        },
        {
          title: '第 8 章 数据结构与询问处理',
          collapsable: false,
          children: [
            '/第 8 章 数据结构与询问处理/',
          ]
        },
        {
          title: '第 9 章 图论算法',
          collapsable: false,
          children: [
            '/第 9 章 图论算法/',
          ]
        },
        {
          title: '第 10 章 综合问题',
          collapsable: false,
          children: [
            '/第 10 章 综合问题/',
          ]
        },
        {
          title: '序章 算法竞赛简介',
          collapsable: false,
          children: [
            '/序章 算法竞赛简介/',
          ]
        },
        {
          title: '终章 如何进一步学习',
          collapsable: false,
          children: [
            '/终章 如何进一步学习/',
          ]
        }
      ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
