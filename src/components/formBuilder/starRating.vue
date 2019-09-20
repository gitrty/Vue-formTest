<template>
  <div class="toyo-starRating" data-sub="toyo-starRating">
    <div class="cont clearfix">
      <p>{{opt.title}}</p>
      <el-rate v-model="opt.value1" style="float:left"></el-rate>
      <span class="zero" @click="toZero">×</span>
    </div>
    <div class="help">{{opt.help}}</div>

    <div class="handle">
      <div class="handle1">
        <i class="el-icon-rank"></i>
      </div>
      <div class="handle2">
        <i class="el-icon-plus"></i>
      </div>
      <div class="handle3">
        <i class="el-icon-close"></i>
      </div>
    </div>

    <div class="nature">
      <p>标题:</p>
      <input type="text" v-model="opt.title" />
      <p>评价说明:</p>
      <input type="text" v-model="opt.help" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opt: {
      type: Object,
      default() {
        return {
          title: "starRating:",
          help: "填写帮助",
          value1: null
        };
      }
    }
  },
  methods: {
    toZero() {
      this.opt.value1 = null;
    }
  }
};
</script>

<style lang="less" scoped>
.toyo-starRating {
  padding: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0);
  position: relative;
}
.cont {
  font-size: 16px;
  font-weight: 900;
  color: #606266;
  white-space: nowrap;
  p {
    float: left;
    // display: inline-block;
    width: 150px;
    text-align: right;
    padding: 0 10px;
  }
  input {
    width: 70%;
    height: 30px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 4px;
    color: #005588;
    margin-right: 20px;
    text-indent: 10px;
  }
}
.help {
  padding-left: 150px;
  font-size: 14px;
  margin-top: 4px;
}
.zero {
  float: left;
  cursor: pointer;
  font-weight: normal;
  line-height: 22px;
}
</style>