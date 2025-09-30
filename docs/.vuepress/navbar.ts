/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '系列笔记',
    items: [
      // link 为文件路径
      { text: '开源资源汇总', link: '/notes/00.opensource/' },
      { text: '自我管理', link: '/notes/01.self-manage/' },
      { text: '对比python学习go', link: '/notes/02.对比python学习go/' },
      { text: 'Git学习笔记', link: '/notes/03.Git学习笔记/' },
      { text: '数据结构与算法笔记', link: '/notes/04.数据结构与算法笔记/' },
    ]
  },
])

// export const enNavbar = defineNavbarConfig([
//   { text: 'Home', link: '/en/' },
//   { text: 'Blog', link: '/en/blog/' },
//   { text: 'Tags', link: '/en/blog/tags/' },
//   { text: 'Archives', link: '/en/blog/archives/' },
//   {
//     text: 'Notes',
//     items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
//   },
// ])

