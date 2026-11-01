import { defineConfig } from 'vitepress'

// 站点根 = 仓库根：VitePress 在仓库根查找 .vitepress/config.ts，
// 这样无论 CI 执行 `npx vitepress build` 还是本地 `pnpm build`，
// 加载的都是同一份配置。文档源文件在 docs/，产物固定输出到仓库根 dist/。
export default defineConfig({
  srcDir: 'docs',
  outDir: 'dist',
  // docs/public 下的 md 是仓库内说明文档，只作为静态资源复制，不作为页面编译
  srcExclude: ['public/**'],
  title: '神人志',
  description: '智教圈神人档案馆——收录各位神人的临床观察与光辉事迹',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '神人档案', link: '/archives/' },
      { text: '入馆须知', link: '/about' },
    ],
    sidebar: {
      '/archives/': [
        {
          text: '神人档案',
          items: [
            { text: '档案索引', link: '/archives/' },
            { text: '档案模板', link: '/archives/template' },
          ],
        },
      ],
    },
    docFooter: { prev: '上一份档案', next: '下一份档案' },
    lastUpdatedText: '最后修订',
  },
})
