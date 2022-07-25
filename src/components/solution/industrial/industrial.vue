<template>
<div class="industrial">
      <el-card class="box-card">
        <div class="text item" style="width:423px;height:360px;margin-left: -20px;margin-top: -20px;">
          <div class="pic">
            <img src="../../../assets/img/solve/industrial/one.png" alt="">
          </div>
          <div class="main-con">
            <div class="con-top">智慧防疫 | NB-IoT智能门磁重磅来袭</div>
            <div class="con-mid">NB DTU</div>
            <div class="con-bom">
                <router-link to="/door">查看详情>>></router-link>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item" style="width:423px;height:360px;margin-left: -20px;margin-top: -20px;">
          <div class="pic">
            <img src="../../../assets/img/solve/industrial/two.png" alt="">
          </div>
          <div class="main-con">
            <div class="con-top">智能售货柜云端监控解决方案</div>
            <div class="con-mid">DTU</div>
            <div class="con-bom">
            <router-link to="/sale">查看详情>>></router-link>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item" style="width:423px;height:360px;margin-left: -20px;margin-top: -20px;">
          <div class="pic">
            <img src="../../../assets/img/solve/industrial/three.png" alt="">
          </div>
          <div class="main-con">
            <div class="con-top">叉车AGV智能联网解决方案</div>
            <div class="con-mid">工业路由器</div>
            <div class="con-bom">
                <router-link to="/car">查看详情>>></router-link>
            </div>
          </div>
        </div>
      </el-card>
</div>
</template>

<script>
export default{
    methods:{
       
    }
}
</script>

<style scoped>
.el-card {
  float: left;
  width: 425px;
  height: 500px;
  margin-left: 15px;
}
.pic img{
    width: 100%;
    height: 100%;
}
.main-con {
    margin-top: 20px;
    margin-left: 25px;
}
.con-top {
    font-weight: 700;
    font-size: 20px;
}
.con-mid{
   width: 92px;
   height: 24px;
   background: rgb(242, 242, 242);
   border-radius: 5px;
   border: 0.5px solid rgb(0, 0, 0);
   margin-top: 9px;
   text-align: center;
   line-height: 24px;
   font-weight: 400;
    font-size: 16px;
}
.con-bom {
    font-weight: 300;
    font-size: 14px;
    margin-top: 18px;
    cursor: pointer;
}
</style>