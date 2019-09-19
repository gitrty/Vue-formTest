<template>
  <div class="toyo-title" data-sub="toyo-title">
    <div class="title-top">{{title}}</div>
    <div class="title-con">{{help}}</div>
    <div class="hr"></div>

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
      title: "什么什么活动报名表",
      help: "请如实填写,如有弄虚作假取消参与资格"
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.toyo-title {
  padding: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0);
  position: relative;
}
.title-top {
  font-size: 24px;
  font-weight: 900;
  color: #333;
}
.title-con {
  font-size: 14px;
  margin-top: 14px;
}
.hr {
  width: 100%;
  height: 2px;
  background-color: #eee;
  margin-top: 26px;
}
// .handle {
//   display: none;
//   position: absolute;
//   top: 0;
//   left: -28px;
//   font-size: 16px;
//   color: #fff;
//   font-weight: 900;
//   > div {
//     width: 25px;
//     height: 25px;
//     line-height: 25px;
//     text-align: center;
//     cursor: pointer;
//   }
//   .handle1 {
//     cursor: move;
//     border-radius: 4px 4px 0 0;
//     background-color: #afce01;
//   }
//   .handle2 {
//     background-color: #00acd6;
//   }
//   .handle3 {
//     border-radius: 0 0 4px 4px;
//     background-color: #f7632e;
//   }
// }
// .nature {
//   // display: none;
//   position: fixed;
//   right: 20px;
//   top: 80px;
//   z-index: 2;
//   p {
//     font-weight: 900;
//   }
//   input {
//     width: 202px;
//     height: 30px;
//     border: 1px solid #99aabb;
//     border-radius: 4px;
//     padding: 0 4px;
//     color: #005588;
//     margin-bottom: 10px;
//   }
// }
</style>