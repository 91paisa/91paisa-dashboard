export const basePath = 'http://192.168.0.101:8080/api/v1/'

export const CustomerPath = {
  all: `${basePath}customer/all/`,
  create: `${basePath}customer/create/`,
  detail: `${basePath}customer/get/`,
  update: `${basePath}customer/update/`,
  verify: `${basePath}customer/verify/`,
}

export const TransactionPath = {
  all: `${basePath}transaction/all/`,
}

export const AuthPath = {
  login: `${basePath}reviewer/login/`,
  logout: `${basePath}reviewer/logout/`,
}
