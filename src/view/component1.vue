<template>
  <div class="index">
     <el-row >
      <el-col>
      <el-card class="box-card"  v-for="list in firstDetail" :key="list.id">
        <div class="box-pic">
            <img :src="list.primaryPicture" alt="">
        </div>
        <div class="box-text">
            <p>{{list.title}}</p>
            <p class="overview">{{list.feature}}</p>
            <div class="purchase">
              <a href="https://shop536703610.taobao.com">立即购买</a>
            </div>
        </div>
      </el-card>
      </el-col>
     </el-row>
  </div>
</template>

<script>
export default {
    name:'component1',
    props:['firstDetail'],
  data() {
    return {
      id:''
    }
  },
}
</script>

<style scoped>
.one {
  font-size: 50px;
}
.box-card {
  width: 460px;
  height: 164px;
}
 .box-pic {
  float: left;
  width: 180px;
  height: 130px;
  margin-top: 12px;
}
.box-text {
  float: right;
  width: 200px;
  height: 120px;
  font-size: 14px;
  font-weight: 700;
}
.overview {
  font-weight: 400;
  text-align: center;
}

.box-pic img {
  width: 155%;
  height: 126%;
  margin-top: -29px;
  margin-left: -39px
}


.purchase {
  width: 70px;
  height: 23px;
  background-color: black;
  margin-left: 67px;
  margin-top: 20px;
}
.purchase a {
  color: white;
  font-weight: 400;
  font-size: 13px;
  padding-left: 9px;
}
.el-card.box-card.is-always-shadow {
    float: left;
    margin-right: 20px;
    margin-top: 20px;
} 

</style>