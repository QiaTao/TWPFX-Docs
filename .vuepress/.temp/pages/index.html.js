import comp from "C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"modules\":[\"BannerBrand\",\"MdContent\",\"Footer\"],\"bannerBrand\":{\"bgImage\":\"/bg.svg\",\"title\":\"TWPFX\",\"description\":\"增强WPF控件能力，简化桌面UI开发\",\"tagline\":\"TWPF 是一款专注于 WPF 技术栈的控件扩展库，旨在弥补原生控件的功能局限，为开发者提供更丰富、高效的 UI 构建工具。\",\"buttons\":[{\"text\":\"快速开始\",\"link\":\"/docs/guide/introduce\"},{\"text\":\"Github\",\"link\":\"/docs/style-default-api/introduce\",\"type\":\"plain\"}],\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/vuepress-reco/vuepress-theme-reco\"}]},\"blog\":{\"socialLinks\":[{\"icon\":\"LogoGithub\",\"link\":\"https://github.com/recoluan\"}]},\"isShowTitleInHome\":false,\"actionText\":\"About\",\"actionLink\":\"/views/other/about\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
