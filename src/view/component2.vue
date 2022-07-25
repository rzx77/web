<template>
  <div class="component2">
    <el-table :data="secondDetail" border style="width: 100%" :header-cell-style="{background:'#000',color:'rgb(255, 242, 242)'}">
      <el-table-column proo="primaryPicture" label="产品" width="300">
         <template slot-scope="scope">
              <img :src="scope.row.primaryPicture" alt="" width="80%">
         </template>
      </el-table-column>
      <el-table-column prop="name" label="型号" width="160">
         <template slot-scope="scope">
        <a class="name" @click="test(scope.row.id)">{{scope.row.name}}</a>
      </template>
      </el-table-column>
      <el-table-column prop="feature" label="特征/简介" width="210"></el-table-column>
      <el-table-column prop="size" label="尺寸" width="220"> </el-table-column>
      <el-table-column prop="inter_face" label="接口" width="160"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "component2",
  props:['secondDetail'],
  data() {
    return {
      // detail:this.secondDetail
    }
  },
  methods: {
    test(id) {
      console.log(id)
      this.$router.push('/detail/'+id)
    }
  },
};
</script>

<style>
.name{
  color: rgb(68, 68, 68);
}
.el-table__header{
  /* background-color: #000; */
}
.cell {
  font-size: 16px;
  text-align: center;
  font-weight: 400;
}
.cell img {
  width: 100%;
}
.el-table--scrollable-y .el-table__body-wrapper {overflow: hidden !important}
.el-table--scrollable-x .el-table__body-wrapper {overflow: hidden !important}
</style>
