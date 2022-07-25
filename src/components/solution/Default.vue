<template>
<div class="Default">
     <el-card class="box-card">
        <div class="text item">
          <div class="pic">
            <img src="../../assets/img/solve/main_a.png" alt="">
          </div>
          <div class="main-con">
            <div class="con-top">专业</div>
            <div class="con-bo">为您提供最专业的解决方案</div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          <div class="pic">
            <img src="../../assets/img/solve/main_b.png" alt="">
          </div>
          <div class="main-con">
            <div class="con-top">全面</div>
            <div class="con-bo">全面覆盖各行各业</div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item">
          <div class="pic">
            <img src="../../assets/img/solve/main_c.png" alt="">
          </div>
          <div class="main-con">
            <div class="con-top">智能</div>
            <div class="con-bo">以新一代技术为支撑</div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card" id="one">
        <div class="main_case">
          一站式解决方案
        </div>
        <ul class="main-pic">
          <li class="design">
            <img src="../../assets/img/solve/solve_a.png" alt="">
            <div class="main-w">设计规范</div>
          </li>
          <li class="quality">
            <img src="../../assets/img/solve/solve_b.png" alt="">
            <div class="main-w">质量保证</div>
          </li>
          <li class="quality">
            <img src="../../assets/img/solve/solve_c.png" alt="">
            <div class="main-w">按时交付</div>
          </li>
          <li class="quality">
            <img src="../../assets/img/solve/solve_d.png" alt="">
            <div class="main-w">全程服务</div>
          </li>
        </ul>
      </el-card>
</div>
</template>

<style scoped>
.el-card {
  float: left;
  width: 425px;
  height: 200px;
  margin-left: 15px;
}

.main .pic {
  width: 90px;
  height: 90px;
  margin-top: 30px;
  margin-left: 15px;
}

.main-con {
  float: right;
  width: 250px;
  height: 90px;
  margin-top: -88px;
}

.con-top {
  font-weight: 700;
  font-size: 36px;
  color: #000;
}

.con-bo {
  font-weight: 400;
  font-size: 20px;
  color: #000;
}
div#one {
  width: 1305px;
  height: 298px;
  margin-top: 36px;
}
.main_case {
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
}
.main-pic li {
  float: left;
  width: 96px;
  height: 91px;
  margin-top: 38px;
}
.design {
  margin-left: 79px;
}
.main-w {
  font-size: 24px;
  font-weight: 700;
  margin-top: 16px;
}
.quality {
  margin-left: 240px;
}
</style>