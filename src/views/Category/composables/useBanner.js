//封装Banner轮播图相关代码
import { ref, onMounted } from "vue";
import { getBannerAPI } from "@/apis/home.js";

export function useBanner() {
  //获取banner
  const bannerList = ref([]);//ref响应式数据
  const getBanner = async () => {  //async和await处理异步操作
    const res = await getBannerAPI({
      distributionSite: '2' // 传入参数2
    });
    console.log(res);
    bannerList.value = res.result; //将获取到的result数据赋值给bannerList
  }

  onMounted(() => getBanner()); //组件挂载时调用getBanner函数

  return {
    bannerList, //返回bannerList
    getBanner //返回getBanner函数
  }
}
