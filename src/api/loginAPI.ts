import axios from 'axios'

const LOGIN_PATH = 'http://localhost/api/v1/reviewer/login/'

export const login = (email: string, password: string) => {
  const data = new FormData()
  data.append('email', email)
  data.append('password', password)
  return axios({
    data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    url: LOGIN_PATH,
  })
    .then(response => localStorage.setItem('token', response.data.data))
    .catch(err => {
      return false
    })
}
