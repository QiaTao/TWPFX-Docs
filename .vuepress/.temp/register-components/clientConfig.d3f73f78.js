import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("IconCompass", defineAsyncComponent(() => import("C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/components/IconCompass.vue")))
    
      app.component("IconDocument", defineAsyncComponent(() => import("C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/components/IconDocument.vue")))
    
      app.component("IconDownload", defineAsyncComponent(() => import("C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/components/IconDownload.vue")))
    
      app.component("IconHome", defineAsyncComponent(() => import("C:/Users/qiata/OneDrive/Desktop/TWPFX-Docs/TWPFX-Docs/.vuepress/components/IconHome.vue")))
  },
}
