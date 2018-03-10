export const basePath = 'http://localhost:8080/api/v1/'

export const CustomerPath = {
  all: `${basePath}customer/all/`,
  create: `${basePath}customer/create/`,
  detail: `${basePath}customer/get/`,
  update: `${basePath}customer/update/`,
  verify: `${basePath}customer/verify/`,
}

export const AuthPath = {
  login: `${basePath}reviewer/login/`,
  logout: `${basePath}reviewer/logout/`,
}
