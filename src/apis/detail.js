import request from '@/utils/http'

export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

//封装获取热榜商品模块
/**
 * @description: 获取热榜商品
 * @param {Number} type -1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
