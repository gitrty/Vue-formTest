<template>
  <div class="toyo-button" data-sub="toyo-button">
    <div class="cont">
      <p>{{opt.title}}</p>
      <el-button :type="opt.tabq" size="small">{{opt.textInput}}</el-button>
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
      <p>按钮文字:</p>
      <input type="text" v-model="opt.textInput" />
      <p>风格</p>
      <el-select v-model="opt.value" placeholder="primary" @change="tabFg($event)">
        <el-option
          v-for="item in opt.options"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        ></el-option>
      </el-select>
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
          title: "",
          textInput: "submit",
          help: "风格",
          tabq: "primary",
          options: [
            {
              value: "",
              label: "default"
            },
            {
              value: "1",
              label: "primary"
            },
            {
              value: "2",
              label: "success"
            },
            {
              value: "3",
              label: "info"
            },
            {
              value: "4",
              label: "warning"
            },
            {
              value: "5",
              label: "danger"
            }
          ],
          value: ""
        };
      }
    }
  },
  methods: {
    tabFg(ev) {
      this.opt.tabq = ev;
    }
  }
};
</script>

<style lang="less" scoped>
.toyo-button {
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