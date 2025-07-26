<script setup>
import { useCategoryStore } from "@/stores/category.js";
const categoryStore = useCategoryStore();
</script>

<template>
  <!-- 1. 最外层容器 -->
  <div class="home-category">
    <!-- 2. 主菜单列表 (左侧的垂直导航) -->
    <ul class="menu">
      <li v-for="item in categoryStore.categorylist" :key="item">
        <!--主分类名称和副分类名称-->
        <RouterLink to="/">{{item.name}}</RouterLink>
        <RouterLink v-for="i in item.children.slice(0,2)" :key="i" to="/">{{i.name}}</RouterLink>
        <!-- 弹层layer位置 -->
        <!-- 这个弹层在HTML结构上是嵌套在每个 <li> 内部的。
        它默认是隐藏的，只有当鼠标悬停在父级 <li> 上时才会显示。
        -->
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
             <!-- 循环创建5个商品项 -->
            <li v-for="i in item.goods" :key="i">
              <RouterLink to="/">
                <img :src="i.picture" alt="" /> <!-- 商品图片 -->
                <div class="info"><!-- 商品信息区域 -->
                  <p class="name ellipsis-2">
                    {{i.name}}
                  </p>
                  <p class="desc ellipsis">{{i.desc}}</p>
                  <p class="price"><i>¥</i>{{i.price}}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>


<style scoped lang='scss'>
//1.整体容器样式
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8); //半透明黑色背景
  position: relative; // 父相子绝。为内部绝对定位的 .layer 提供定位参考系
  z-index: 99; // 提高堆叠的层级，确保这个容器在其他元素之上

  // 2. 左侧主菜单
  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;

      &:hover {
        background: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }

      // 3. 弹层 .layer 样式
      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;// 相对于 .home-category 定位
        left: 250px;
        top: 0;
        display: none; // 默认隐藏
        padding: 0 15px;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;

          small {
            font-size: 16px;
            color: #666;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;// 换行显示

          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;

            &:nth-child(3n) {//使用 nth-child 来处理最后一列的边距
              margin-right: 0; //每行的第三个元素去掉右边距
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              &:hover {
                background: #e3f9f4;
              }

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      // 关键样式  hover状态下的layer盒子变成block
      &:hover { //鼠标选停在li上时
        .layer {// 选择其直接子元素layer显示弹层
          display: block;
        }
      }
    }
  }
}
</style>
