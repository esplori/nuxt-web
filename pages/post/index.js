import { get, post } from '@/plugins/axios'
import baseUrl from '@/plugins/baseUrl'

// 接口前不加baseUrl的为浏览器渲染

export async function getListApi(params, data) {
  if (!params.page) {
    params.page = 1
  }
  let url = baseUrl + '/pages/getList/' + params.page
  const options = {}
  return get(url, data, options)
}
export async function getListByCateApi(params, data) {
  if (!params.page) {
    params.page = 1
  }
  let url = baseUrl + '/pages/getList/cate/' + params.cate + '/page/' + params.page || 1
  const options = {}
  return get(url, data, options)
}
export async function getListByCateApi2(params, data) {
  if (!params.page) {
    params.page = 1
  }
  let url = '/bootService/pages/getList/cate/' + params.cate + '/page/' + params.page || 1
  const options = {}
  return get(url, data, options)
}
export async function getListByTagsApi(params, data) {
  if (!params.page) {
    params.page = 1
  }
  let url = baseUrl + '/pages/getList/tags/' + encodeURI(params.cate) + '/page/' + params.page || 1
  const options = {}
  return get(url, data, options)
}
export async function getRecomListApi(data) {
  const url = baseUrl + '/pages/getRecomList/' + data.type
  const options = {}
  return post(url, data, options)
}
export async function getRecomListApi2(data) {
  // const url = baseUrl + '/pages/getRecomList/' + data.type
  const url = '/bootService/pages/getRecomList/' + data.type
  const options = {}
  return post(url, data, options)
}
export async function getDetailApi(id, data) {
  const url = baseUrl + '/pages/getDetail/' + id
  const options = {}
  return get(url, data, options)
}
export async function getDetailApi2(id, data) {
  const url = '/pages/getDetail/' + id
  const options = {}
  return get(url, data, options)
}

export async function getCateApi(id, data) {
  const url = baseUrl + '/pages/getCate'
  const options = {}
  return get(url, data, options)
}
export async function getCateApi2(id, data) {
  const url = '/bootService/pages/getCate'
  const options = {}
  return get(url, data, options)
}

export async function getTagsApi(id, data) {
  const url = baseUrl + '/pages/getTags'
  const options = {}
  return get(url, data, options)
}
export async function getTagsApi2(id, data) {
  const url = '/bootService/pages/getTags'
  const options = {}
  return get(url, data, options)
}
export async function insertCommentApi(data) {
  // const url =  baseUrl + '/admin/getInsertComment'
  const url = '/bootService/admin/getInsertComment'
  const options = {}
  return post(url, data, options)
}

export async function getCommentApi(data) {
  const url = '/bootService/pages/getComment'
  // const url =  baseUrl + '/pages/getComment'
  const options = {}
  return get(url, data, options)
}
export async function getSiteInfoApi(data) {
  // const url = baseUrl + '/admin/getSiteInfo/'
  const url = '/bootService/admin/getSiteInfo'
  const options = {}
  return post(url, data, options)
}