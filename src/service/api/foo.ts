import { request } from '../http'

/* get方法测试 */
export function fetchGet(params?: any) {
  return request.Get('/getAPI', { params })
}

/* post方法测试 */
export function fetchPost(data: any) {
  return request.Post('/postAPI', data)
}
/* formPost方法测试 */
export function fetchFormPost(data: any) {
  const methodInstance = request.Post('/postFormAPI', data)
  methodInstance.meta = {
    isFormPost: true,
  }
  return methodInstance
}

/* 服务器错误 */
export function fetchServerError(params?: any) {
  return request.Get('/serverError', { params })
}
