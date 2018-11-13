import axios from 'axios'
import { baseURL, GET_MESSAGES_URL } from './urls'

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

export const getMessagesByGet = () => {
  const url = `${baseURL}${GET_MESSAGES_URL}`
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}