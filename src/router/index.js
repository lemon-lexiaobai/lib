import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/home/home'
import Book from 'components/book/book'
import Increase from 'components/increase/increase'
import Library from 'components/library/library'
import Borrow from 'components/borrow/borrow'

const original = VueRouter.prototype.push

// 避免到当前位置的冗余导航
VueRouter.prototype.push = function push(location) {
  return original.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    alias: '/'
  },
  {
    path: '/book',
    component: Book
  },
  {
    path: '/increase',
    component: Increase
  },
  {
    path: '/library',
    component: Library
  },
  {
    path: '/borrow',
    component: Borrow
  }
]

const router = new VueRouter({
  routes
})

export default router
