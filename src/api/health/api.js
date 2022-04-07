
import request from '@/utils/request'

export function getPagedList(data) {
  return request({
    url: '/authapi/body_temperatureDeviceDataLog/getPagedList',
    method: 'post',
    data
  })
}

// 查询用户最新血压数据
export function newestBloodPressureByUserId(query) {
  return request({
    url: '/authapi/blood_pressureDeviceDataLog/getNewestDataByUserId',
    method: 'post',
    params: query
  })
}

// 查询用户血压数据列表
export function listBloodPressureByUserId(data) {
  return request({
    url: '/authapi/blood_pressureDeviceDataLog/getListDataByUserId',
    method: 'post',
    data
  })
}

// 查询用户最新血糖数据
export function newestBloodSugarByUserId(query) {
  return request({
    url: '/authapi/blood_sugarDeviceDataLog/getNewestDataByUserId',
    method: 'post',
    params: query
  })
}

// 查询用户血糖数据列表
export function listBloodSugarByUserId(data) {
  return request({
    url: '/authapi/blood_sugarDeviceDataLog/getListDataByUserId',
    method: 'post',
    data
  })
}

// 查询用户最新血氧数据
export function newestBloodOxygenByUserId(query) {
  return request({
    url: '/authapi/blood_oxygenDeviceDataLog/getNewestDataByUserId',
    method: 'post',
    params: query
  })
}

// 查询用户血氧数据列表
export function listBloodOxygenByUserId(data) {
  return request({
    url: '/authapi/blood_oxygenDeviceDataLog/getListDataByUserId',
    method: 'post',
    data
  })
}

// 查询用户最新尿酸数据
export function newestUricAcidByUserId(query) {
  return request({
    url: '/authapi/uric_acidDeviceDataLog/getNewestDataByUserId',
    method: 'post',
    params: query
  })
}

// 查询用户尿酸数据列表
export function listUricAcidByUserId(data) {
  return request({
    url: '/authapi/uric_acidDeviceDataLog/getListDataByUserId',
    method: 'post',
    data
  })
}

// 查询用户最新总胆固醇数据
export function newestCholesterolByUserId(query) {
  return request({
    url: '/authapi/cholesterol_deviceDataLog/getNewestDataByUserId',
    method: 'post',
    params: query
  })
}

// 查询用户总胆固醇数据列表
export function listCholesterolByUserId(data) {
  return request({
    url: '/authapi/cholesterol_deviceDataLog/getListDataByUserId',
    method: 'post',
    data
  })
}

// 查询用户最新甘油三酯数据
export function newestGlycerinByUserId(query) {
  return request({
    url: '/authapi/glycerin_deviceDataLog/getNewestDataByUserId',
    method: 'post',
    params: query
  })
}

// 查询用户甘油三酯数据列表
export function listGlycerinByUserId(data) {
  return request({
    url: '/authapi/glycerin_deviceDataLog/getListDataByUserId',
    method: 'post',
    data
  })
}

// 查询用户最新体温数据
export function newestBodyTemperatureByUserId(query) {
  return request({
    url: '/authapi/body_temperatureDeviceDataLog/getNewestDataByUserId',
    method: 'post',
    params: query
  })
}

// 查询用户体温数据列表
export function listBodyTemperatureByUserId(data) {
  return request({
    url: '/authapi/body_temperatureDeviceDataLog/getListDataByUserId',
    method: 'post',
    data
  })
}

// 查询正在上架的广告图片信息
export function getAdvertisingList() {
   return request({
     url: '/authapi/base_advertising/getAdvertisingList',
     method: 'post',
  })
}

// // 查询bloodPressure详细
// export function getBloodPressure(bloodPressureId) {
//   return request({
//     url: '/authapi/blood_pressureDeviceDataLog/get',
//     method: 'POST'
//   })
// }

// // 查询最新bloodPressure详细
// export function getNewsBloodPressure(bloodPressureId) {
//   return request({
//     url: '/authapi/blood_pressureDeviceDataLog/getNewestDataByUserId',
//     method: 'POST'
//   })
// }

// // 新增bloodPressure
// export function addBloodPressure(data) {
//   return request({
//     url: '/authapi/blood_pressureDeviceDataLog/add',
//     method: 'post',
//     data: data
//   })
// }

// // 修改bloodPressure
// export function updateBloodPressure(data) {
//   return request({
//     url: '/authapi/blood_pressureDeviceDataLog/update',
//     method: 'put',
//     data: data
//   })
// }

// // 删除bloodPressure
// export function delBloodPressure(bloodPressureId) {
//   return request({
//     url: '/authapi/blood_pressureDeviceDataLog/delete',
//     method: 'post'
//   })
// }

const AddressList = '/authapi/user_shippingAddress/getUserShippingAddressListByUserId' // 收货地址列表
export function addressList(query) {
 return request({
   url: AddressList,
   method: 'post',
   params: query
 })
}

const AddressDetail = '/authapi/user_shippingAddress/get' // 收货地址详情
export function addressDetail(query) {
   return request({
     url: AddressDetail,
     method: 'post',
     params: query
   })
}

const AddressSave = '/authapi/user_shippingAddress/add' // 保存收货地址
export function addressSave(data) {
   return request({
     url: AddressSave,
     method: 'post',
     data
   })
}

const GoodsDetail = '/authapi/base_goods/get' //商品详细
export function goodsDetail(query) {
  return request({
    url: GoodsDetail,
    method: 'post',
    params: query
  })
}

// const AddressDelete = 'wx/address/delete' // 保存收货地址
// export function addressDelete(data) {
//   return request({
//     url: AddressDelete,
//     method: 'post',
//     data
//   })
// }

// const CouponSelectList = 'wx/coupon/selectlist' // 当前订单可用优惠券列表
// export function couponSelectList(query) {
//   return request({
//     url: CouponSelectList,
//     method: 'get',
//     params: query
//   })
// }

// const OrderSubmit = 'wx/order/submit' // 提交订单
// export function orderSubmit(data) {
//   return request({
//     url: OrderSubmit,
//     method: 'post',
//     data
//   })
// }

// const CartCheckout = 'wx/cart/checkout' // 下单前信息确认
// export function cartCheckout(query) {
//   return request({
//     url: CartCheckout,
//     method: 'get',
//     params: query
//   })
// }

// const OrderPrepay = 'wx/order/prepay' // 订单的预支付会话
// export function orderPrepay(data) {
//   return request({
//     url: OrderPrepay,
//     method: 'post',
//     data
//   })
// }
// const OrderH5pay = 'wx/order/h5pay' // h5支付
// export function orderH5pay(data) {
//   return request({
//     url: OrderH5pay,
//     method: 'post',
//     data
//   })
// }
// export const OrderList = 'wx/order/list' // 订单列表
// export function orderList(query) {
//   return request({
//     url: OrderList,
//     method: 'get',
//     params: query
//   })
// }
// const OrderDetail = 'wx/order/detail' // 订单详情
// export function orderDetail(query) {
//   return request({
//     url: OrderDetail,
//     method: 'get',
//     params: query
//   })
// }
// const OrderCancel = 'wx/order/cancel' // 取消订单
// export function orderCancel(data) {
//   return request({
//     url: OrderCancel,
//     method: 'post',
//     data
//   })
// }
// const OrderRefund = 'wx/order/refund' // 退款取消订单
// export function orderRefund(data) {
//   return request({
//     url: OrderRefund,
//     method: 'post',
//     data
//   })
// }
// const OrderDelete = 'wx/order/delete' // 删除订单
// export function orderDelete(data) {
//   return request({
//     url: OrderDelete,
//     method: 'post',
//     data
//   })
// }
