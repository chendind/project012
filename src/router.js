import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Market from './components/Market'
import Mall from './components/Mall'
import Content from './components/Content'
import Person from './components/Person'
import Market_info from './components/Market_info'
import Market_message from './components/Market_message'
import Mall_search from './components/Mall_search'
import Mall_catagory from './components/Mall_catagory'
import Mall_info from './components/Mall_info'
import Mall_order from './components/Mall_order'
import Content_detail from './components/Content_detail'
import Person_about_us from './components/Person_about_us'
import Person_my_order from './components/Person_my_order'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: App,
    children: [
      { 
        path: '/', 
         redirect: '/market'
      },
      { 
        path: '/market', 
        component: Market
      },
      { 
        path: '/mall', 
        component: Mall
      },
      { 
        path: '/content', 
        component: Content
      },
      { 
        path: '/person', 
        component: Person
      }
    ]
  },
  {
    path: '/market_info',
    component: Market_info
  },
  {
    path: '/Market_message',
    component: Market_message
  },
  {
    path: '/Mall_search',
    component: Mall_search
  },
  {
    path: '/Mall_catagory',
    component: Mall_catagory
  },
  {
    path: '/Mall_info',
    component: Mall_info
  },
  {
    path: '/Mall_order',
    component: Mall_order
  },
  {
    path: '/Content_detail',
    component: Content_detail
  },
  {
    path: '/Person_about_us',
    component: Person_about_us
  },
  {
    path: '/Person_my_order',
    component: Person_my_order
  }
]
export default new VueRouter({
  routes // （缩写）相当于 routes: routes
})