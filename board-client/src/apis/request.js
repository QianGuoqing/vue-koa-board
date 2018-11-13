import axios from 'axios'
import { baseURL } from './urls'

export const sendMessageByPost = (url, data = {}) => {
  url = `${baseURL}${url}`
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}