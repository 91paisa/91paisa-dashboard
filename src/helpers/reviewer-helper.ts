import jwtDecoder from 'jwt-decode'
import { reviewerActionEnum } from '../api/logs-api'

export const getTokenFromLocalStorage = (): string | null =>
  localStorage.getItem('token')

enum accessLevelsEnum {
  admin = 1,
}
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
