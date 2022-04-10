import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  // health
  {
    path: '/',
    component: resolve => require(['@/views/Health'], resolve),
    children: [
      // {
      //   path: 'test',
      //   component: resolve => require(['@/views/Health/test'], resolve),
      //   meta: {
      //     title: 'dist'
      //   }
      // },
      {
        path: 'dist-user/healthRecords',
        component: resolve => require(['@/views/Health/dist-user/healthRecords/index'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-user/healthRecords/base',
        component: resolve => require(['@/views/Health/dist-user/healthRecords/base'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-user/healthRecords/address',
        component: resolve => require(['@/views/Health/dist-user/healthRecords/address'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-user/healthRecords/size',
        component: resolve => require(['@/views/Health/dist-user/healthRecords/size'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-user/healthRecords/type',
        component: resolve => require(['@/views/Health/dist-user/healthRecords/type'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-user/healthRecords/manage',
        component: resolve => require(['@/views/Health/dist-user/healthRecords/manage'], resolve),
        meta: {
          title: 'dist'
        }
      },

      {
        path: 'dist-user/relatives',
        component: resolve => require(['@/views/Health/dist-user/relatives/index'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-user/relatives/list',
        component: resolve => require(['@/views/Health/dist-user/relatives/list'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-user/relatives/add',
        component: resolve => require(['@/views/Health/dist-user/relatives/add'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-home',
        component: resolve => require(['@/views/Health/dist-home/App'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-home-blood-pressure-list',
        component: resolve => require(['@/views/Health/dist-home/bloodPressureList'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-home-blood-oxygen-list',
        component: resolve => require(['@/views/Health/dist-home/bloodOxygenList'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-home-other-list',
        component: resolve => require(['@/views/Health/dist-home/otherList'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-shop-detail',
        component: resolve => require(['@/views/Health/dist-shop/App'], resolve),
        meta: {
          title: 'dist',
          tabbarHidean: true
        }
      },
      {
        path: 'dist-shop',
        component: resolve => require(['@/views/Health/dist-shop/list'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: '/dist-shop/checkout',
        name: 'shopCheckout',
        component: resolve => require(['@/views/Health/dist-shop/checkout'], resolve)
      },
      {
        path: 'dist-user',
        component: resolve => require(['@/views/Health/dist-user/App'], resolve),
        meta: {
          title: 'dist'
        }
      },
      {
        path: 'dist-user/address',
        name: 'address',
        meta: {
          login: true,
          tabbarHidean: true
        },
        component: resolve => require(['@/views/Health/dist-user/address'], resolve)
      },
      {
        path: 'dist-user/address/edit',
        name: 'address-edit',
        props: true,
        meta: {
          login: true
        },
        component: resolve => require(['@/views/Health/dist-user/address-edit'], resolve)
      },
      {
        path: 'dist-user/order-list',
        name: 'address',
        meta: {
          login: true,
          tabbarHidean: true
        },
        component: resolve => require(['@/views/Health/dist-user/order-list'], resolve)
      },

      {
        path: 'dist-user/device',
        name: 'address',
        meta: {
          login: true,
          tabbarHidean: true
        },
        component: resolve => require(['@/views/Health/dist-user/device'], resolve)
      },

      {
        path: 'dist-user/addDevice',
        name: 'address',
        meta: {
          login: true,
          tabbarHidean: true
        },
        component: resolve => require(['@/views/Health/dist-user/addDevice'], resolve)
      },

      {
        path: 'dist-article',
        component: resolve => require(['@/views/Health/dist-article/App'], resolve),
        meta: {
          title: 'dist'
        }
      },

      {
        path: 'dist-free',
        component: resolve => require(['@/views/Health/dist-free/App'], resolve),
        meta: {
          title: 'dist'
        }
      }
      // {
      //   path: '',
      //   component: resolve => require(['@/views/Health/home'], resolve),
      //   meta: {
      //     title: '健康'
      //   }
      // },
      // {
      //   path: 'home',
      //   component: resolve => require(['@/views/Health/home'], resolve),
      //   meta: {

      //     title: '健康',
      //     tabbarHidean: false
      //   }
      // },
      // {
      //   path: 'home/list',
      //   component: resolve => require(['@/views/Health/home/list'], resolve),
      //   meta: {
      //     title: '健康',
      //     tabbarHidean: true
      //   }
      // },
      // {
      //   path: 'home/addDevice',
      //   component: resolve => require(['@/views/Health/home/addDevice'], resolve),
      //   meta: {
      //     title: '健康',
      //     tabbarHidean: true
      //   }
      // },
      // {
      //   path: 'home/add',
      //   component: resolve => require(['@/views/Health/home/add'], resolve),
      //   meta: {
      //     title: '健康',
      //     tabbarHidean: true
      //   }
      // },
      // {
      //   path: 'home/heathrRecord',
      //   component: resolve => require(['@/views/Health/home/heathrRecord'], resolve),
      //   meta: {
      //     title: '健康',
      //     tabbarHidean: true
      //   }
      // },
      // {
      //   path: 'home/contrlTarget',
      //   component: resolve => require(['@/views/Health/home/contrlTarget'], resolve),
      //   meta: {
      //     title: '健康',
      //     tabbarHidean: true
      //   }
      // },
      // {
      //   path: 'home/test',
      //   component: resolve => require(['@/views/Health/home/test'], resolve),
      //   meta: {
      //     title: '健康',
      //     tabbarHidean: true
      //   }
      // },
      // {
      //   path: 'home/device',
      //   component: resolve => require(['@/views/Health/home/device'], resolve),
      //   meta: {
      //     title: '健康',
      //     tabbarHidean: true
      //   }
      // },
      // {
      //   name: 'server',
      //   path: 'server',
      //   component: () => import('@/views/Health/server'),
      //   meta: {
      //     title: '服务'
      //   }
      // },

      // {
      //   name: 'blog',
      //   path: 'blog',
      //   component: () => import('@/views/Health/blog'),
      //   meta: {
      //     title: '发现'
      //   }
      // },
      // {
      //   name: 'shop',
      //   path: 'shop',
      //   component: () => import('@/views/Health/shop'),
      //   meta: {
      //     title: '商城'
      //   }
      // },

      // {
      //   path: 'user',
      //   name: 'user',
      //   component: () => import('@/views/Health/user'),
      //   meta: {
      //     title: '我的'
      //   }
      // }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
