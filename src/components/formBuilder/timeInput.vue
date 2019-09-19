<template>
  <div class="toyo-timeInput" data-sub="toyo-timeInput">
    <div class="cont">
      <p>{{title}}</p>
      <el-date-picker v-model="num" type="datetime" placeholder="选择日期时间" size="small"></el-date-picker>
    </div>
    <div class="help">{{help}}</div>

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
      <input type="text" v-model="title" />
      <p>填写帮助</p>
      <input type="text" v-model="help" />
      <p>
        <input type="checkbox" v-model="checked" /> 这个是必填项
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Time Input:",
      num: "",
      help: "填写帮助",
      checked: false
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.toyo-timeInput {
  padding: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0);
  position: relative;
}
.cont {
  font-size: 16px;
  font-weight: 900;
  color: #555555;
  white-space: nowrap;
  p {
    display: inline-block;
    width: 150px;
    text-align: right;
    padding: 0 10px;
  }
  input {
    width: 70%;
    height: 30px;
    border: 1px solid #99aabb;
    border-radius: 4px;
    padding: 0 4px;
    color: #005588;
    // margin-bottom: 10px;
    // margin-top: 10px;
    margin-right: 20px;
  }
}
.help {
  padding-left: 150px;
  font-size: 14px;
  margin-top: 4px;
}
</style>