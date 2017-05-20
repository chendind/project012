import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'src/components/App'

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
        name: 'market',
        component(r){
          r(require('src/components/Market'));
        }
      },
      {
        path: '/mall',
        name: 'mall',
        component(r){
          r(require('src/components/Mall'));
        }
      },
      {
        path: '/content',
        name: 'content',
        component(r){
          r(require('src/components/Content'));
        }
      },
      {
        path: '/person',
        name: 'person',
        component(r){
          r(require('src/components/Person'));
        }
      }
    ]
  },
  {
    path: '/market_info',
    name: 'market_info',
    component(r){
      r(require('src/components/Market_info'));
    }
  },
  {
    path: '/market_info_rate',
    name: 'market_info_rate',
    component(r){
      r(require('src/components/Market_info_rate'));
    }
  },
  {
    path: '/market_message',
    name: 'market_message',
    component(r){
      r(require('src/components/Market_message'));
    }
  },
  {
    path: '/mall_search',
    name: 'mall_search',
    component(r){
      r(require('src/components/Mall_search'));
    }
  },
  {
    path: '/mall_category',
    name: 'mall_category',
    component(r){
      r(require('src/components/Mall_category'));
    }
  },
  {
    path: '/mall_info',
    name: 'mall_info',
    component(r){
      r(require('src/components/Mall_info'));
    }
  },
  {
    path: '/mall_order',
    name: 'mall_order',
    component(r){
      r(require('src/components/Mall_order'));
    }
  },
  {
    path: '/content_detail',
    name: 'content_detail',
    component(r){
      r(require('src/components/Content_detail'));
    }
  },
  {
    path: '/person_about_us',
    name: 'person_about_us',
    component(r){
      r(require('src/components/Person_about_us'));
    }
  },
  {
    path: '/person_my_order',
    name: 'person_my_order',
    component(r){
      r(require('src/components/Person_my_order'));
    }
  },
  {
    path: '/history_rate',
    name: 'history_rate',
    component(r){
      r(require('src/components/History_rate'));
    }
  },
  {
    path: '/product_info',
    name: 'product_info',
    component(r){
      r(require('src/components/Product_info'));
    }
  },
  {
    path: '/product_info_rate',
    name: 'product_info_rate',
    component(r){
      r(require('src/components/Product_info_rate'));
    }
  }
]
export default new VueRouter({
  routes // （缩写）相当于 routes: routes
})
