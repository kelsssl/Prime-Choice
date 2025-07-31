<script setup>
import HomePanel from './HomePanel.vue'
import { getGoodsAPI } from '@/apis/home';
import { ref,onMounted } from "vue";
import GoodsItem from './GoodsItem.vue';

//获取数据列表
const goodsProduct = ref([]);

const getGoods = async () => {
    const res = await getGoodsAPI();
    goodsProduct.value = res.result;
};
onMounted(() => getGoods())
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-img-lazy="cate.picture" />
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <GoodsItem :goods="good" />
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;//让左侧 .cover 和右侧 .goods-list 横向并排

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute; //绝对定位，悬浮在图片之上
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);//垂直居中，translate3d 会开启硬件加速，比 translate 更流畅

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex; //横向排列
      flex-wrap: wrap;//允许换行

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {//处理最后一行的下边距
          margin-bottom: 0;// -n + 4: 选中从后往前数的第1、2、3、4个元素
        }

        &:nth-child(4n) {//处理每行最后一列的右边距
          margin-right: 0;
        }
      }
    }

    .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all .5s;//过渡效果

      &:hover {
        transform: translate3d(0, -3px, 0);// 悬浮时向上轻微移动，并添加阴影，产生“浮起来”的立体感
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

      img {
        width: 160px;
        height: 160px;
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
        height: 29px;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
      }
    }
  }
}
</style>
