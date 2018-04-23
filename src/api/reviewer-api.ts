import axios from 'axios'
import { ReviewerPath } from './constants-api'

export enum accessLevelsEnum {
  admin = 1,
  manager = 2,
}

export interface IReviewer {
  accessLevel: accessLevelsEnum
  email: string
  id: string
  image: string
  name: string
}

const formatReviewersResponse = (data: any) =>
  data
    .map((d: any) => ({
      accessLevel: d.access_level,
      email: d.email,
      id: d.reviewer_id,
      image: d.image_url,
      name: d.name,
    }))
    .reduce((result: any, item: IReviewer) => {
      result[item.id] = item
      return result
    }, {})

export const getAllReviewersAPI = () =>
  axios
    .get(ReviewerPath.all)
    .then(res => formatReviewersResponse(res.data.data))
    .catch(() => [])
