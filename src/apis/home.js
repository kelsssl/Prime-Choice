import httpInstance from "@/utils/http";  // 引入HTTP请求实例
//默认导出不要加{}

//封装获取首页轮播图banner的API
export function getBannerAPI() {
  return httpInstance({
    url:'/home/banner'  // API的URL
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
    url:'/home/new'
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
    url:'/home/hot'
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
    url:'/home/goods'
  })
}
