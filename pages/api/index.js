import {get, post} from '../../plugins/axios'
import baseUrl from '../../plugins/baseUrl'

export async function getListApi (params, data) {
  if (!params.page) {
    params.page = 1
  }
  // const url = baseUrl + '/pages/getList'
  let url = baseUrl + '/pages/getList/' + params.page
  console.log('url', url)
  const options = {}
  return get(url, data, options)
}
export async function getRecomListApi (data) {
  const url = baseUrl + '/pages/getRecomList'
  const options = {}
  return post(url, data, options)
}
export async function getDetailApi (id, data) {
  const url = baseUrl +  '/pages/getDetail/' + id
  const options = {}
  return get(url, data, options)
}
export async function getDetailApi2 (id, data) {
  const url = '/pages/getDetail/' + id
  const options = {}
  return get(url, data, options)
}
export async function getShopListApi (params, data) {
  console.log('page==', params.page)
  if (!params.page) {
    params.page = 1
  }
  let url = baseUrl + '/tbk/getList/' + params.page
  const options = {}
  return get(url, data, options)
}
export async function getTbkDetailApi (id, data) {
  const url = baseUrl +  '/tbk/getDetail/' + id
  const options = {}
  return get(url, data, options)
}