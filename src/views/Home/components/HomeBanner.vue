<script setup>
import { getBannerAPI } from "@/apis/home.js";
import { ref,onMounted } from "vue";
const bannerList = ref([]);//ref响应式数据

// 获取轮播图数据
const getBanner = async () => {  //async和await处理异步操作
  const res = await getBannerAPI();
  console.log(res);
  bannerList.value = res.result; //将获取到的result数据赋值给bannerList
}

onMounted(() => getBanner()); //组件挂载时调用getBanner函数
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px"> <!--Element Plus 的 el-carousel 组件已经封装好轮播的默认行为-->
      <!-- <el-carousel
            height="500px"
            :autoplay="true"         是否自动轮播
            :interval="3000"         轮播间隔，单位：毫秒
            :initial-index="0"       初始显示的索引
            trigger="click"         指示器的触发方式 -->

<!--el-carousel-item 是 Element Plus 轮播组件的子组件，用于定义轮播图中的每一项内容 -->
       <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;//绝对定位
  left: 0;
  top: 0;
  z-index: 98;//在category的下一层

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
