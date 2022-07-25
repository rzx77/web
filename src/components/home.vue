<template>
  <div class="home">
    <!-- 头部 -->
    <by-header class="header"></by-header>
    <!-- 轮播图 -->
    <div class="page-banner">
      <div class="swiper-container pageswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
            <img :src="item.uri" :alt="item.name" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="arrow swiper-button-prev"></div>
        <div class="arrow swiper-button-next"></div>
      </div>
    </div>
    <!-- 产品中心 -->
    <div class="content-img-box">
      <!-- 在 <picture> 标签中使用 <source> 来设置不同屏幕显示的图片 -->
      <picture>
        <source srcset="../assets/img/bg/netbg.png" media="(min-width: 1200px)">
        <img src="../assets/img/bg/netbg.png" class="bg" alt="背景图片" />
      </picture>
      <div class="content-box">
        <div class="legend">
          <h1>产品中心</h1>
          <h4>PRODUCT CENTER</h4>
        </div>
        <div class="content-list">
          <div class="content-item">
            <div class="img-box">
              <div class="mask">
                <div class="mask-content">
                  <!-- 使用grid网格画9个小正方形形成一个大正方形 -->
                  <ul class="icon sudoku">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <p class="txt">
                    产品主要面向物联网终端客户,目前已经应用于通信、银联、安防、汽车等行业
                  </p>
                </div>
              </div>
              <img src="../assets/img/bg/dtu1.png" alt="dtu模块">
            </div>
            <div class="prod-profile">
              <h3>DTU模块</h3>
              <div class="txt">实现终端设备和服务器平台端之间数据的透明传输</div>
            </div>
          </div>
          <div class="content-item">
            <div class="img-box">
              <div class="mask">
                <div class="mask-content">
                  <ul class="icon sudoku">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <p class="txt">
                    产品主要面向物联网终端客户,目前已经应用于通信、银联、安防、汽车等行业
                  </p>
                </div>
              </div>
              <img src="../assets/img/bg/dtu2.png" alt="dtu整机">
            </div>
            <div class="prod-profile">
              <h3>DTU整机</h3>
              <div class="txt">实现终端设备和服务器平台端之间数据的透明传输</div>
            </div>
          </div>
          <div class="content-item">
            <div class="img-box">
              <div class="mask">
                <div class="mask-content">
                  <ul class="icon sudoku">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <p class="txt">
                    产品主要面向物联网终端客户,目前已经应用于通信、银联、安防、汽车等行业
                  </p>
                </div>
              </div>
              <img src="../assets/img/bg/router.png" alt="路由器">
            </div>
            <div class="prod-profile">
              <h3>工业路由器</h3>
              <div class="txt">实现终端设备快速远距离的联网</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 需求定制 -->
    <div class="content-imgleft-box">
      <div class="wrap">
        <div class="leftbg">
          <img src="../assets/img/bg/enquiry.png" alt="Iot">
        </div>
        <div class="right-content">
          <div class="legend">
            <h1>需求定制</h1>
            <h4>DEMAND CUSTOMIZATION</h4>
          </div>
          <p class="text-profile">
            根据客户的需求，提供定制化服务，包括但不限于：自助终端传输解决方案、智能停车场传输解决方案、环境监测传输解决方案、摄像头数据远程传输解决方案、快递柜数据远程上传传输解决方案......
          </p>
          <div class="tipsloop">
            <div class="loop-item">
              <div class="content-box">
                针对移远模组特殊定制
              </div>
            </div>
            <div class="loop-item">
              <div class="content-box">
                完整测试方案及设备
              </div>
            </div>
            <div class="loop-item">
              <div class="content-box">
                完整解决方案资源整合
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 本源云平台 -->
    <div class="whitebox">
      <div class="content-bgimg-box">
        <div class="wrap">
          <div class="legend">
            <h1>本源物联云
              <span>
                ORIGINAL IOT CLOUD
              </span>
            </h1>
          </div>
          <div class="text-profile">
            本源物联云为企业提供专业的软硬件解决方案，赋能众多细分行业，提供安全可靠的设备接入、应用开发、组态服务、运维管理、数据统计与分析等核心功能，全面开放平台化能力，以模块化、组件化、系统化的能力帮助企业低成本、高效率搭建自己的物联网系统。
          </div>
          <div class="tipsloop">
            <div class="loop-item">
              <router-link to="">
                <div class="content-box">
                  <span class="icon">
                    <!-- svg path标签 -->
                    <svg t="1648086650196" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="1404">
                      <path
                        d="M736 126.4H290.4L64.8 419.2 512 961.6l447.2-546.4L736 126.4z m-461.6 288l81.6-224h149.6l-231.2 224z m476 0l-231.2-224h148.8l82.4 224z m-18.4 32l-219.2 382.4-220-382.4h439.2z m-404.8-32l185.6-185.6 185.6 185.6H327.2z m-70.4 32l192 337.6-278.4-337.6h86.4z m512 0h82.4L580.8 776l188-329.6z m108.8-32l-91.2 0.8-85.6-224h3.2l173.6 223.2z m-556-224h3.2l-85.6 224H148.8l172.8-224z"
                        p-id="1405"></path>
                    </svg>
                  </span>
                  <span class="txt-t">稳定</span>
                  <span class="txt">具备自动容灾、负载均衡等能力提供全天候的运维监控服务</span>
                  <span class="likebtn">了解详情</span>
                </div>
              </router-link>
            </div>
            <div class="loop-item">
              <router-link to="">
                <div class="content-box">
                  <span class="icon">
                    <svg t="1648088006883" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="2572">
                      <path
                        d="M988.672 519.168l-0.512-275.456-130.56 9.216 0.512 29.696-67.072 9.728-98.304 10.752c-33.28-10.24-131.072-38.912-153.088-34.304-9.216 2.048-30.72 17.92-56.32 38.4-25.6-7.68-115.2-30.208-177.152-1.536l-31.232-19.456 6.144-10.752-103.936-73.728L40.96 438.784 152.064 491.52l9.216-15.36 67.584 33.28c0 32.768 14.848 49.664 25.6 58.368-2.048 6.656-3.072 13.824-2.56 20.992 1.024 14.336 7.68 26.112 18.432 33.792 7.168 5.12 15.872 7.68 25.088 7.68 5.12 0 9.728-1.024 14.848-2.56 1.024 13.824 7.168 26.112 18.432 34.304 7.168 5.12 15.872 7.68 25.088 7.68 3.072 0 6.656-0.512 9.728-1.024-1.024 16.384 5.632 31.744 18.432 40.96 7.168 5.12 15.872 7.68 25.088 7.68 5.12 0 9.728-1.024 14.848-2.56 1.024 13.824 7.168 26.112 18.432 34.304 7.168 5.12 15.872 7.68 25.088 7.68 13.824 0 27.136-5.632 37.376-15.872l16.896 5.632c13.824 5.12 26.112 7.68 37.376 7.68s21.504-2.56 30.208-7.68c13.312-8.192 19.968-20.48 23.04-29.184 4.096 0.512 7.68 1.024 11.264 1.024 15.36 0 28.16-4.608 37.376-14.336 11.776-12.288 14.848-28.672 15.36-41.472h2.56c15.872 0 27.648-5.12 35.84-14.848 13.824-16.384 11.776-41.472 8.192-58.368 16.384-1.536 28.672-7.68 36.864-17.92 11.264-14.336 11.264-32.256 9.728-45.568 21.504-2.048 57.856-9.216 72.704-38.4h18.944l0.512 29.184 129.024 2.56zM319.488 590.336c-6.144 8.704-15.36 13.824-24.064 13.824-3.584 0-7.168-1.024-10.24-3.072-4.608-3.072-7.168-8.192-7.68-14.336-0.512-7.168 1.536-14.848 6.144-21.504 6.144-8.704 15.36-13.824 24.064-13.824 3.584 0 7.168 1.024 10.24 3.072 4.608 3.072 7.168 8.192 7.68 14.336 1.024 7.168-1.536 14.848-6.144 21.504z m58.368 39.424c-6.144 8.704-15.36 13.824-24.064 13.824-3.584 0-7.168-1.024-10.24-3.072-9.728-6.656-10.24-23.04-1.536-35.84 6.144-8.704 15.36-13.824 24.064-13.824 3.584 0 7.168 1.024 10.24 3.072 9.728 6.656 10.752 23.04 1.536 35.84z m53.248 47.616c-6.144 8.704-15.36 13.824-24.064 13.824-3.584 0-7.168-1.024-10.24-3.072-9.728-6.656-10.24-23.04-1.536-35.84 6.144-8.704 15.36-13.824 24.064-13.824 3.584 0 7.168 1.024 10.24 3.072 4.608 3.072 7.168 8.192 7.68 14.336 1.024 7.168-1.536 14.848-6.144 21.504z m58.368 39.424c-6.144 8.704-15.36 13.824-24.064 13.824-3.584 0-7.168-1.024-10.24-3.072-9.728-6.656-10.24-23.04-1.536-35.84 6.144-8.704 15.36-13.824 24.064-13.824 3.584 0 7.168 1.024 10.24 3.072 4.608 3.072 7.168 8.192 7.68 14.336 1.024 7.68-1.536 14.848-6.144 21.504z m248.32-161.792c-5.12 6.656-15.36 9.216-30.72 8.192l-62.976-24.576-9.216 24.064 59.392 23.04c4.096 13.312 7.68 35.84-0.512 45.056-5.632 6.656-18.432 6.144-28.672 4.096l-59.392-25.6-10.24 23.552 53.76 23.04c0 8.704-1.024 21.504-8.192 28.672-5.632 5.632-14.336 7.68-26.624 6.144l-52.736-18.432-8.704 24.576 33.28 11.776c-1.536 4.608-5.12 11.264-11.776 15.36-9.728 6.144-25.6 5.632-45.056-2.048l-10.752-3.584c3.072-8.192 4.608-16.896 3.584-25.088-1.024-13.824-7.68-26.112-18.432-33.792-7.168-5.12-15.872-7.68-25.088-7.68-5.12 0-9.728 1.024-14.848 2.56v-0.512c-1.024-14.336-7.68-26.112-18.432-33.792-7.168-5.12-15.872-7.68-25.088-7.68-3.072 0-6.656 0.512-9.728 1.024 1.024-16.384-5.632-31.744-18.432-40.96-7.168-5.12-15.872-7.68-25.088-7.68-5.12 0-9.728 1.024-14.848 2.56v-0.512c-1.024-13.824-7.68-26.112-18.432-33.792-7.168-5.12-15.872-7.68-25.088-7.68-15.36 0-30.208 7.168-40.96 19.456-6.656-6.656-15.36-19.968-11.776-46.592L174.08 455.68l87.04-147.456 44.032 26.624 6.656-3.584c44.032-24.064 112.128-12.8 147.456-4.096-30.208 26.112-61.44 54.784-80.384 72.192l-1.536 1.536-1.024 2.048c-1.536 2.56-12.8 25.088-3.072 45.568 4.096 8.192 12.8 18.944 33.792 23.04 40.448 8.192 104.448-37.376 129.024-56.32C555.52 433.152 604.672 473.6 653.312 473.088l87.552 48.64c2.048 8.704 4.096 24.576-3.072 33.28z m84.992-93.696l-3.072 9.216c-8.192 27.136-52.736 29.696-64.512 29.696l-65.024-35.84c3.072-1.536 6.144-3.584 8.704-5.632l-15.36-20.992c-52.736 38.4-136.704-47.616-137.216-48.128l-8.192-8.704-9.216 7.68c-30.72 25.088-89.6 63.488-116.736 57.856-8.192-1.536-13.312-4.608-15.36-8.704-3.072-6.144 0-15.872 2.048-20.48 61.44-57.344 132.608-118.784 145.92-122.88 11.776-2.048 83.456 16.384 143.36 34.304l2.56 1.024 103.936-11.264 64-9.216 1.536 152.576h-37.376z"
                        p-id="2573"></path>
                    </svg>
                  </span>
                  <span class="txt-t">稳定</span>
                  <span class="txt">多种认证方式和加密协议,全方位实现平台全链路的安全保障</span>
                  <span class="likebtn">了解详情</span>
                </div>
              </router-link>
            </div>
            <div class="loop-item">
              <router-link to="">
                <div class="content-box">
                  <span class="icon">
                    <svg t="1648088217134" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="11568">
                      <path
                        d="M974.933333 452.266667l-98.133333-85.333334V64c0-12.8-8.533333-21.333333-21.333333-21.333333H170.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333v309.333333l-98.133333 78.933334c-6.4 4.266667-8.533333 10.666667-8.533333 17.066666v490.666667c0 12.8 8.533333 21.333333 21.333333 21.333333h896c12.8 0 21.333333-8.533333 21.333333-21.333333V469.333333c0-6.4-2.133333-12.8-6.4-17.066666zM874.666667 424.533333l51.2 42.666667-51.2 34.133333v-76.8zM192 85.333333h640v445.866667L612.266667 682.666667h-200.533334L192 531.2V85.333333zM149.333333 428.8v74.666667L100.266667 469.333333 149.333333 428.8z m-64 81.066667L369.066667 704 85.333333 917.333333V509.866667zM128 938.666667l283.733333-213.333334h198.4L896 938.666667H128z m810.666667-21.333334L654.933333 704 938.666667 509.866667V917.333333z m-192-512H277.333333v42.666667h469.333334v-42.666667z m0-106.666666H277.333333v42.666666h469.333334v-42.666666zM405.333333 192h-128v42.666667h128V192z"
                        p-id="11569"></path>
                    </svg>
                  </span>
                  <span class="txt-t">稳定</span>
                  <span class="txt">开放平台的二次开发能力，助力企业高效便捷的完成自己的物联网SAAS平台的构建</span>
                  <span class="likebtn">了解详情</span>
                </div>
              </router-link>
            </div>
            <div class="loop-item">
              <router-link to="">
                <div class="content-box">
                  <span class="icon">
                    <svg t="1648088584677" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="14566">
                      <path
                        d="M512.852414 399.526369c-30.783097 0-55.740512 24.958438-55.740512 55.740512 0 30.783097 24.957415 55.740512 55.740512 55.740512 30.783097 0 55.740512-24.957415 55.740512-55.740512C568.592926 424.484807 543.635511 399.526369 512.852414 399.526369zM289.88832 399.526369c-30.783097 0-55.740512 24.958438-55.740512 55.740512 0 30.783097 24.957415 55.740512 55.740512 55.740512 30.783097 0 55.740512-24.957415 55.740512-55.740512C345.629855 424.484807 320.671417 399.526369 289.88832 399.526369zM512.852414 65.080228c-246.27501 0-445.927165 174.709067-445.927165 390.186653 0 123.156948 65.361637 232.816486 167.222559 304.315914l0 197.352787 195.352223-118.529557c27.039843 4.461615 54.843072 7.04751 83.352383 7.04751 246.27501 0 445.928189-174.680415 445.928189-390.186653C958.779579 239.790318 759.1264 65.080228 512.852414 65.080228zM512.852414 789.713023c-32.552393 0-63.98836-3.781116-94.213755-10.233062l-131.200134 78.876442 1.755993-129.282458c-100.596116-60.476373-166.528758-160.472831-166.528758-273.80604 0-184.697559 174.694741-334.446142 390.186653-334.446142 215.491912 0 390.186653 149.748582 390.186653 334.446142C903.039068 639.991046 728.344327 789.713023 512.852414 789.713023zM735.816508 399.526369c-30.783097 0-55.740512 24.958438-55.740512 55.740512 0 30.783097 24.957415 55.740512 55.740512 55.740512 30.783097 0 55.740512-24.957415 55.740512-55.740512C791.55702 424.484807 766.598582 399.526369 735.816508 399.526369z"
                        p-id="14567"></path>
                    </svg>
                  </span>
                  <span class="txt-t">稳定</span>
                  <span class="txt">开放平台的二次开发能力，助力企业高效便捷的完成自己的物联网SAAS平台的构建</span>
                  <span class="likebtn">了解详情</span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 最新动态 -->
    <div class="content-img-box">
      <picture>
        <source srcset="../assets/img/bg/newsbg.png" media="(min-width: 1200px)">
        <img src="../assets/img/bg/newsbg.png" class="bg" alt="背景图片" />
      </picture>
      <div class="content-box">
        <div class="legend">
          <h1>
            最新动态
          </h1>
          <h4>
            LATEST DEVELOPMENTS
          </h4>
        </div>
        <div class="wrap">
          <div class="leftbigpic-box">
            <router-link to="/" class="news-link">
              <div class="newsimg-box">
                <img src="../assets/img/news/news1.png" alt="新闻">
              </div>
              <div class="text-box">
                <div class="text-profile">工业互联网:或成经济复苏下一推手</div>
                <div class="text-subtitle">经济复苏的下一个推手在哪里?在工业界,一个新概念正试图回答这个问题，日前在北京举办的"工业互联网"...</div>
              </div>
            </router-link>
          </div>
          <div class="rightlist-box">
            <!-- 循环最新的新闻列表 -->
            <div class="news-item" v-for="(item, index) in newslist" :key="index">
              <div class="text-box">
                <div class="text-profile">
                  {{ item.name }}
                </div>
                <div class="text-subtitle">
                  {{ item.abstracttitle }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部banner -->
    <div class="content-img-box">
      <picture>
        <source srcset="../assets/img/bg/custombg.png" media="(min-width: 1200px)">
       <img src="../assets/img/bg/custombg.png" class="bg"  alt="背景图片"/>
      </picture>
      <div class="content-box custombox">
        <div class="bigtitle">
          一键开启个性定制空间
        </div>
        <div class="subtitle">
          专业的解决方案、先进的产品助您实现业务爆发式增长
        </div>
        <div class="formitem">
          <router-link to="">
            <input type="text" placeholder="请输入您的手机号码" >
            <div class="input-btn" >立即联系</div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <by-footer></by-footer>

  </div>
</template>

<script>
import Swiper from 'swiper'
import ByHeader from '../view/ByHeader.vue'
import ByFooter from '../view/ByFooter.vue'
export default {
  name: 'home',
  components: { ByHeader, ByFooter },
  data() {
    return {
      bannerList: [],
      newslist: [
        {
          name: "工业互联网:或成经济复苏下一推手",
          abstracttitle: "经济复苏的下一个推手在哪里?在工业界,一个新概念正试图回答这个问题，日前在北京举办的工业互联网..."
        },
        {
          name: "工业互联网:或成经济复苏下一推手",
          abstracttitle: "经济复苏的下一个推手在哪里?在工业界,一个新概念正试图回答这个问题，日前在北京举办的工业互联网..."
        },
        {
          name: "工业互联网:或成经济复苏下一推手",
          abstracttitle: "经济复苏的下一个推手在哪里?在工业界,一个新概念正试图回答这个问题，日前在北京举办的工业互联网..."
        }
      ],
    }
  },
  created() {
    this.asyncData()
  },
  mounted() {
    // new Swiper ('.swiper-container', {
    //     loop: true,
    //     // 如果需要分页器
    //     pagination: '.swiper-pagination',
    //     // 如果需要前进后退按钮
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     // 如果需要滚动条
    //     scrollbar: '.swiper-scrollbar',
    //     // 如果需要自动切换海报
    //     autoplay: {
    //       delay: 1000,//时间 毫秒
    //       disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
    //     },
    //   })
  },
  methods: {
    async asyncData() {
      const { data: response } = await this.$http.get(`http://112.27.250.90:33333/website/banner`);
      // console.log(response)
      this.bannerList = response.data;
      console.log(this.bannerList);
      // return {
      //     bannerList: response.data || [],
      //     console.log(response)
      // }
    },
  },
  watch: {
    bannerList() {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          // autoplay:3000,
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: 2000,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.page-banner {
  max-width: 1920px;
  width: 100%;
  height: auto;
}

.pageswiper img{
  width: 100%;
  height: 100%;
}
.content-img-box {
  max-width: 1920px;
  max-height: 756px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  .bg {
    width: 100%;
    height: auto;
    float: left;
  }

  .content-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    .legend {
      text-align: center;
      margin-top: 48px;

      h1 {
        font-weight: 700;
        color: #000;
      }

      h4 {
        color: rgba(0, 0, 0, 0.3);
        line-height: 40px;
      }
    }

    .content-list {
      position: relative;
      margin-top: 48px;
      width: 100%;
      padding: 0 59px;

      &::after {
        display: block;
        content: "";
        clear: both;
      }

      .content-item {
        float: left;
        width: 33.33%;
        padding: 0 1.665%;
        display: inline-block;
        vertical-align: top;
        cursor: pointer;

        &::after {
          display: block;
          content: "";
          clear: both;
        }

        .img-box {
          position: relative;

          .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            z-index: 9;
            display: none;

            .mask-content {
              position: relative;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .sudoku {
                display: grid;
                gap: 5px;
                grid-template-rows: 10px 10px 10px;
                grid-template-columns: 10px 10px 10px;
                margin-bottom: 16px;

                li {
                  background-color: #fff;
                }
              }

              p.txt {
                color: #fff;
                width: 60%;
                text-align: center;
              }
            }
          }

          img {
            width: 100%;
            border: none;
            height: auto;
          }
        }

        .prod-profile {
          padding: 12px 8px;
          background-color: rgb(247, 248, 251);
          text-align: center;
          transition: all 0.3s ease-in-out;

          h3 {
            font-weight: 700;
            font-size: 24px;
          }

          .txt {
            color: rgba(0, 0, 0, 0.3);
            line-height: 32px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }

        &:hover {
          .img-box .mask {
            display: block;
          }

          .prod-profile {
            background-color: rgb(27, 95, 198);

            h3 {
              color: #fff;
            }

            .txt {
              color: rgba(255, 255, 255, 0.4);
            }
          }
        }
      }
    }

    .wrap {
      height: 497px;
      margin-top: 48px;
      padding: 0 156px;

      .leftbigpic-box {
        float: left;
        width: 45%;
        overflow: hidden;

        .news-link {
          display: block;

          .newsimg-box {
            width: 100%;
            height: 365px;

            img {
              width: 100%;
              height: 100%;
              border: none;
            }
          }
        }
      }

      .rightlist-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 48%;
        height: 100%;
        width: 45%;

        .news-item {
          .text-box .text-profile {
            font-size: 18px;
          }
        }
      }

      .text-box {
        padding: 24px 20px;
        color: #000;
        background-color: #fff;

        .text-profile {
          font-size: 24px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          line-height: 36px;
        }

        .text-subtitle {
          color: rgb(151, 151, 151);
        }
      }
    }
  }

  .custombox {
    padding: 150px 160px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;

    .bigtitle {
      line-height: 48px;
      font-size: 36px;
      padding: 12px 0;
    }

    .subtitle {
      font-size: 18px;
      padding: 10px 30px 26px;
    }

    .formitem {
      position: relative;
      display: inline-block;
      line-height: 50px;
      height: 50px;
      width: 420px;
      max-width: 320px;

      input {
        display: inline-block;
        height: 100%;
        width: 100%;
        padding-left: 12px;
        outline: none;
      }

      .input-btn {
        position: absolute;
        z-index: 10;
        height: 100%;
        top: 2px;
        right: 0;
        padding: 0 25px;
        background-color: #000;
        color: #fff;

      }
    }
  }
}

.content-imgleft-box {
  padding: 24px 186px 48px;

  .wrap {
    position: relative;
    box-sizing: border-box;

    &::after {
      display: block;
      content: "";
      clear: both;
    }

    .leftbg {
      position: relative;
      float: left;
      width: 40%;
      height: 524px;

      &::after {
        position: absolute;
        left: -10px;
        top: 10px;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgb(213, 226, 245);
      }

      img {
        border: none;
        width: 100%;
        height: 100%;
      }
    }

    .right-content {
      margin-left: 45%;

      .legend {
        padding-top: 24px;

        h1 {
          font-weight: 700;
          color: #000;
        }

        h4 {
          color: rgba(0, 0, 0, 0.3);
          line-height: 40px;
        }
      }

      .text-profile {
        margin-top: 38px;
        line-height: 36px;
        font-size: 24px;
      }

      .tipsloop {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 24px 0;
        margin-top: 24px;
        overflow: hidden;

        .loop-item {
          position: relative;
          width: 160px;
          height: 160px;
          margin-right: 24px;
          border-radius: 50%;
          border: 10px solid transparent;
          border-top-color: #000;
          border-bottom-color: #f1f2f3;
          border-right-color: #f1f2f3;
          border-left-color: #f1f2f3;
          z-index: 10;
          transform: rotate(45deg); //顺时针旋转45°
          transform-origin: 50% 50%;

          .content-box {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-wrap: wrap;
            transform: rotate(-45deg);
            padding: 12px;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}

.whitebox {
  padding: 48px 152px 0;
  width: 100%;
}

.content-bgimg-box {
  position: relative;
  background: url('../assets/img/cloud.png') no-repeat;
  background-position: top left;
  background-size: 100% 514px;
  width: 100%;
  max-width: 1920px;
  height: 800px;
  padding: 54px 84px;
  background-color: rgb(247, 248, 251);
  color: #fff;

  .wrap {
    position: relative;

    .legend {
      margin-bottom: 24px;

      h1 {
        font-weight: 700;
        color: #FFF;

        span {
          font-weight: 400 !important;
          color: rgba(255, 255, 255, 0.3);
          font-size: 26px;
        }
      }
    }

    .text-profile {
      max-width: 40%;
      font-size: 20px;
      line-height: 28px;
      padding-bottom: 24px;
    }

    .tipsloop {
      position: absolute;
      display: flex;
      justify-content: center;
      gap: 48px;
      z-index: 10;
      width: 100%;
      top: 270px;
      left: 0;

      .loop-item {
        background-color: #fff;
        padding: 70px 48px;
        color: #000;

        .content-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .icon {
            margin-bottom: 12px;

            svg {
              width: 65px;
              height: 65px;
            }
          }

          .txt-t {
            line-height: 36px;
            font-size: 24px;
          }

          .txt {
            display: inline-block;
            max-width: 240px;
            text-align: center;
            line-height: 21px;
            font-size: 14px;
            height: 100px;
            padding: 24px 0;
          }

          .likebtn {
            padding: 8px 36px;
            background-color: #000;
            color: #fff;
          }
        }

        &:hover {
          .content-box .icon svg {
            fill: currentColor;
            color: #000;
          }

          .content-box .txt-t {
            color: #000;
          }

          .content-box .likebtn {
            background-color: #000;
          }
        }
      }
    }
  }
}

.content-img-box {
  margin-top: 30px;
}

.likebtn {
  margin-top: 35px;
}

// .input-btn {
//     margin-top: 1px;
// }
</style>
