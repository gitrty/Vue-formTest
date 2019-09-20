<template>
  <div class="formBuilder">
    <div class="user-forms">
      <div class="user-top"></div>
      <div class="user-con">
        <form action="#" id="formSubmit">
          <component
            v-for="component in $store.state.componentList"
            :is="component.sub"
            :key="component.id"
            :opt="component.opt"
          ></component>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("formSubmit").onsubmit = () => {
      let flag = true;
      this.$store.state.componentList.forEach((item, index) => {
        if (item.opt.checked) {
          if (
            !item.opt.input &&
            !item.opt.num &&
            !item.opt.input1 &&
            !item.opt.textarea
          ) {
            flag = false;
            document
              .getElementById("formSubmit")
              .children[index].querySelector(".isChecked>span").style.display =
              "block";
          }
        }
      });
      if (flag) {
        this.$alert("提交成功", "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        });
      } else {
        this.$message("请完善表格");
      }

      return false;
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.formBuilder {
  width: 100%;
  overflow-y: auto;
  padding: 50px 4%;
}
.user-forms {
  width: 80%;
  max-width: 750px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 8px;
}
.user-top {
  width: 100%;
  height: 40px;
  background-color: #65aadd;
  border-radius: 8px 8px 0 0;
}
.user-con {
  padding: 0 10px;
}
</style>