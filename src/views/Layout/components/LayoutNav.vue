<script setup>
import { useRouter } from "vue-router";
const router=useRouter()
import { useUserStore } from "@/stores/user";
const userStore = useUserStore()

const confirm = () =>{
  //退出登录业务逻辑实现
  //1.清除用户信息，触发action
  userStore.clearUserInfo()
  //2.跳转到登录页面
  router.push('/login')
}
</script>

<template>
  <!-- 最外层：导航栏容器 -->
  <nav class="app-topnav">
     <!-- 内容居中容器 -->
    <div class="container">
      <!-- 导航项列表 -->
      <ul>
        <!-- 多模板渲染，区分登录状态和非登录状态 -->
        <!-- 根据有无token：登录时显示第一块，非登录显示第二块 -->
        <!--条件渲染-->
        <template v-if="userStore.userInfo.token">
          <!-- 如果条件为真（已登录），显示以下内容 -->

            <!-- 1. 用户名显示 -->
            <li>
              <a href="javascript:;">
                <!-- href="javascript:;" 防止点击链接后页面刷新 -->
                <i class="iconfont icon-user"></i><!--用户图标-->
                {{userStore.userInfo.account}}<!--用户名-->
              </a>
            </li>

            <!-- 2.退出登录功能 -->
            <li>
              <!--
              使用了 Element Plus 的气泡确认框组件 <el-popconfirm>
              这是一个复合组件，它本身不可见，需要一个“触发器”。
              -->
              <!-- @confirm是v-on:confirm 的语法糖，监听非原生DOM事件 -->
              <!--点击 <el-popconfirm>内部的“确认”按钮时，组件的逻辑会执行 this.$emit('confirm') -->
              <!-- 也就是点击确认按钮（子组件），父组件（整个区域）会调用confirm方法 -->
              <el-popconfirm @confirm="confirm"
                title="确认退出吗？"
                conform-button-text="确认"
                cancel-button-text="取消">
                <!--
                这里使用了具名插槽(Named Slot) #reference
                放在这个插槽里的内容，就是点击后会弹出确认框的“触发器”。
                -->
                <template #reference>
                  <a href="javascript:;">
                    退出登录<!--登出文字-->
                  </a>
                </template>
              </el-popconfirm>
            </li>

            <!-- 3. 我的订单 -->
             <li><RouterLink to="/member/order">我的订单</RouterLink></li>

            <!-- 4. 会员中心 -->
             <li> <RouterLink to="/member">会员中心</RouterLink></li>
        </template>

        <!-- v-else 分支 -->
         <template v-else>
          <!-- 如果 v-if 的条件为假（未登录），显示以下内容 -->
          <!--1.登录提示-->
          <li><a href="javascript:;" @click="router.push('/login')">请先登录</a></li>

          <!--2.帮助中心-->
          <li><a href="javascript:;">帮助中心</a></li>

          <!--3.关于我们-->
          <li><a href="javascript:;">关于我们</a></li>
         </template>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
// 顶层导航栏容器样式
.app-topnav {
  background: #333; // 背景色

  // 使用SCSS嵌套语法，ul的样式写在.app-topnav内部
  ul {
    display: flex; // 使用flex布局
    height:53px; // 固定高度
    justify-content: flex-end; // 沿主轴（横向）向末端对齐，即右对齐
    align-items: center; // 沿交叉轴（纵向）居中对齐

    // 列表项 li 的样式
    li {
      //兄弟选择器~,除了第一个li，其他所有的li都会应用这个样式
      & + li {
        position: relative; // 添加相对定位
        &::before {  // 使用伪元素创建竖线
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 16px;  // 设置竖线高度
          width: 1px;    // 设置竖线宽度
          background: #666;  // 竖线颜色
        }
      }
       // 列表项内部的 a 链接样式
      a {
        padding: 0 15px; // 左右内边距
        color: #cdcdcd; // 链接文字颜色为浅灰色
        line-height: 1px; // 行高为1，确保垂直居中
        display: inline-block; // 使链接成为块级元素，便于设置padding

        // a 链接内部的 i 图标样式
        i {
          font-size: 14px; // 图标大小
          margin-right: 2px; // 图标右外边距
        }

        // 鼠标悬停在 a 链接上时的伪类样式
        &:hover {
          color: $xtxColor; // 文字颜色变为一个SCSS变量
        }
      }
    }
  }
}
</style>
