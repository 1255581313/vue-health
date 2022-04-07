import request from '@/utils/request'

const GoodsList = '/authapi/base_goods/getGoodsList' //商品列表
export function goodsList() {
  return request({
    url: GoodsList,
    method: 'post'
  })
}
