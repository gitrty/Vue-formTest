import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import formBuilder from './views/formBuilder.vue'

export const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/formTemplate'
    },
    {
      // 模板页面
      path: '/formTemplate',
      name: 'formTemplate',
      component: () => import('./views/formTemplate.vue'),
      children: [
        { path: '', redirect: 'yjdy' },
        { path: 'yjdy', component: () => import('./components/formTemplate/yjdy.vue') },
        { path: 'yjfk', component: () => import('./components/formTemplate/yjfk.vue') }
      ]
    },
    {
      // 自定义表单制作页面
      path: '/formBuilder',
      name: 'formBuilder',
      component: formBuilder
    },
    {
      // 制作完成后预览页面
      path: '/formPreview',
      name: 'formPreview',
      component: () => import('./views/formPreview.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name == 'formPreview') {
    document.body.style.background = "#bae3f9"
  }else{
    document.body.style.background = "#fff"
  }
  next()
})
