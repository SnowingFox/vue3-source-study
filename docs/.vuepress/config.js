module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'vue3-source-code-study',
  description: '学习vue3源码时做的学习笔记',
  base: '/',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    docsBranch: 'docs',
    repo: 'https://github.com/HFUT-software/Invigilator-system/',
    docsRepo:'https://github.com/SnowingFox/Invigilator-system-docs',
    editLink: true,
    editLinkText: "编辑此页",
    lastUpdated: true,
    lastUpdatedText: '上一次编辑',
    contributors: true,
    tip: "提示",
    warning: "注意",
    danger: "警告",
    backToHome: "返回首页",
    navbar: [
      { text: 'Guide', link: '/guide/guide.md' },
      { text: 'reactive', children: ['/reactive/effect.md'] },
    ],
  },

}
