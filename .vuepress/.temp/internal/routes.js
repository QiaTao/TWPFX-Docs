export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/timeline.html", { loader: () => import(/* webpackChunkName: "timeline.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/timeline.html.js"), meta: {"title":""} }],
  ["/posts.html", { loader: () => import(/* webpackChunkName: "posts.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/posts.html.js"), meta: {"title":""} }],
  ["/friendship-link.html", { loader: () => import(/* webpackChunkName: "friendship-link.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/friendship-link.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/docs/theme-reco/api.html", { loader: () => import(/* webpackChunkName: "docs_theme-reco_api.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/docs/theme-reco/api.html.js"), meta: {"title":"api"} }],
  ["/docs/theme-reco/home.html", { loader: () => import(/* webpackChunkName: "docs_theme-reco_home.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/docs/theme-reco/home.html.js"), meta: {"title":"theme-reco"} }],
  ["/docs/theme-reco/plugin.html", { loader: () => import(/* webpackChunkName: "docs_theme-reco_plugin.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/docs/theme-reco/plugin.html.js"), meta: {"title":"plugin"} }],
  ["/docs/theme-reco/theme.html", { loader: () => import(/* webpackChunkName: "docs_theme-reco_theme.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/docs/theme-reco/theme.html.js"), meta: {"title":"theme"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
