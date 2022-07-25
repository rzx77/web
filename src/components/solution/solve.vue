<template>
  <div class="solve">
    <by-header class="header"></by-header>
        <div class="mt-72">
      <div class="prod-banner">
        <img src="../../assets/img/solve/banner_a.png" alt="">
      </div>
    </div>
    <div class="nav">
      <div class="nav_a">
        <div class="one" @click="comName='industrial'">工业物联网</div>
        <div class="one"  @click="comName='agricultural'">农业物联网</div>
        <div class="one" @click="comName='consumption'">消费物联网</div>
      </div>
    </div>
    <div class="main">
     <component  :is="comName"></component>
    </div>
  </div>
</template>

<script>
import ByHeader from "../../view/ByHeader.vue";
import Default from "./Default.vue";
import industrial from "./industrial/industrial.vue";
import agricultural from "./agricultural/agricultural.vue";
import consumption from "./consumption/consumption.vue";
export default {
  name: 'solve',
  components: { ByHeader,Default,industrial,agricultural,consumption },
  data(){
    return{
       comName: 'Default'
    }
  }
}

</script>

<style scoped >

.mt-72 {
  margin-top: 72px;
  /* height: 350px; */
}

img {
  width: 100%;
  height: 100%;
}

.nav {
  height: 50px;
  background-color: #000;
  margin-top: -4px;

}

.nav_a {
  margin-left: 248px;
}
.nav .one {
  float: left;
  width: 193px;
  color: #fff;
  margin-left: 174px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
  cursor:pointer;
}
.nav .one:hover {
  background-color: rgb(27, 95, 198);
}
.main {
  margin: 30px auto;
  width: 1350px;
  height: 554px;
}

</style>