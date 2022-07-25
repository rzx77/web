<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'app',
  methods: {
      bodyScale() {
        var devicewidth = document.documentElement.clientWidth; //获取当前分辨率下的可视区域宽度
        var scale = devicewidth / 1920; // 除以设计稿的尺寸
        document.body.style.zoom = scale; // 放大缩小相应倍数
      }
    },
    created() {
      this.bodyScale()
    },
}
</script>
