import axios from 'axios'
export const setHeadersApi = () => {
  const token = localStorage.getItem('token')
  axios.defaults.headers.post.Accept = 'application/json'
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'
  if (token) {
    axios.defaults.headers.post.token = token
  }
}
