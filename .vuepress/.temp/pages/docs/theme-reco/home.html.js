import comp from "C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/docs/theme-reco/home.html.vue"
const data = JSON.parse("{\"path\":\"/docs/theme-reco/home.html\",\"title\":\"theme-reco\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"theme-reco\",\"date\":\"2020/05/29\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"docs/theme-reco/home.md\"}")
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
