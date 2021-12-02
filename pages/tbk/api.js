import {get, post} from '../../plugins/axios'
import baseUrl from '../../plugins/baseUrl'

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