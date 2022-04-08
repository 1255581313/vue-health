import request from '@/utils/request'

export function deviceList(query) {
  return request({
    url: '/authapi/device_register/getDeviceRegisterByUserId', //我的设备列表
    method: 'post',
    params: query
  })
}

export function deleteUserDevice(query) {
  return request({
    url: '/authapi/user_device/delete', //用户设备解绑
    method: 'post',
    params: query
  })
}

export function getDeviceRegisterByImei(query) {
  return request({
    url: '/authapi/device_register/getDeviceRegisterByImei', //根据设备imei查询设备数据
    method: 'post',
    params: query
  })
}

export function getUserDeviceByImeiAndUserId(query) {
  return request({
    url: '/authapi/user_device/getUserDeviceByImeiAndUserId', //根据设备imei查询设备数据
    method: 'post',
    params: query
  })
}

export function addUserDevice(data) {
  return request({
    url: '/authapi/user_device/add', //绑定设备
    method: 'post',
    data
  })
}


