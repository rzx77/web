<template>
  <div>
    <by-header class="header"></by-header>
    <div class="about-banner">
      <p> 纵 览 全 局 &nbsp &nbsp共 赢 未 来</p>
      <div class="resume">
        <div class="con">
          &nbsp &nbsp &nbsp
          合肥本源物联网科技有限公司系本源量子第一家控股子公司，落户HRG华东产业基地。本源物联为国家高新技术企业、科技型中小企业、规模以上工业企业、安徽省“专精特新”企业、合肥市大数据企业、合肥经开区瞪羚企业。本源物联是扎根安徽、服务全国的智慧物联技术产业化企业。<br><br>

          &nbsp &nbsp &nbsp
          本源物联与中国科学技术大学、合肥工业大学等高校深度合作，部分技术已获合肥市关键共性技术研发和重大科技成果工程化项目立项，目前已获授权核心技术知识产权19项。公司长期专注工业联网通讯产品的研发、生产及销售，产品主要面向物联网终端客户，硬件产品包括GPRS/GPS/Cat1/4G
          DTU、4G/5G工业路由器、车载Android智能板卡及模组等，目前已经应用于通信、银通、安防、汽车等行业；公司自主研发的云平台能够实现快速远端数据采集及呈现，帮助客户实现物联网技术升级。本源物联自研产品已通过“ISO9001”认证。<br><br>

          &nbsp &nbsp &nbsp 未来，公司将在5G商用、智慧城市建设等领域进行大力研发，推进自研产品应用到越来越多的领域和行业，将本源物联打造成物联网领域技术领先的知名企业。
        </div>

      </div>
      <div class="value">
        核心价值观
        <div class="slogan">
          <div class="slogan-left">
            <div class="one">公司口号</div>
            <div class="two">用科技联通万物“本源”</div>
          </div>
          <div class="slogan-right">
            <img src="../../assets/img/about/icon1.png" alt="">
          </div>
        </div>
        <div class="brand">
          <div class="brand-left">
            <div class="one">品牌愿景</div>
            <div class="two">构建万物互联的工业体系</div>
          </div>
          <div class="brand-right">
            <img src="../../assets/img/about/icon2.png" alt="">
          </div>
        </div>
        <div class="slogan">
          <div class="slogan-left">
            <div class="one">公司使命</div>
            <div class="two">
              <div class="three">为客户创造价值</div>
              加快企业数字化升级，推动产业良性发展
            </div>
          </div>
          <div class="slogan-right">
            <img src="../../assets/img/about/icon3.png" alt="">
          </div>
        </div>
        <div class="brand">
          <div class="brand-left">
            <div class="one">目标</div>
            <div class="four">纵览全局 共赢未来</div>
          </div>
          <div class="brand-right">
            <img src="../../assets/img/about/icon4.png" alt="">
          </div>
        </div>
      </div>
      <div class="honor">
        <div class="honor-title">
          荣誉资质
        </div>
        <div class="honor-pic">
          <div class="pic"></div>
          <div class="year">11111</div>
          <div class="firm">111111111111</div>
        </div>
      </div>
      <div class="contact">
        <div class="our">联系我们</div>
        <div class="be">值得信赖的物联网硬件方案解决商</div>
        <div class="map">
          <div class="hefei">
            <div class="hefei-a">合肥总部</div>
            <div class="hefei-b">合肥市经开区宿松路3963号智能科技园A1栋5楼</div>
            <div class="hefei-a">上海办事处</div>
            <div class="hefei-b">上海市松江区本源物联办事处</div>
            <div class="hefei-a">南京办事处</div>
            <div class="hefei-b">南京市玄武区本源物联办事处</div>
            <div class="hefei-a">山东办事处</div>
            <div class="hefei-b">山东省济南市历下区本源物联办事处</div>
          </div>
          <div class="map-ph">
            <ul>
              <li>
                <img src="../../assets/img/about/one.png" alt="">
                <div class="a">联系电话</div>
                <div class="b">0551-62103798</div>
              </li>
              <li>
                <img src="../../assets/img/about/two.png" alt="">
                <div class="a">邮箱</div>
                <div class="b">0551-support@ori-iot.com</div>
              </li>
              <li>
                <img src="../../assets/img/about/three.png" alt="">
                <div class="a">技术支持</div>
                <div class="b">全天候一对一服务</div>
              </li>
            </ul>
          </div>
          <div class="map-a">
            <div id="container"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ByHeader from '../../view/ByHeader.vue'
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  name: 'about',
  data() {
    return {
      map: null
    }
  },
  components: { ByHeader },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "d83b5a29e63f85cffba392621dc908b2", //此处填入我们注册账号后获取的Key
        version: "2.0", //指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [''], //需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map("container", { //设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          zoom: 19, //初始化地图级别
          center: [117.27689, 31.776155], //初始化地图中心点位置
        });
      }).catch(e => {
        // console.log(e);
      })

    },

  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  destroyed() {
      this.map.destroy();
      this.map = null;
      // this.mapModule.dispose();
      this.mapModule = null;
    },

}
</script>

<style scoped>
.about-banner {
  margin-top: 72px;
}

.about-banner {
  background: url(../../assets/img/about/about1.png) 0 0 no-repeat,
    url(../../assets/img/about/aboutbg.png) 0 600px no-repeat;
}

.about-banner p {
  color: rgb(255, 255, 255);
  font-size: 64px;
  line-height: 483px;
  text-align: center;
}

.resume {
  position: relative;
  width: 1312px;
  height: 385px;
  background-color: #FFF;
  margin: -50px auto;
  color: #000;
  font-size: 18px;
}

.con {
  position: absolute;
  top: 54px;
  left: 60px;
  width: 1198px;
  height: 268px;
}

.value {
  height: 589px;
  font-size: 36px;
  font-weight: 900;
  color: #000;
  margin-top: 47px;
  text-align: center;
}

.slogan {
  width: 634px;
  height: 180px;
  background-color: rgb(255, 255, 255);
  margin-left: 300px;
  margin-top: 68px;
}

.slogan-left {
  float: left;
  width: 400px;
  height: 180px;
}

.one {
  float: left;
  font-size: 24px;
  font-weight: 700;
  margin-top: 27px;
  margin-left: 44px;
}

.two {
  float: left;
  font-size: 18px;
  font-weight: 300;
  margin-left: -95px;
  margin-top: 83px;
}

.four {
  float: left;
  font-size: 18px;
  font-weight: 300;
  margin-left: -49px;
  margin-top: 83px;
}

.three {
  margin-left: -194px;
}

.slogan-right {
  float: right;
  width: 200px;
  height: 180px;
}

.brand {
  float: right;
  width: 634px;
  height: 180px;
  background-color: rgb(255, 255, 255);
  margin-top: -177px;
  margin-right: 305px;
}

.brand-left {
  float: left;
  width: 400px;
  height: 180px;
}

.brand-right {
  float: right;
  width: 200px;
  height: 180px;
}

.honor {
  margin: 49px auto;
  width: 1312px;
  height: 900px;
}

.honor-title {
  text-align: center;
  padding-top: 68px;
  font-weight: 900;
  font-size: 36px;
  color: #000;
}

.honor-pic {
  position: relative;
  margin-top: 68px;
  width: 401px;
  height: 288px;
  background-color: rgb(238, 238, 238);
}

.pic {
  position: absolute;
  top: 20px;
  left: 63px;
  width: 274px;
  height: 200px;
  background-color: skyblue;
}

.year {
  position: absolute;
  bottom: 33px;
  left: 163px;
  font-size: 14px;
}

.firm {
  position: absolute;
  bottom: 10px;
  left: 134px;
  font-size: 14px;
}

.contact {
  margin: 0 auto;
  height: 999px;
  background: url(../../assets/img/about/aboutbg1.png) 0 0 no-repeat;
}

.our {
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  color: #000;
  padding-top: 71px;
}

.be {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #000;
  padding-top: 11px;
}

.map {
  position: relative;
  width: 1312px;
  height: 600px;
  background-color: rgb(229, 229, 229);
  margin: 68px auto;
}

.hefei {
  float: left;
  width: 469px;
  height: 393px;
  background-color: #FFF;
  border-radius: 5%;
  text-align: center;
  margin-top: 63px;
  margin-left: 104px
}

.hefei-a {
  margin-top: 35px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
}

.hefei-b {
  font-size: 18px;
  font-weight: 300;
  color: #000;
}

.map-a {
  float: right;
  width: 600px;
  height: 500px;
}

#container {
  width: 100%;
  height: 600px;
}

.map-ph {
  position: absolute;
  bottom: 15px;
  left: 7px;
  width: 665px;
  height: 116px;
}

.map-ph li {
  text-align: center;
  float: left;
  width: 195px;
  height: 116px;
  margin-left: 21px;
}
.map-ph li .a {
  font-weight: 500;
  font-size: 20px;
  color: #000;
  margin-top: 8px;
}
.map-ph li .b {
  font-weight: 300;
  font-size: 16px;
  color: #000;
  margin-top: 8px;
}
</style>