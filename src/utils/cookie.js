
// 写cookies
export function setCookie(name, value) {
  const days = 1
  const exp = new Date()
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}
// 读取cookies
export function getCookie(name) {
  var arr1 = document.cookie.split('; ')
  for (var i = 0; i < arr1.length; i++) {
    var arr2 = arr1[i].split('=')
    if (arr2[0] === name) {
      return unescape(arr2[1])
    }
  }
}

// 删除cookies
export function delCookie(name) {
  const cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + (new Date(0)).toGMTString()
  }
}

