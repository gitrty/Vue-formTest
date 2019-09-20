<template>
  <div class="toyo-selectMultiple" data-sub="toyo-selectMultiple">
    <div class="cont">
      <p>{{opt.title}}</p>
      <el-input
        type="textarea"
        :rows="4"
        :placeholder="opt.textInput"
        v-model="opt.selectAll"
        style="width:70%"
      ></el-input>
    </div>

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
      <p>列表项:</p>
      <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="opt.selectAll"></el-input>
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
          title: "selectMultiple:",
          textInput: "placeholdel",
          selectAll: "qwe\nasd\nzxc\n"
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>
.toyo-selectMultiple {
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
    display: inline-block;
    width: 150px;
    text-align: right;
    padding: 0 10px;
    vertical-align: top;
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
</style>