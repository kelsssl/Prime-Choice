<script setup>
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()
</script>

<template>
  <!-- 1. 最外层容器: 定义了整个 header 区域 -->
  <header class="app-header">
     <!-- 2. 内容居中容器: 经典的版心布局，让所有内容在页面中保持居中对齐 -->
    <div class="container">

      <!-- 3. Logo 区域 -->
      <h1 class="logo">
        <!--
        使用 <RouterLink> 实现无刷新跳转到首页。
        这是 Vue Router 的标准用法，比普通的 <a> 标签更好。
        内容“小兔鲜”是给 SEO 和屏幕阅读器看的，视觉上会被隐藏。
        -->
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>

      <!-- 4. 主导航栏区域 -->
      <ul class="app-header-nav">
        <!-- 首页导航项 -->
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home" v-for="item in categoryStore.categorylist" :key="item.id">
        <RouterLink active-class="active" :to="`/category/${item.id}`">{{item.name}}</RouterLink>
        </li>
      </ul>

      <!-- 5. 搜索框区域 -->
       <div class="search">
        <i class="iconfont icon-search"></i><!--搜索图标-->
        <input type="text" placeholder="搜一搜">
       </div>
      <!-- 6. 头部购物车区域 -->
        <!--
        <div class="cart">
        ...
        </div>
      -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
// 1. 顶层容器样式
.app-header {
  background: #fff; // 背景色

  // 2. 版心容器: 核心布局
  .container {
    display:flex; // 使用flex布局
    align-items: center; // 垂直居中对齐
  }

  // 3. Logo 区域: 图片替换文字
  .logo {
    width:200px;

    a {
      display: block; // 使链接成为块级元素
      height: 132px; // 设置高度
      width: 100%; // 宽度占满父容器
      //图片替换文字
      text-indent: -9999px; // 隐藏文字
      //将logo图片作为背景图
      background:url('@/assets/images/logo.png') no-repeat center 18px / contain;
      // center 18px: 背景图水平居中，垂直方向距离顶部18px
      // contain: 背景图尺寸缩放，保持宽高比完全容纳在容器内
    }
  }

  // 4. 主导航栏
  .app-header-nav {
    width: 820px;
    display:flex;
    padding-left: 40px;
    position: relative; // 相对定位，方便子元素绝对定位
    z-index: 998; // 防止被其他元素遮盖

    li {
      margin-right:40px; // 每个导航项之间的间距
      width: 38px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;//行高
        height: 32px;
        display: inline-block;

        &:hover {// 悬停时，改变文字颜色并添加下划线
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor; // 添加下划线
        }
    }

    // 激活状态样式:JS动态添加
    .active {
        color: $xtxColor; // 激活状态文字颜色
        border-bottom: 1px solid $xtxColor; // 激活状态下划线
      }
    }
  }

  // 5. 搜索框样式
  .search {
    width:170px;
    height: 32px;
    position: relative; // 相对定位
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px; // 行高与高度一致

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width:140px;
      padding-left: 5px;// 左内边距
      color: #666;
    }
  }

 // 6. 购物车
  .cart {
    width:50px;

    .curr {
      height:32px;
      line-height:32px;
      text-align: center;
      position: relative; // 相对定位
      display:block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
