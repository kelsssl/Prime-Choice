<script setup>
  import HomePanel from "./HomePanel.vue";
  import {getHotAPI} from "@/apis/home.js";
  import { ref, onMounted } from "vue";

  //获取数据
  const newList = ref([]); //定义响应式数据

  const getNewList = async () => {
    const res = await getHotAPI();
    newList.value = res.result; //将获取到的result数据赋值给newList
  };

  onMounted(() => {
    getNewList(); //组件挂载时调用getNewList函数
  });

</script>

<template>
  <HomePanel title="人气推荐" subtitle="人气爆棚 口碑超赞">
    <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img v-img-lazy="item.picture" alt="" />
        <p class="title">{{ item.title }}</p>
        <p class="alt">{{ item.alt }}</p>
      </RouterLink>
    </li>
  </ul>
  </HomePanel>
  <!-- 下面是插槽主体内容模版
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  -->
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .alt {
      font-size: 18px;
      color: #999;
      text-align: center;
    }
  }
}
</style>
