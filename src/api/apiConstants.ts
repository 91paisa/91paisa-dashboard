export const basePath = 'http://192.168.0.109:8080/api/v1/reviewer/'

export const CustomerPath = {
  all: `${basePath}all/`,
  create: `${basePath}create/`,
  detail: `${basePath}get/`,
  update: `${basePath}update/`,
  verify: `${basePath}verify/`,
}

export const AuthPath = {
  login: `${basePath}login/`,
  logout: `${basePath}logout/`,
}
