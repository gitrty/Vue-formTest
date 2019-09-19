<template>
  <div class="toyo-checkboxes" data-sub="toyo-checkboxes">
    <div class="cont clearfix">
      <p>{{title}}</p>

      <el-checkbox-group v-model="nodelist" style="width:70%;float:left;">
        <div v-for="(item,index) in options" :key="index">
          <el-checkbox :label="item.label" size="small"></el-checkbox>
        </div>
      </el-checkbox-group>
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
      <input type="text" v-model="title" />
      <p>列表项:</p>
      <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="selectAll" @input="onInput"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "checkboxes:",
      textInput: "placeholdel",
      selectAll: "qwe\nasd\nzxc\n",
      options: [
        {
          label: "黄金糕"
        }
      ],
      nodelist: [],
      value: ""
    };
  },
  created() {
    this.editInput();
  },
  methods: {
    onInput() {
      this.editInput();
    },
    editInput() {
      let selectList = this.selectAll.split("\n");
      selectList.splice(selectList.length - 1, 1);
      this.options = [];
      selectList.forEach(item => {
        this.options.push({ label: item });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.toyo-checkboxes {
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
    // display: inline-block;
    width: 150px;
    text-align: right;
    padding: 0 10px;
    float: left;
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