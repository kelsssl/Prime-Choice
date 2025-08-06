<script setup>
import { ref , watch , computed } from "vue";
import { useMouseInElement } from "@vueuse/core";

//props适配图片列表
//本组件是detail的子组件，要从父组件里接收数据imagelist的props
const props = defineProps({
  imageList:{
    type : Array,
    default:() =>[] //工厂函数，没有接收到自动调用，创造新的空数组
  }
})

// // 图片列表
// const imageList = [
//   "https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png",
//   "https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg",
//   "https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg",
//   "https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg",
//   "https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg"
// ]

//1.小图切换大图显示
const activeIndex = ref(0)

const enterhandler = (i) => {
  activeIndex.value = i
}

//创建一个计算属性来引用 props.imageList
// 这样做可以让模板代码更简洁，并且当 props 变化时能保证响应性
const imageList = computed(() => props.imageList)

//2.获取鼠标相对坐标位置
const target = ref(null) //定义空的响应式变量
const { elementX , elementY , isOutside } = useMouseInElement(target)

//3.控制滑块跟随鼠标移动（监听elementX/Y变化，一旦变化重新设置 left/top）
const left = ref(0)
const top = ref(0)

const positionX = ref(0)
const positionY = ref(0)

watch([elementX,elementY], ()=>{
  // 如果鼠标在盒子外面，就不进行任何计算
  if (isOutside.value) return

  // 1. 先计算出理想的 left 值
  let newLeft = elementX.value - 100;

  // 2. 然后用一个完整的 if-else if 结构来约束它
  if (newLeft < 0) {
    newLeft = 0; // 如果小于0，就钉在0
  } else if (newLeft > 200) {
    newLeft = 200; // 如果大于200，就钉在200
  }
  // 在中间区域时，newLeft 的值自然就是 elementX.value - 100，不需要 else

  // 3. 对 top 值做同样的处理
  let newTop = elementY.value - 100;
  if (newTop < 0) {
    newTop = 0;
  } else if (newTop > 200) {
    newTop = 200;
  }

  // 4. 最后，把计算好的、被约束过的值，赋给响应式变量
  left.value = newLeft,
  top.value =  newTop

  // 控制大图的显示
  positionX.value = -left.value * 2
  positionY.value = -top.value * 2
})

</script>


<template>
  <div class="goods-image">
    <!-- 左侧大图-->
     <!-- ref:模版引用，给div的标记，会匹配到script里的ref变量target -->
     <!-- div的内容就作为 target.value -->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 蒙层小滑块：当鼠标在区域内显示 -->
      <div class="layer" v-show="!isOutside" :style="{ left: `${left}px`, top: `${top}px` }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <!-- 实现鼠标进入区域后小图的边框固定样式active:class动态绑定 -->
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="enterhandler(i)" :class="{ active: i === activeIndex }">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imageList[activeIndex]})`,
        backgroundPositionX: `${positionX}px`,
        backgroundPositionY: `${positionY}px`,
      },
    ]" v-show="!isOutside"></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative; //.large的绝对定位参考系
  display: flex; //.middle和.small横向并排

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;  //绝对定位脱离文本流，悬浮在页面上
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500; //位于最上层
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
