import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/reviewer-helper'

export const setHeadersApi = () => {
  const token = getTokenFromLocalStorage()
  axios.defaults.headers.post.Accept = 'application/json'
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'
  if (token) {
    axios.defaults.headers.post.token = token
    axios.defaults.headers.get.token = token
  }
}
