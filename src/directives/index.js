//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
  //懒加载指令逻辑
  //全局注册一个自定义指令img-lazy
  //第二个参数是一个对象，包含了指令的生命周期钩子函数
    app.directive('img-lazy',{
      mounted(el,binding) {
      //el：指令绑定的DOM元素对象：<img>标签
      //binding：binding.value 获取指令的值 图片url
      console.log(el, binding.value)
      const { stop } = useIntersectionObserver( //组合式函数库VueUse
        el,
        ([{ isIntersecting }]) => {
          console.log(isIntersecting)
          if (isIntersecting) {
          // 进入视口区域
            el.src = binding.value //将图片的src属性设置为指令绑定的值
            stop()
          }
        },
      )
      }
    })
  }
}
