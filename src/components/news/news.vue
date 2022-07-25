<template>
  <div class="news">
    <by-header class="header"></by-header>
    <div class="mt-72">
      <div class="prod-banner">
        <img src="../../assets/img/news/banner.png" alt="banner" />
      </div>
    </div>
    <div class="new-content">
      <div class="new-nav">
        <ul>
          <li>--</li>
          <li>企业新闻</li>
          <li>产品动态</li>
          <li>行业咨询</li>
          <li>--</li>
        </ul>
      </div>
      <div class="new-main">
        <div class="main-pic">
          <img src="../../assets/img/news/new 2.png" alt="">
        </div>
        <div class="main-con">
          <div class="title">标题</div>
          <div class="paragraph">段落</div>
        </div>
      </div>
      <br><br><br>
      <hr>
    </div>
  </div>
</template>

<script>
import ByHeader from "../../view/ByHeader.vue";
export default {
  name: 'news',
  components: { ByHeader },
}

</script>

<style scoped lang="less">
.mt-72 {
  margin-top: 72px;
  height: 354px;

  img {
    width: 100%;
    height: 100%;
  }
}

.new-content {
margin: 30px auto;
width: 1310px;
}

.new-nav {
  height: 100px;
}

.new-nav ul {
  float: left;
  margin-left: 376px;
}

.new-nav ul li {
  float: left;
  font-size: 24px;
  font-weight: 700;
  padding-left: 40px;
  line-height: 100px;
}

.new-nav ul li:hover {
  color: #1B5FC6;
}

.new-main {
  position: relative;
  width: 880px;
  margin-left: 100px;
  margin-top: 30px;

}

.main-pic {
  width: 300px;
  height: 198px;

  img {
    width: 100%;
    height: 100%;
  }
}

.main-con {
  position: absolute;
  top: 0;
  left: 300px;
  width: 700px;
  height: 170px;
}
.title{
  color: #000;
  font-weight: 500;
  font-size: 20px;
  margin-left: 30px;
}
.paragraph{
  color: #000;
  font-weight: 300;
  font-size: 18px;
  margin-left: 30px;
  margin-top: 10px;
}
</style>