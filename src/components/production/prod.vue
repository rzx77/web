<template>
  <div id="prod">
    <!-- 头部 -->
    <by-header class="header"></by-header>
    <div class="mt-72">
      <div class="prod-banner">
        <img src="../../assets/img/prodbanner.png" alt="banner" />
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="prod-wrap">
      <!-- 左侧边栏 -->
      <div class="left">
        <el-aside :width="isCollapse ? '64px' : '268px'">
          <div class="toggle-button"></div>
          <!-- 侧边栏菜单区域 -->
          <el-menu
            background-color="rgb(242, 242, 242)"
            text-color="rgb(68, 68, 68)"
            active-text-color="rgb(0, 0, 0)"
            :default-active="currentPage"
            :unique-opened="true"
          >
            <!-- 一级菜单 -->
            <el-submenu
              :index="item.id + ''"
              v-for="item in categoryList"
              :key="item.id"
            >
              <!-- 一级菜单的模板区域 -->
              <template slot="title" >
                <span @click="itemClick(item.id);change('1');"
                >{{ item.name }}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item
                :index="'/' + subItem.parent_id"
                v-for="subItem in item.children"
                :key="subItem.id"
              >
                <template slot="title">
                  <!-- 文本 -->
                  <span @click="subItemClick(subItem.id);change('2')">{{
                    subItem.name
                  }}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 扩展列表 -->
        <div class="extendlist">
          <div
            class="list-item"
            v-for="(item, index) in extendList"
            :key="index"
          >
            <router-link :to="item.path">
              <img :src="item.imgurl" :alt="item.name" />
            </router-link>
          </div>
        </div>
      </div>
      <!-- 右边内容区 -->
      <div class="right">
      <By-right :res="res"></By-right>

        <div class="first-bottom">
          <component :is="comName" :firstDetail="firstDetail" :secondDetail="secondDetail"></component></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ByHeader from "../../view/ByHeader.vue";
import ByRight from "../../view/ByRight.vue";
import component1 from "../../view/component1.vue";
import component2 from "../../view/component2.vue";
export default {
  name: "prod",
  components: { ByHeader, component1, component2, ByRight},
  data() {
    return {
      comName:'component1',
      categoryList: {
        [0]:{}
      },
      isshow:true,
      res:[],
      //是否折叠
      isCollapse: false,
      extendList: [
        {
          id: 1,
          name: "需求定制",
          path: "/custom",
          imgurl: require("../../assets/img/extend/extendcustom.png"),
        },
        {
          id: 2,
          name: "官方商城",
          path: "https://taobao.com",
          imgurl: require("../../assets/img/extend/extendtaobao.png"),
        },
        {
          id: 3,
          name: "解决方案",
          path: "/solve",
          imgurl: require("../../assets/img/extend/extendsolution.png"),
        },
        {
          id: 4,
          name: "新闻中心",
          path: "/news",
          imgurl: require("../../assets/img/extend/extendnews.png"),
        },
      ],
      currentPage:'/prod',
      firstDetail:'',
      secondDetail:[],
      visible:false
    };
  },
  created() {
    this.getUserList();
  },
  mounted() {
    let href=window.location.href
    this.currentPage=href.split('/#')[1]
  },
  watch:{
    '$route':'getPath'
  },
  methods: {
    getPath(){
      this.currentPage=this.$route.path
    },
    async getUserList() {
      const { data: res } = await this.$http.get(
        `http://112.27.250.90:33333/website/product`
      );
      this.categoryList = res.data;
      // console.log(this.categoryList);
      this.itemClick(this.categoryList[0].id)
    },
    itemClick(id) {
      axios({
        url: "http://112.27.250.90:33333/website/product/" + id,
        method: "get",
      }).then((res) => {
        console.log(id)
        this.res = res.data.data;
        // console.log(this.res);
        this.firstDetail=this.res.products
        // console.log(this.firstDetail);
      });

      
    },
    subItemClick(id) {
      console.log(id);
      axios({
        url: "http://112.27.250.90:33333/website/product/" + id,
        method: "get",
      }).then((value) => {
        this.value = value.data.data;
        this.secondDetail=this.value.products
        // console.log(this.secondDetail);
      });
    },
    change(index){
      // console.log(index);
      this.comName='component'+index
    }
  },
};
</script>

<style scoped lang="less">
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
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-menu-item:hover {
  background: rgb(27, 95, 198) !important;
  color: #fff !important;
}
.el-submenu:hover {
  background: rgb(27, 95, 198) !important;
  color: #fff !important;
}
.extendlist {
  margin-top: 30px;
}
span {
  text-align: center;
  font-size: 20px;
  padding-left: 55px;
}
.prod-wrap {
  margin: 60px 239px;
  &::before {
    content: "";
    display: block;
    clear: both;
  }
  .left {
    float: left;
    width: 270px;
    // margin-right: 35px;
    .prodlist {
      margin-bottom: 20px;
      text-align: center;
      color: #000;
      & > .ver-list {
        cursor: pointer;
        overflow: hidden;
        &:not(&:last-child) {
          margin-bottom: 2px;
        }
      }
      & > .ver-list > .list-title {
        line-height: 50px;
        height: 50px;
        background-color: rgb(242, 242, 242);
      }
      & > .ver-list > .active {
        background-color: rgb(27, 95, 198);
        color: #fff;
      }
      & > .ver-list > .sub-list {
        height: 0;
        transition: all 0.3s ease-in;
        .sub-list-item {
          line-height: 24px;
          font-size: 16px;
          padding: 8px 0;
          &:hover {
            text-decoration: underline;
            color: rgb(27, 95, 198);
          }
        }
      }
      & > .dorpdownmenu > .sub-list {
      }
    }
    .extendlist {
      .list-item {
        &:not(&:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
  .right {
    float: left;
    // width: calc(100% - 360px);
    width: 200px;
    margin-left: 35px;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
.el-menu-item span {
  font-size: 16px;
}
ul.el-menu.el-menu--inline {
  text-align: center;
}

.first-bottom {
  width: 1050px;
  margin-top: -60px

}
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

}
.content {
  float: left;
  height: 800px;
  width: 590px;

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
  margin-left: 55px;
  margin-top: 30px;
  height: 212px;
  width: 212px;
  background-color: pink;
}
.description {
  width: 780px;

  font-size: 16px;
  color: rgb(68, 68, 68);
}
</style>