import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("THome", defineAsyncComponent(() => import("D:/vuepress/TWPFX-Docs/.vuepress/components/THome.vue")))
  },
}
