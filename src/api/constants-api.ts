const basePath = () => {
  const env = process.env
  // tslint:disable-next-line
  console.log('env', env, process.env)
  if (env.NODE_ENV === 'development') {
    return 'http://localhost:8080/api/v1/'
  }
  if (env.REACT_APP_BASE_URL === 'beta') {
    return 'https://beta.91paisa.com/api/v1/'
  }
  if (env.REACT_APP_BASE_URL === 'prod') {
    return 'https://91paisa.com/api/v1/'
  }
  return
}

export const CustomerPath = {
  all: `${basePath()}customer/all/`,
  create: `${basePath()}customer/create/`,
  detail: `${basePath()}customer/get/`,
  update: `${basePath()}customer/update/`,
  verify: `${basePath()}customer/verify/`,
}

export const TransactionPath = {
  all: `${basePath()}transaction/all/`,
}

export const AuthPath = {
  login: `${basePath()}reviewer/login/`,
  logout: `${basePath()}reviewer/logout/`,
}
