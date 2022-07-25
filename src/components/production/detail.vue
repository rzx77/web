<template>
  <div class="detail">
    <by-header class="header"></by-header>
    <div class="mt-72">
      <div class="prod-banner">
        <img src="../../assets/img/prodbanner.png" alt="banner" />
      </div>
    </div>
    <!-- 导航栏 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="left">
      <div class="aside">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>产品</el-breadcrumb-item>
        <el-breadcrumb-item>DTU模块</el-breadcrumb-item>
        <el-breadcrumb-item>CAT1模块</el-breadcrumb-item>
      </div>
      <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
          切换产品<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu>
          
        </el-dropdown-menu>
      </el-dropdown>
      <el-input placeholder="请输入搜索关键字">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-breadcrumb>
    <!-- 商品详情取 -->
    <div class="picture">
      <!-- {{getList}} -->
      <div class="picture-left"
        style="width: 500px; height: 600px">
        <div class="border-top">
          <img :src="imgUrl" style="width: 100%; height: 100%" />
        </div>
      <div class="border-bottom">
        <ul v-for="item in imgurl" :key="item.index" >
          <li class="bd" @click="geturl(item)">
            <img :src="item"/>
          </li>
        </ul>
      </div>
      </div>
      <div class="picture-right">
        <div class="right-name">
          <!-- <p>{{ getList.data.name }}</p> -->
          <p>{{ getList.name }}</p>
          <div class="Characteristics">{{ getList.feature }}</div>
          <hr />
        </div>
        <div class="Introduction">
          {{ getList.description }}
        </div>
        <div class="right-input">
          <div><a href="">在线咨询</a></div>
          <div><a href="https://shop536703610.taobao.com">在线购买</a></div>
          <div><router-link to="/apply">样品申请</router-link></div>
        </div>
      </div>
    </div>
    <div class="de_down">
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="概述" name="first">概述</el-tab-pane>
    <el-tab-pane label="规格参数" name="second">规格参数</el-tab-pane>
    <el-tab-pane label="资料下载" name="third">资料下载</el-tab-pane>
    <el-tab-pane label="技术支持" name="fourth">技术支持</el-tab-pane>
  </el-tabs>
    </div>
    <div class="o"></div>
  </div>
</template>

<script>
import ByHeader from "../../view/ByHeader.vue";
export default {
  name: "detail",
  components: { ByHeader },
  data() {
    return {
      id: null,
      // getList: {
      //   data:{}
      // },
      getList:'',
      imgUrl:'',
      imgurl:'',
      activeName: 'first'
    };
  },
  methods: {
     geturl(item){
      this.imgUrl=item
      // console.log(item);
    },
      handleClick(tab, event) {
        // console.log(tab, event);
      }
  },
  mounted(){
    this.$bus.$on('hello',(data)=>{
      // console.log(data);
      this.getList = data.data;
      console.log(this.getList);
      // console.log(this.getList.products[0].primaryPicture);
      this.imgUrl=this.getList.products[0].primaryPicture
      this.imgurl=this.getList.products[0].secondaryPictures
    })
  }
};
</script>

<style  lang="less" scoped>
.mt-72 {
  margin-top: 72px;
}
.prod-banner {
  width: 100%;
  height: auto;
  max-width: 1920px;
  img {
    width: 100%;
    vertical-align: middle;
    height: auto;
    border: none;
  }
}
.el-breadcrumb {
  background-color: rgb(242, 242, 242);
  line-height: 50px;
  text-align: center;
}
.aside {
  margin-left: 300px;
}

.el-dropdown-link {
  cursor: pointer;
  color: rgb(68, 68, 68);
}
.el-icon-arrow-down {
  font-size: 12px;
}
.dropdown {
  float: left;
  margin-left: 600px;
}
.el-input {
  width: 208px;
}
.el-icon-search {
  color: red;
}
.picture {
  margin-left: 290px;
  margin-top: 45px;
  height: 550px;
}
.picture-left {
  float: left;
  width: 600px;
  margin-left: 40px;
}
.border-top {
  width: 560px;
  height: 400px;
  border: 1px solid rgb(217, 217, 217);
}
.border-bottom {
  width: 1000px;
}
.border-bottom ul {
  float: left;
  width: 140px;
 
}
.border-bottom ul li{
  float: left;
   border: 1px solid rgb(217, 217, 217);
  margin-left: 10px;
  margin-top: 20px;
  height: 122px;
}
.border-bottom ul li img{
  width: 100%;
  height: 100%;
}
.picture-right {
  margin-left: 130px;
  float: left;
  width: 590px;
}
.right-name {
  height: 200px;
}
.right-name p {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  line-height: 200px;
}
.Characteristics {
  margin-top: -75px;
  margin-left: 140px;
  color: rgb(27, 95, 198);
  font-size: 18px;
}
.Introduction {
  color: rgb(68, 68, 68);
}
.right-input div {
  display: inline-block;
  width: 130px;
  height: 40px;
  background: rgb(242, 242, 242);
  margin-top: 56px;
  margin-left: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: rgb(68, 68, 68);
}
.right-input div:hover {
  background-color: rgb(27, 95, 198);
  a {
    color: rgb(255, 255, 255);
  }
}
.el-tabs {
  margin-left: 93px;
  height: 41px;
  background-color: rgb(242, 242, 242);
  color: rgb(68, 68, 68);
}
p {
  margin-top: -30px;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  font-weight: 400;
}
.de_down {
  height: 50px;
  background-color: rgb(242, 242, 242);
  margin-top: 50px;
}
.el-tabs {
  margin-left: 330px;
}
.o{
  height: 1000px;
  
}
</style>

<style>
.el-tabs__active-bar {
  background-color: transparent !important;
}
/*去掉tabs底部的下划线*/
.el-tabs__nav-wrap::after {
  position: static !important;
}
.el-tabs__item{
  font-size: 16px;
  line-height: 50px;
  color: rgb(68, 68, 68);
}
.el-tabs__item:hover{
  color: rgb(27, 95, 198);
}
.el-tabs__item.is-active {
  color: rgb(27, 95, 198);
}
</style>