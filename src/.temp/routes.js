const c1 = () => import(/* webpackChunkName: "page--src--pages--project-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/src/pages/Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--social-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/src/pages/Social.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mac/JALProjects/lagou-fed/fed-e-task-03-04/code/my-VBlog/src/pages/Index.vue")

export default [
  {
    path: "/project/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/social/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
