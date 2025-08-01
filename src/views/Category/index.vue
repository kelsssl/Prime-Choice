<script setup>
import GoodsItem from '@/views/Home/components/GoodsItem.vue';
//引入Banner轮播图的组合式函数
import { useBanner } from "./composables/useBanner";
const { bannerList } = useBanner(); // 使用自定义组合式函数获取轮播图数据
//引入分类数据的组合式函数
import { useCategory } from "./composables/useCategory";
const { categoryData } = useCategory(); // 使用自定义组合式函数获取分类数据

</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑组件，用于展示用户当前所在的位置层级。 -->
      <div class="bread-container">
        <el-breadcrumb separator=">"><!-- separator 定义分隔符 -->
          <!-- 第一级：固定链接到首页 -->
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categoryData.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

    <!--轮播图 -->
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

      <!-- 二级分类列表和商品展示 -->
    <div class="sub-list">
    <h3>全部分类</h3>
    <ul>
      <li v-for="i in categoryData.children" :key="i.id">
        <RouterLink to="/">
          <img :src="i.picture" />
          <p>{{ i.name }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
  <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
    <div class="head">
      <h3>- {{ item.name }}-</h3>
    </div>
    <div class="body">
      <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
    </div>
  </div>

    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;// 设置字体粗细
    text-align: center;
    line-height: 100px;// 设置行高，使标题垂直居中
  }
  // 为未来的“二级分类列表” (.sub-list) 预定义了样式
  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

.home-banner {
  width: 1240px;
  height: 500px;
  margin:0 auto; // 居中显示

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
