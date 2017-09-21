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
          require.ensure([], (require) => {
            r(require('src/components/Market'))
          }, 'main')
        }
      },
      {
        path: '/mall',
        name: 'mall',
        component(r){
          require.ensure([], (require) => {
            r(require('src/components/Mall'));
          }, 'main')
        }
      },
      {
        path: '/content',
        name: 'content',
        component(r){
          require.ensure([], (require) => {
            r(require('src/components/Content'));
          }, 'main')
        }
      },
      {
        path: '/person',
        name: 'person',
        component(r){
          require.ensure([], (require) => {
            r(require('src/components/Person'));
          }, 'main')
        }
      }
    ]
  },
  {
    path: '/app_login',
    name: 'app_login',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/App_login'));
      }, 'main')
    }
  },
  {
    path: '/app_regist',
    name: 'app_regist',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/App_regist'));
      }, 'main')
    }
  },
  // {
  //   path: '/bind_phone',
  //   name: 'bind_phone',
  //   component(r){
  //     require.ensure([], (require) => {
  //       r(require('src/components/Bind_phone'));
  //     }, 'main')
  //   }
  // },
  {
    path: '/app_findPassword',
    name: 'app_findPassword',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/App_findPassword'));
      }, 'main')
    }
  },
  {
    path: '/market_info',
    name: 'market_info',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/Market_info'));
      }, 'main')
    }
  },
  {
    path: '/market_message',
    name: 'market_message',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/Market_message'));
      }, 'main')
    }
  },
  {
    path: '/mall_search',
    name: 'mall_search',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/Mall_search'));
      }, 'main')
    }
  },
  {
    path: '/mall_category',
    name: 'mall_category',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/Mall_category'));
      }, 'main')
    }
  },
  {
    path: '/mall_info',
    name: 'mall_info',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/Mall_info'));
      }, 'main')
    }
  },
  {
    path: '/mall_order',
    name: 'mall_order',
    component(r){
      require.ensure([], (require) => {
        r(require('src/components/Mall_order'));
      }, 'main')
    }
  },
  {
    path: '/content_detail',
    name: 'content_detail',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/Content_detail'));
    }, 'main')
    }
  },
  {
    path: '/person_info',
    name: 'person_info',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/Person_info'));
    }, 'main')
    }
  },
  {
    path: '/person_info_name',
    name: 'person_info_name',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/Person_info_name'));
    }, 'main')
    }
  },
  {
    path: '/person_info_password',
    name: 'person_info_password',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/Person_info_password'));
    }, 'main')
    }
  },
  {
    path: '/person_about_us',
    name: 'person_about_us',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/Person_about_us'));
    }, 'main')
    }
  },
  {
    path: '/person_my_order',
    name: 'person_my_order',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/Person_my_order'));
    }, 'main')
    }
  },
  {
    path: '/history_rate',
    name: 'history_rate',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/History_rate'));
    }, 'main')
    }
  },
  {
    path: '/product_info',
    name: 'product_info',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/Product_info'));
    }, 'main')
    }
  },
  {
    path: '/rate',
    name: 'rate',
    component(r){
      require.ensure([], (require) => {
      r(require('src/components/Rate'));
    }, 'main')
    }
  }
]
export default new VueRouter({
  routes // （缩写）相当于 routes: routes
})
