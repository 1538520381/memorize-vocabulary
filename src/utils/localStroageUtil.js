const userTokenKey = 'userToken'
const adminTokenKey = 'adminToken'

export function getUserToken() {
  return localStorage.getItem(userTokenKey)
}

export function setUserToken(token) {
  return localStorage.setItem(userTokenKey, token)
}

export function removeUserToken() {
  return localStorage.removeItem(userTokenKey)
}

export function getAdminToken() {
  return localStorage.getItem(adminTokenKey)
}

export function setAdminToken(token) {
  return localStorage.setItem(adminTokenKey, token)
}

export function removeAdminToken() {
  return localStorage.removeItem(adminTokenKey)
}
