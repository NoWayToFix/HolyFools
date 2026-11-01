import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '神人志',
  description: '神经病档案馆——收录每一位在册神人的临床观察与光辉事迹',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '神人档案', link: '/archives/' },
      { text: '关于本馆', link: '/about' },
    ],
    sidebar: {
      '/archives/': [
        {
          text: '神人档案',
          items: [
            { text: '档案索引', link: '/archives/' },
            { text: '001号 · 夜半歌者', link: '/archives/001-night-singer' },
            { text: '档案模板', link: '/archives/template' },
          ],
        },
      ],
    },
    docFooter: { prev: '上一份档案', next: '下一份档案' },
    lastUpdatedText: '最后修订',
  },
})
