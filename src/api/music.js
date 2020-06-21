import request from '@/utils/request'
import { servers } from 'globalConfig'

// 搜索---开始
export function doSearch() {
  return request({
    url: `${servers.api}/search?keywords=海阔天空`,
    method: 'get'
  })
}

