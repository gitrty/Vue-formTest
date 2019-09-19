import { vue } from '../main'

export default {
  install(Vue) {
    // 通过路径跳转
    Vue.prototype.$path = (path, query = {}) => vue.$router.push({ path: `${path}`, query }).catch(err => err)
    // 通过name跳转
    Vue.prototype.$jump = (name, query = {}) => vue.$router.push({ name: `${name}`, query })
    // 返回上一级路由
    Vue.prototype.$back = () => vue.$router.go(-1)
    // 将一个节点插入到另一个节点后
    Vue.prototype.$insertAfter = (parentNode, newNode, refNode) => {
      var oNext = refNode.nextElementSibling || refNode.nextSibling;
      parentNode.insertBefore(newNode, oNext)
    }
  }
}