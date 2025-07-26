<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeProduct from "./components/HomeProduct.vue";
</script>

<template>
  <div class="container">
    <!-- 1. 分类导航 -->
    <HomeCategory />
    <!-- 2. Banner轮播图 -->
    <HomeBanner />
  </div>

    <!-- 3. 新鲜好物 -->
    <HomeNew />
    <!-- 4. 人气推荐 -->
    <HomeHot />
    <!-- 5. 产品列表 -->
    <HomeProduct />
</template>
