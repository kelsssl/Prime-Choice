import request from "@/utils/http";

export function getCategoryAPI(id) {//接受id参数（在分类页面组件中，通过 `useRoute().params.id` 获取到的分类ID），给params的id属性赋值。
  return request({
    url: 'category',
    params: {
      id
    }
  })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',// 传递的参数是data，使用POST方法
    data
  })
}
