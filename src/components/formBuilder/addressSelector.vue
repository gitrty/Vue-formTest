<template>
  <div class="toyo-addressSelector" data-sub="toyo-addressSelector" >
    <div class="cont">
      <p>{{title}}</p>
      <el-select v-model="value" placeholder="请选择" style="width:90px;margin-right:10px">
        <el-option
          v-for="(item,index) in options"
          :key="index"
          :label="item.label"
          :value="item.value"
          size="small"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择" style="width:90px;margin-right:10px">
        <el-option
          v-for="(item,index) in options"
          :key="index"
          :label="item.label"
          :value="item.value"
          size="small"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择" style="width:90px;margin-right:10px">
        <el-option
          v-for="(item,index) in options"
          :key="index"
          :label="item.label"
          :value="item.value"
          size="small"
        ></el-option>
      </el-select>
      <div class="add-ipt">
        <el-input :placeholder="textInput" style="width:70%" size="small"></el-input>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Address:",
      textInput: "placeholdel",
      help: "填写帮助",
      options: [
        {
          label: "黄金糕"
        },
        {
          label: "双皮奶"
        }
      ],
      value: ""
    };
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.toyo-addressSelector {
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
.add-ipt {
  margin-left: 150px;
  margin-top: 10px;
}
</style>