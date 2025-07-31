<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeProduct from "./components/HomeProduct.vue";
// import HomePanel from "./components/HomePanel.vue";
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
    <!-- 6. 面板组件 -->
    <!-- <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
      <div>我是新鲜好物的插槽内容</div>
    </HomePanel>
      <HomePanel title="人气推荐" subtitle="人气爆棚 口碑超赞">
      <div>我是人气推荐的插槽内容</div>
    </HomePanel> -->
</template>
