const basePath = () => {
  const env = process.env
  if (env.NODE_ENV === 'development') {
    return 'https://beta.91paisa.com/api/v1/'
    // return 'http://192.168.0.107:8080/api/v1/'
  } else if (env.REACT_APP_BASE_URL === 'beta') {
    return 'https://beta.91paisa.com/api/v1/'
  } else if (env.REACT_APP_BASE_URL === 'prod') {
    return 'https://stable.91paisa.com/api/v1/'
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
  updateAction: `${basePath()}transaction/action_update/`,
}

export const AuthPath = {
  login: `${basePath()}reviewer/login/`,
  logout: `${basePath()}reviewer/logout/`,
}

export const LogsPath = {
  ivr: `${basePath()}logs/ivr/`,
  reviewer: `${basePath()}logs/reviewer/`,
}

export const ReviewerPath = {
  all: `${basePath()}reviewer/all`,
}

export const StatisticsPath = {
  beneficiary: `${basePath()}statistics/beneficiary/`,
  customer: `${basePath()}statistics/customer/`,
  splitTransaction: `${basePath()}statistics/eko_transaction/`,
  transaction: `${basePath()}statistics/transaction/`,
}
