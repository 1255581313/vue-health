import router from './router'
import { getToken, removeToken } from '@/utils/auth'
import { setCookie, getCookie, delCookie } from '@/utils/cookie'

const blackList = []

// 根据token查询用户
const getUserDetail = function() {
  return new Promise(function(resolve, reject) {
    fetch('/api/user/detail', {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => {
        if (data.data) {
          setCookie('user', JSON.stringify(data.data))
          setCookie('avatar', data.data.avatar)
          setCookie('avatar', data.data.nickName)
          resolve(JSON.stringify(data.data))
        }
      })
      .catch(error => {
        console.error('Error:', error)
        Toast.fail(error)

        reject(error)
      })
  })
}

router.beforeEach((to, from, next) => {
  // 不需要判断token 和 获取用户信息
  if (to.path === '/') {
    next()
  }
  if (getToken()) {
    // 有 token
    if (to.path === '/login') {
      next({ path: '/talent' })
    } else {
      // 是否已 加载user信息
      if (getCookie('user')) {
        next()
      } else {
        getUserDetail().then(function() {
          next()
          // next({ path: to.fullPath, repace: true }) // hack方法 确保addRoutes已完成
        })
      }
    }
  } else {
    // 没有token
    if (blackList.indexOf(to.path) !== -1) {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
    } else {
      next()
    }
  }
})
