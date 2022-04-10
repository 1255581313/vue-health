import request from '@/utils/request'

export function userInFo(query) {
  return request({
    url: '/authapi/user_account/get', //用户基本信息
    method: 'post',
    params: query
  })
}



