import { post } from '@/plugins/axios'
import baseUrl from '@/plugins/baseUrl'

export async function getToppicListApi(data) {
  let url = baseUrl + '/admin/getTopicDetailList'
  const options = {}
  return post(url, data, options)
}