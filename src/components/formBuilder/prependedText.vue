<template>
  <div class="toyo-prependedText" data-sub="toyo-prependedText">
    <div class="cont">
      <p>{{opt.title}}</p>
      <!-- <input type="text" :placeholder="textInput" /> -->
      <el-input :placeholder="opt.textInput" v-model="opt.input1" size="small" style="width:70%">
        <template slot="prepend">{{opt.tipInput}}</template>
      </el-input>
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
      <p>附加文字:</p>
      <input type="text" v-model="opt.tipInput" />
      <p>描述文字:</p>
      <input type="text" v-model="opt.textInput" />
      <p>填写帮助</p>
      <input type="text" v-model="opt.help" />
      <p>
        <input type="checkbox" v-model="opt.checked" /> 这个是必填项
      </p>
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
          title: "Prepended:",
          tipInput: "^_^",
          textInput: "placeholdel",
          help: "填写帮助",
          checked: false,
          input1: ""
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>
.toyo-prependedText {
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
    margin-right: 20px;
  }
}
.help {
  padding-left: 150px;
  font-size: 14px;
  margin-top: 4px;
}
</style>