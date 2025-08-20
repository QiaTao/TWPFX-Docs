import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: "zh-CN",
  title: "TWPFX-Docs",
  description: "Just playing around",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    primaryColor: '#3aa675',  // 主题色
    colorMode: "light", // 主题色模式，支持 'light' | 'dark' | 'auto'
    colorModeSwitch: true, // 是否开启颜色模式切换
    // password: "14e1b600b1fd579f47433b88e8d85291",
    repo: "QiaTao/TWPFX",
    logo: "/logo.svg",
    author: "ATao",
    authorAvatar: "/head.png",
    docsDir: ".",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/", icon: 'IconHome' },
      {
        text: "安装指南",
        icon: "IconCompass",
        link: "/docs/theme-reco/theme"
      },
      {
        text: "下载",
        icon: "IconDownload",
        children: [
          { text: "TWPFX-Gallery(示例)", link: "/docs/theme-reco/theme", rel: "www.baidu.com", target: "www.google.com"},
        ],
      },
      {
        text: "文档",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme", icon: 'IconHome' },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide", icon: 'IconHome' },
        ],
        icon: "IconDocument"
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
