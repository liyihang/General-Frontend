import axios from 'axios'
import md5 from 'md5'
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})
// 9A64CD26AF2337E9
// EE664243160455AB
// 642B590880942112
// A9A6789674E3433B

service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  }
  return Promise.reject(message)
})
service.interceptors.request.use((config) => {
  const { icode, time } = getTestICode()
  config.headers.icode = icode
  config.headers.codeType = time
  return config
})
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
export default service