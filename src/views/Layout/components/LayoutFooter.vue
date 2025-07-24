<template>
  <!-- 1. 最外层容器: 整个页脚区域 -->
  <footer class="app_footer">

    <!-- ==================== 上部：联系我们区域 ==================== -->
    <div class="contact">
      <div class="container">
      <!-- 使用 <dl>, <dt>, <dd> 列表来组织信息 -->
      <!-- dl = Definition List (定义列表) -->
      <!-- dt = Definition Term (定义术语/标题) -->
      <!-- dd = Definition Description (定义描述/内容) -->

       <!-- 第一组：客户服务 -->
        <dl>
          <dt>客户服务</dt>
          <div class="dd-wrapper">
          <dd><i class="iconfont icon-kefu"></i>在线客服</dd>
          <dd><i class="iconfont icon-question"></i>问题反馈</dd>
          </div>
        </dl>

        <!-- 第二组：关注我们 -->
        <dl>
          <dt>关注我们</dt>
           <div class="dd-wrapper">
          <dd><i class="iconfont icon-weixin"></i>公众号</dd>
          <dd><i class="iconfont icon-weibo"></i>微博</dd>
          </div>
        </dl>

        <!-- 第三组：下载APP -->
        <dl class="download-app">
          <dt>下载APP</dt>
          <div class="dd-wrapper">
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd><!-- 二维码图片 -->
          <dd class="download"><!--下载文字和按钮-->
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
          </div>
        </dl>

        <!-- 第四组：服务热线 -->
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">400-0000-000<small>周一至周日：8:00-18:00</small></dd>
        </dl>
      </div>
    </div>

     <!-- ==================== 下部：额外信息区域 ==================== -->
    <div class="extra">
      <div class="container">
        <!-- Slogan (口号) 区域 -->
        <div class="slogan">
          <a href="javascript:;"><i class="iconfont icon-footer01"></i><span>价格亲民</span></a>
          <a href="javascript:;"><i class="iconfont icon-footer02"></i><span>物流快捷</span></a>
          <a href="javascript:;"><i class="iconfont icon-footer03"></i><span>品质新鲜</span></a>
      </div>

    <!--版权信息区域-->
    <div class="copyright">
      <p>
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">售后服务</a>
        <a href="javascript:;">配送与验收</a>
        <a href="javascript:;">商务合作</a>
        <a href="javascript:;">搜索推荐</a>
        <a href="javascript:;">友情链接</a>
      </p>
      <p>CopyRight © 小兔鲜儿</p>
    </div>
  </div>
</div>
</footer>
</template>

<style lang="scss" scoped>
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 20px;

  .contact {
    background:#fff;

    .container {
      padding:60px 120px;
      display: flex;
      justify-content: space-between;
    }

    dl {
      height:190px;
      text-align: center;
      padding:0 20px;
      border-right:1px solid #f2f2f2;
      color:#999;//文字颜色
      width: 280px;

      display: flex;
      flex-direction: column;
      align-items: center;

      &:first-child {
        padding-left: 0;// 第一项不需要左内边距
      }
      &:last-child {
        border-right:none; // 最后一项不需要右边框
        padding-right: 0;
      }
      .download-app {
        width: 380px; // 下载APP区域宽度
        flex-shrink: 0;
      }
    }

    dt {
      line-height: 1;
      font-size:18px;
      margin-bottom: 36px;
    }

    .dd-wrapper {
    display: flex; // 让内部的 dd 水平排列
    align-items: center;
    }

    dd {
      margin:0 6px;
      //float: left;
      width: 92px;
      height: 92px;
      padding-top: 10px;
      border: 1px solid #ededed;

      .iconfont {
        font-size: 36px;
        margin-right: 5px;
        color: #666;
      }

      &:hover {
        .iconfont {
          color: $xtxColor; // 鼠标悬停时改变图标颜色
        }
      }

      &：last-child {
        margin-right: 0; // 最后一项不需要右边距
      }
    }
    .qrcode {
      width: 92px;
      height: 92px;
      padding:7px;
      border:1px solid #ededed;
    }

    .download {
      padding-top: 5px;
      font-size: 14px;
      width:auto;// 自动宽度
      height: auto;// 自动高度
      border: none;
      text-align: center;
      margin-left: 10px;

      span {
        display: block; // 每个span占一行
      }

      a {
        display: block;
        line-height: 1;
        padding:10px 25px;
        margin-top:5px;
        color:#fff;
        border-radius: 2px;
        background-color: $xtxColor;
        white-space: nowrap;
      }
    }

    .hotline {
      padding-top: 20px;
      font-size: 22px;
      color: #666;
      width:auto;
      height:auto;
      border:none;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }

  .extra {
    background-color: #333;
  }

  .slogan {
    height:178px;
    line-height: 58px;// 行高与高度一致
    padding:60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between; // 两端对齐

    a {
      height:58px;
      line-height: 58px;
      color: #fff;
      font-size: 28px;

      i {
        font-size: 50px;
        vertical-align: middle; // 图标垂直居中
        margin-right: 10px; // 图标和文字之间的间距
        font-weight: 100;// 图标字体粗细
      }

      span {
        vertical-align: middle; // 文字垂直居中
        text-shadow: 0 0 1px #333; // 文字阴影效果
      }
    }
  }

  .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      color:#999;
      line-height:1;
      padding:0 10px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none; // 最后一个链接不需要右边框
      }
    }
  }
}
</style>
