<template>
  <div class="support">
    <by-header class="header"></by-header>
    <div class="down">
      <p>欢迎使用本源物联资料下载服务</p>
      <div class="one">
        <el-input placeholder="请输入内容" class="input-with-select" style="height: 70px;" v-model="input">
          <el-button slot="append">立即查询</el-button>
        </el-input>
      </div>
      <div class="prod">
        <p>请按产品分类或具体产品型号，查找您所需要的信息</p>
      </div>
      <div class="search" >
        按产品分类搜索：
        <el-select clearable  placeholder="请选择" v-model="name" >
          <el-option v-for="(item,index) in categoryList" :key="index" :value="item.id"  :label="item.name">
          </el-option>
        </el-select>
        <el-select clearable placeholder="请选择"  v-model="name" >
          <el-option v-for="(res,index) in categoryList.children"  :key="index" :value="res.id"  :label="res.name">
          </el-option>
        </el-select>
        <el-select clearable placeholder="请选择">
          <el-option>
          </el-option>
        </el-select>
        <el-button slot="append">点击查询</el-button>
        <br>
        <div class="type">
          <div class="type-search">按产品型号搜索：
            <!-- <el-input placeholder="请输入产品型号" style="width:386px"> </el-input>
          <el-button slot="append" class="dianji">点击查询</el-button> -->
          </div>
          <div class="type-input">
            <el-input placeholder="请输入产品型号" style="width:386px" v-model="type"> </el-input>
            <el-button slot="append" class="dianji">点击查询</el-button>
          </div>
        </div>
      </div>
      <div class="prod">
        <p>热门产品 (点击展示产品资料)</p>
      </div>
    </div>
    {{categoryList}}
  </div>
</template>

<script>
import ByHeader from "../../view/ByHeader.vue";
export default {
  name: "support",
  components: { ByHeader },
  data() {
    return {
      input: '',
      type:'',
      categoryList:[],
      value:'',
      name:''
    }
  },
  created() {
    this.getUserList();
  },
  methods:{
     async getUserList() {
      const { data: res } = await this.$http.get(
        `http://112.27.250.90:33333/website/product`
      );
      this.categoryList = res.data;
      console.log(this.categoryList)
     }
  }
};
</script>

<style scoped>
.down {
  text-align: center;
  margin-top: 110px;
}

.support p {
  font-weight: 700;
  font-size: 46px;
  color: rgb(0, 0, 0);

}

.one {
  margin: auto;
  width: 758px;
  height: 71px;
  margin-top: 20px;
}

input {
  float: left;
  width: 517px;
  height: 71px;
  border: 1px solid rgb(217, 217, 217);
}

.button {
  float: left;
  width: 231px;
  height: 71px;
  background-color: rgb(27, 95, 198);
  line-height: 71px;
  color: #fff;
}

.prod {
  margin: auto;
  margin-top: 20px;
  width: 1260px;
  height: 50px;
  background-color: rgb(27, 95, 198);
}

.prod p {
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  font-weight: 400;
  text-align: left;
  margin-left: 20px;
}

.search {
  width: 1260px;
  height: 133px;
  margin-top: 20px;
  margin: 20px auto;

}

.type {
  margin-top: 25px;
}

.el-select {
  margin-right: 35px;
}

.dianji {
  margin-left: 70px;
}

.el-select {
  margin-left: 30px;
}

.type-search {
  float: left;
  width: 150px;
  height: 40px;
  line-height: 40px;
  /* background-color: pink; */
}

.type-input {
  /* background-color: skyblue; */
  width: 623px;
  height: 50px;
  float: left;
}
</style>
<style>
.el-input.el-input--suffix {
  width: 270px;
}

.el-input-group__append {
  width: 230px;
}

.el-input-group--append .el-input__inner,
.el-input-group__prepend {

  height: 70px;
}

.el-input-group__append {
  background-color: rgb(27, 95, 198);
  color: #fff;
  font-size: 20px;
}
</style>