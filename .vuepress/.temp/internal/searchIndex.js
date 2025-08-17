export const SEARCH_INDEX = [
  {
    "title": "",
    "headers": [],
    "path": "/timeline.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/posts.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/friendship-link.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "api",
    "headers": [],
    "path": "/docs/theme-reco/api.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "theme-reco",
    "headers": [],
    "path": "/docs/theme-reco/home.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "plugin",
    "headers": [],
    "path": "/docs/theme-reco/plugin.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "theme",
    "headers": [],
    "path": "/docs/theme-reco/theme.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
