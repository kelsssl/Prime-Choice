import request from "@/utils/http";

export function  getCategoryAPI(id) {//接受id参数（在分类页面组件中，通过 `useRoute().params.id` 获取到的分类ID），给params的id属性赋值。
  return request({
    url: 'category',
    params:{
      id
    }
})
}
