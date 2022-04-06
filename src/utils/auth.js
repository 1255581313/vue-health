
import { setCookie, getCookie, delCookie } from '@/utils/cookie'

const TokenKey = 'freelance'

export function getToken() {
  return getCookie(TokenKey)
}

export function setToken(token) {
  return setCookie(TokenKey, token)
}

export function removeToken() {
  return delCookie(TokenKey)
}
