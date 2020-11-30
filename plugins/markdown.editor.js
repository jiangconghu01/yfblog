import Vue from 'vue'
import { MarkdownPro } from 'vue-meditor'
const markdown = {
  install(Vue) {
    Vue.component('MarkDown', MarkdownPro)
  }
}
export default () => {
  Vue.use(markdown)
}
