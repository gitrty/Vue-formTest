<template>
  <div class="formBuilder">
    <div class="user-forms">
      <div class="user-top"></div>
      <div class="user-con">
        <component
          v-for="component in $store.state.componentList"
          :is="component.sub"
          :key="component.id"
          :opt="component.opt"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
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