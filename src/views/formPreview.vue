<template>
  <div class="formBuilder">
    <div class="user-forms">
      <div class="user-top"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let nodeLists = this.$parseDom(this.$store.state.formHtml);
    nodeLists.style.padding = "0 14px";
    document.querySelector(".user-forms").appendChild(nodeLists);
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
</style>