import axios from 'axios'

const loginPath = 'http://localhost:8080/api/v1/reviewer/login/'

export const loginAPI = (
  email: string,
  password: string,
): Promise<string | undefined> => {
  const data = new FormData()
  data.append('email', email)
  data.append('password', password)
  return axios
    .post(loginPath, data)
    .then(res => res.data.data)
    .catch(() => undefined)
}
