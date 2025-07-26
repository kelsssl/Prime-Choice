import httpInstance from "@/utils/http";  // 引入HTTP请求实例
//默认导出不要加{}

//封装获取首页轮播图banner的API
export function getBannerAPI() {
  return httpInstance({
    url:'/home/banner'  // API的URL
  })
}
