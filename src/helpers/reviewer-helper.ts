import jwtDecoder from 'jwt-decode'
import { reviewerActionEnum } from '../api/logs-api'
import { accessLevelsEnum } from '../api/reviewer-api'

export const getTokenFromLocalStorage = (): string | null =>
  localStorage.getItem('token')

export const isAdmin = () => {
  const token = getTokenFromLocalStorage()
  if (token) {
    const decode: any = jwtDecoder(token)
    const accessLevel = decode.access_level
    return accessLevel === accessLevelsEnum.admin
  }
  return false
}

export const getGithubId = (reviewerId: string) => {
  return 5713737
}

export const getFilters = () => {
  return Object.keys(reviewerActionEnum)
    .filter(k => typeof reviewerActionEnum[k as any] === 'number')
    .map(k => ({
      key: k,
      value: reviewerActionEnum[k as any],
    }))
}
