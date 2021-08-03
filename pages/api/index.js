import {get, post} from '../../plugins/axios'
import baseUrl from '../../plugins/baseUrl'

export async function getListApi (params, data) {
  if (!params.page) {
    params.page = 1
  }
  let url = baseUrl + '/pages/getList/' + params.page
  const options = {}
  return get(url, data, options)
}
export async function getListByCateApi (params, data) {
  if (!params.page) {
    params.page = 1
  }
  let url = baseUrl + '/pages/getList/cate/' + params.cate + '/page/' + params.page || 1
  const options = {}
  return get(url, data, options)
}
export async function getListByTagsApi (params, data) {
  if (!params.page) {
    params.page = 1
  }
  let url = baseUrl + '/pages/getList/tags/' + encodeURI(params.cate) + '/page/' + params.page || 1
  const options = {}
  return get(url, data, options)
}
export async function getRecomListApi (data) {
  const url = baseUrl + '/pages/getRecomList'
  const options = {}
  return post(url, data, options)
}
export async function getRecomListApi2 (data) {
  const url = '/bootService/pages/getRecomList'
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

export async function getCateApi (id, data) {
  const url = baseUrl +  '/pages/getCate'
  const options = {}
  return get(url, data, options)
}