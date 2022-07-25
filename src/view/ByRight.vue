<template>
  <div class="byright">
      <!-- 一级菜单上层详情页 -->
        <div class="first-top" v-if="res.id>0">
          <div class="nav" >
            <div class="nav-picture">
              <img src="../assets/img/prod/triangle.svg" alt="" />
            </div>
            <div class="nav-name"  >
              {{ res.name }}
            </div>
          </div>
          <div class="detail">
            <div class="content">
              <div class="description">
                {{ res.description }}
              </div>
              <div class="case">查看案例</div>
            </div>
            <div class="picture">
              <img :src="res.products[0].primaryPicture" alt="">
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'ByRight',
    props:['res'],
}
</script>

<style scoped>
.first-top .nav {
  height: 30px;
}
.nav-picture {
  width: 25px;
  height: 25px;
}
.nav-picture img {
  width: 100%;
  height: 100%;
}
.nav-name {
  margin-left: 30px;
  margin-top: -24px;
  color: rgb(27, 95, 198);
  font-size: 20px;
}
.detail {
  width: 1050px;
  height: 300px;
  /* background-color: #4521; */
}
.content {
  float: left;
  height: 200px;
  width: 830px;
  /* background-color: skyblue; */
  margin-top: 30px;
}
.case {
  width: 160px;
  height: 50px;
  border: 0.5px solid rgb(68, 68, 68);
  margin-top: 30px;
  color: rgb(27, 95, 198);
  text-align: center;
  line-height: 48px;
  font-size: 18px;
}
.picture {
  float: left;
  /* margin-left: 55px; */
  margin-top: 30px;
  height: 212px;
  width: 212px;
}
.picture img {
  width: 130% ;
  height: 100%;
}
.description {
  width: 830px;
  /* background-color: pink; */
  font-size: 16px;
  color: rgb(68, 68, 68);
}

</style>