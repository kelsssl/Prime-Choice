//封装分类数据业务相关代码
import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  //获取分类数据
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {

    // 使用路由参数获取分类ID
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  }
  onMounted(() => getCategory())

  //目标：路由参数变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // 当路由参数变化时，重新获取分类数据
    // to.params.id 是新的路由参数
    getCategory(to.params.id);
  });

  return {
    categoryData, //返回分类数据
    getCategory //返回获取分类数据的函数
  }
}
