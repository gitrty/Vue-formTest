<template>
  <div class="toyo-numberInput" data-sub="toyo-numberInput">
    <div class="cont">
      <p>{{opt.title}}</p>
      <input type="number" v-model="opt.num" @input="isChecked" @focus="isChecked" />
    </div>
    <div class="isChecked" v-if="opt.checked">
      <span v-show="showhid">· 不能为空</span>
    </div>
    <div class="help" v-show="showhid">{{opt.help}}</div>

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
          title: "Number Input:",
          num: "",
          help: "填写帮助",
          checked: false
        };
      }
    }
  },
  data() {
    return {
      showhid: false
    };
  },
  methods: {
    isChecked(ev) {
      ev.currentTarget.value.length > 0
        ? (this.showhid = false)
        : (this.showhid = true);
    }
  }
};
</script>

<style lang="less" scoped>
.toyo-numberInput {
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