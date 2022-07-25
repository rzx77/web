<template>
  <div id="app-header">
    <div class="header-wrap">
      <router-link to="/" class="logo">
        <img src="../assets/img/logo.png" alt="logo" />
      </router-link>
      <ul class="menu-list">
        <li class="menu-item"><router-link to="/home">首页</router-link></li>
        <li class="menu-item production">
          <router-link to="/prod">产品</router-link>
          <div class="submenu prodcenter">
            <div class="submenu-wrap flex-menu">
              <!-- 左边列表 -->
              <div class="cat-list menu-left">
                <ul>
                  <!-- 初始化 currentprod: 0,监听鼠标移入事件，获取到最新的index改变  绑定class属性，判断当(index===标识)时添加active-class-->
                  <li
                  :class="{ active: index == currentprod }"
                    @mouseenter="changeprodchildlist(index)"
                    class="sub-cat-item"
                    v-for="(item, index) in categoryList"
                    :key="index"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
              <!-- 右边搜索 -->
              <div class="sub-wrap menu-right">
                <div class="formitem">
                  <span class="icon">
                    <img
                      src="../assets/img/icons/search.png"
                      width="18"
                      height="18"
                      alt="search.icon"
                    />
                  </span>
                  <input type="text" placeholder="5G工业路由器" />
                </div>
                <!-- 二级产品渲染 -->
                <div class="catechild-wrap">
                  <div
                    class="catechild-item"
                    v-for="(res, index) in second"
                    :key="index"
                  >
                    <div class="prod-title">{{ res.name }}</div>
                    <!-- 二级产品里面的产品 -->
                    <div
                      class="prod-i"
                      v-for="(proditem, prodindex) in res.children"
                      :key="prodindex"
                      @click="getDetail(proditem.id)"
                    >
                      {{ proditem.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="menu-item">
          <router-link to="/solve">解决方案</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/cloud">本源物联云</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/news">新闻中心</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/support">支持与服务</router-link>
          <div class="submenu">
            <div class="submenu-list">
              <ul class="sub-list-wrap">
                <li class="sub-list-item">
                  <router-link to="/support">资料下载</router-link>
                </li>
                <li class="sub-list-item">
                  <router-link to="/contact">联系我们</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu-item">
          <router-link to="/about">关于我们</router-link>
        </li>
        <li class="menu-item">
          <a href="https://www.taobao.com" target="_blank">在线购买</a>
        </li>
      </ul>
      <div class="formitem">
        <input type="text" placeholder="请输入搜索关键字" />
        <span class="icon">
          <img
            src="../assets/img/icons/search.png"
            width="18"
            height="18"
            alt="search.icon"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ByHeader",
  data() {
    return {
      categoryList: "",
      categoryChildrenList: "",
      currentprod: 0, //当前点击的产品分类
      currentprodS : [],
      second:[],
      getList:[]
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.get(
        `http://112.27.250.90:33333/website/product`
      );
      this.currentprodS = [];
      this.categoryList = res.data;
      // console.log(this.categoryList)
      this.categoryList.forEach(element => {
        //把产品id添加到currentprodS里面
        this.currentprodS.push(element.id);
      });
      // console.log(this.currentprodS)
  
    },
    // 鼠标移动拿到最新改变的index标识重新赋值
    changeprodchildlist(e) {
      this.currentprod = e; //拿到当前的索引号0、1、2、3
      let index = this.currentprodS[e]
      this.categoryList.forEach(item => {
        if(item.id == index) {//遍历 列表里面的商品id和最新鼠标移动得到的商品id比较 相同则输出
          // console.log(item)
          this.second=item.children
          // console.log(this.second);
        } 
         return
      })
    },
    getDetail(id){
      // console.log(id);
      this.$router.push('/detail/'+id)
       axios({
      url: "http://112.27.250.90:33333/website/product/" + id,
      method: "get",
    }).then((res) => {
      // console.log(res);
      this.getList = res.data;
      // console.log(this.getList);
      this.$bus.$emit('hello',this.getList)
    });
    }
  },
};
</script>

<style  lang="less" scoped>
.header-wrap .logo img {
  margin-left: -88px;
}
#app-header {
  position: fixed;
  height: 72px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  color: #000;
  background-color: #fff;
  .header-wrap {
    position: relative;
    height: 72px;
    width: 1200px;
    margin: 0 auto;
    z-index: 2;
    .logo {
      position: absolute;
      // width: 168px;
      height: 22px;
      top: 12px;
      left: 0;
    }
    ul.menu-list {
      position: absolute;
      top: 0;
      right: 287px;
      height: 72px;
      line-height: 72px;
      cursor: pointer;
      opacity: 1;
      li.menu-item {
        float: left;
        position: relative;
        display: inline-block;
        height: 72px;
        padding: 0 29px;
        .submenu {
          display: none;
          position: absolute;
          width: 100%;
          top: 72px;
          left: 0;
          z-index: 99;
          .submenu-wrap {
            box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1);
            & > .cat-list {
              padding: 45px 0;
              background-color: #e8eff9;
              color: #fff;
              & .sub-cat-item {
                width: 120px;
                height: 50px;
                text-align: center;
                box-sizing: content-box;
                padding: 8px 32px;
                color: #000;
              }
              & .active {
                color: rgb(27, 95, 198);
                font-weight: 700;
              }
            }
            & > .sub-wrap {
              padding: 24px 50px;
              background-color: #fff;
              & > .formitem {
                position: relative;
                min-width: 487px;
                height: 42px;
                line-height: 42px;
                input {
                  position: relative;
                  width: 100%;
                  height: 100%;
                  padding: 0 32px 0 32px;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                  border-top: none;
                  border-left: none;
                  border-right: none;
                  outline: none;
                  &:focus {
                    border-bottom: 1px solid rgb(27, 95, 198);
                  }
                }
                .icon {
                  position: absolute;
                  z-index: 9;
                  left: 6px;
                  top: 12px;
                  height: 18px;
                  width: 18px;
                  img {
                    height: 100%;
                    width: 100%;
                    vertical-align: top;
                  }
                }
              }
              & > .catechild-wrap {
                display: flex;
                width: 450px;
                & > .catechild-item {
                  padding: 12px 26px;
                  & > .prod-title {
                    height: 42px;
                    line-height: 42px;
                    font-weight: 700;
                    color: #1b5fc6;
                  }
                  & > .prod-i {
                    height: 28px;
                    line-height: 28px;
                    box-sizing: content-box;
                    padding: 8px 0;
                    text-align: start;
                    color: #000;
                    &:hover {
                      text-decoration: underline;
                      color: #1b5fc6;
                    }
                  }
                }
              }
            }
            &::hover {
              display: none;
            }
          }
          .flex-menu {
            display: flex;
          }
          .submenu-list {
            padding: 14px 12px 18px;
            background-color: #fff;
            box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
            .sub-list-item {
              display: block;
              height: 50px;
              line-height: 50px;
              text-align: center;
              color: rgb(27, 95, 198);
              font-weight: 700;

              &:hover {
                background-color: rgba(174, 174, 174, 0.15);
                border-radius: 9.4px;
              }
            }
          }
        }
        & > .prodcenter {
          left: -190px;
        }
        & > .solution {
          left: -190px;
        }
        &:hover {
          color: #fff;
          background-color: #1b5fc6;
          .submenu {
            display: block;
          }
        }
      }
    }
    & > .formitem {
      position: absolute;
      display: inline-block;
      top: 16px;
      right: 0;
      height: 42px;
      width: 208px;
      & > input {
        width: 100%;
        height: 100%;
        outline: none;
        padding: 0 46.7px 0 16px;
        font-size: 14px;
        box-sizing: border-box;
        border: 1px solid rgb(217, 217, 217);
      }
      & > .icon {
        position: absolute;
        width: 18px;
        height: 18px;
        top: 12px;
        right: 12px;
        img {
          vertical-align: top;
        }
      }
    }
  }
}
li {
  font-size: 16px;
}
ul.menu-list {
  margin-right: -120px;
}
.formitem {
  margin-right: -64px;
}
.submenu-wrap {
  background-color: #1b5fc6;
}
.h1 {
  color: #000;
}
</style>