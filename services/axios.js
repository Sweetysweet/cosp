import axios from 'axios'
import { AXIOS_BASE_URL } from '@/envconfig'
// import * as RootActionTypes from '@/store/action-types'
// const errors = [400]
const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(null, async error => {
  // if (error.response.status === 401) {
  //   if (process.browser) {
  //     await $nuxt.$store.dispatch(RootActionTypes.UPDATE_TOKENS)
  //   }
  //   // $nuxt.context.redirect('/23');
  // }
  // if (errors.includes(error.response.status)) $nuxt.context.context.redirect('23');
  return Promise.reject(error);
})
  

export default axiosInstance