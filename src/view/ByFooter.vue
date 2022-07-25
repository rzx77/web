<template>
    <footer id='app-footer'>
        <div class="footer-wrap">
            <div class="wrap-left">
                <div class="menu-item">
                    <h4>关于我们</h4>
                    <ul class="submenu">
                        <li class="submenu-item">
                            <router-link class="alink" to="/about">企业简介</router-link>
                        </li>
                        <li class="submenu-item">
                            <router-link class="alink" to="/news">新闻中心</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-item">
                    <h4>
                        产品
                    </h4>
                    <ul class="submenu">
                        <li class="submenu-item">
                            <router-link to="/prod" class="alink">DTU模块</router-link>
                        </li>
                        <li class="submenu-item">
                            <router-link to="/prod" class="alink">DTU整机</router-link>
                        </li>
                        <li class="submenu-item">
                            <router-link to="/prod" class="alink">工业路由器</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-item">
                    <h4>
                        解决方案
                    </h4>
                    <ul class="submenu">
                        <li class="submenu-item">
                            <router-link to="/solve" class="alink">解决方案</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-item">
                    <h4>
                        本源物联云
                    </h4>
                    <ul class="submenu">
                        <li class="submenu-item">
                            <router-link to="/cloud" class="alink">云平台</router-link>
                        </li>
                        <li class="submenu-item">
                            <router-link to="/cloud`" class="alink">SIM卡管理平台</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-item">
                    <h4>
                        支持与服务
                    </h4>
                    <ul class="submenu">
                        <li class="submenu-item">
                            <a class="alink" href="https://shop536703610.taobao.com">在线购买</a>
                        </li>
                        <li class="submenu-item">
                            <router-link to="/support" class="alink">资料下载</router-link>
                        </li>
                        <li class="submenu-item">
                            <router-link to="/contact" class="alink">联系我们</router-link>
                        </li>
                    </ul>
                </div>
                <div class="menu-item linkus">
                    <h4>
                        联系我们
                    </h4>
                    <ul class="submenu">
                        <li class="submenu-item">电话:0551-62103798</li>
                        <li class="submenu-item">邮箱:support@ori-iot.com</li>
                        <li class="submenu-item">地址:安徽省合肥市经济技术开发区宿松路智能装备科技园A1栋5楼</li>
                    </ul>
                </div>
            </div>
            <div class="wrap-right">
                <div class="qrbox">
                    <img src="../assets/img/icons/wechatQR.png" alt="微信公众号二维码">
                    <div class="txt">微信公众平台</div>
                </div>
                <div class="qrbox">
                    <img src="../assets/img/icons/taobaoQR.png" alt="淘宝店铺二维码">
                    <div class="txt">淘宝官方店铺</div>
                </div>
            </div>
        </div>
        <div class="friendly-link">
            <span class="title">友情链接</span>
            <span class="item">
                <a class="alike" href="https://www.originqc.com.cn/" target="_blank">本源量子</a>
            </span>
            <span class="item">
                <a class="alike" href="https://hiiri.cn/" target="_blank">哈工大机器人(合肥)</a>
            </span>
            <span class="item">
                <a class="alike" href="" target="_blank">合肥市经开区</a>
            </span>
            <span class="item">
                <a class="alike" href="http://gxq.hefei.gov.cn/xwdt/bmdt/index.html" target="_blank">合肥市高新区</a>
            </span>
            <span class="item">
                <a class="alike" href="https://www.ustc.edu.cn/" target="_blank">中国科学技术大学</a>
            </span>
        </div>
        <div class="copyright">
            <a href="" target="_blank">免责声明</a>
            <a href="" target="_blank">皖ICP备2021006178号</a>
            <a href="" target="_blank">营业执照</a>
        </div>
    </footer>
</template>
<script>
export default {
    name: "ByFooter",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style scoped lang="less">
  #app-footer {
    width: 100%;
    background-color: #000;
    color: #FFF;
    &::after {
      display: block;
      content: "";
      clear: both;
    }
    .footer-wrap {
      position: relative;
      box-sizing: border-box;
      padding: 47px 210px 0;
      margin-bottom: 35px;
      &::after,&::before {
        display: block;
        content: "";
        clear: both;
      }
      .wrap-left {
        width: 80%;
        float: left;
        .linkus {
          width: 26.666% !important;
        }
        .menu-item {
          float: left;
          width: 14.666%;
          h4 {
            font-size: 18px;
            line-height: 27px;
            font-weight: 500;
            margin-bottom: 15px;
          }
          ul.submenu {
            .submenu-item {
              line-height: inherit;
              max-width: 266px;
              font-size: 18px;
              &:hover .alink {
                color: #1b5fc6;
              }
            }
          }

        }
      }
      .wrap-right {
          float: right;
          width: 20%;
          text-align: end;
          .qrbox {
            display: inline-block;
            width: 100px;
            margin: 0 12px 12px 0;
            &::after {
              content: "";
              display: block;
              clear: both;
            }
            .txt {
              height: 27px;
              line-height: 27px;
              font-size: 14px;
              text-align: center;
            }
          }
      }
    }
    .friendly-link {
      margin: 47px 210px;
      line-height: 27px;
      font-size: 18px;
      .title {
        font-weight: 700;
      }
      .item {
        padding-left: 2em;
        .alike {
          color: rgba(255,255,255,0.8);
          &:hover {
            color: #1b5fc6;
          }
        }
      }
    }
    .copyright {
      line-height: 27px;
      padding: 52px 0 42px;
      text-align: center;
      border-top: 1px solid rgba(255,255,255,0.2);
    }
  }
  .submenu-item .alink {
    color: #FFF;
  }
</style>