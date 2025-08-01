import httpInstance from "@/utils/http";  // 引入HTTP请求实例
//默认导出不要加{}

//封装获取首页轮播图banner的API
export function getBannerAPI(params = {}) {
  //默认首页为1，商品详情页为2
  const { distributionSite = '1' } = params; // 如果没有传入参数，则默认为1
  return httpInstance({
    url: '/home/banner',  // API的URL
    params: {  // 请求参数
      distributionSite
    }
  })
}

//封装获取首页新鲜好物的API
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

//封装获取首页人气推荐的API
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

//封装获取所有商品模块
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
