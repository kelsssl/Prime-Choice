import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout.js';

export const useCategoryStore = defineStore('category', () => {
  //导航列表的数据管理
  //state导航列表数据
  const categorylist = ref([]);

  //action 获取导航数据的方法
  const getCategory = async () =>{  //使用 async/await 处理异步请求
  const res = await getCategoryAPI()
  categorylist.value = res.result;
  }

  return {
    categorylist,
    getCategory
  }

})
