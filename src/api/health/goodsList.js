import request from '@/utils/request'

const GoodsList = '/authapi/base_goods/getGoodsList' //ๅๅๅ่กจ
export function goodsList() {
  return request({
    url: GoodsList,
    method: 'post'
  })
}
