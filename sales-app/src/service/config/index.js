import axios from 'axios'

import { getToken } from './TokenHelper'

const url =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV

const createService = (baseUrl = '') =>
  axios.create({
    baseURL: `${url}/${baseUrl}`,
    timeout: 20000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
  })

export { createService }
