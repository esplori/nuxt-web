import {get, post} from '../../plugins/axios'
import baseUrl from '../../plugins/baseUrl'

export async function getListApi (data) {
  const url = baseUrl + '/nav/getList'
  const options = {}
  return post(url, data, options)
}