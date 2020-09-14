const c1 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/src/pages/About.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/src/pages/Index.vue")

export default [
  {
    path: "/about/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
