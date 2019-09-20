<template>
  <div class="form-template">
    <component
      v-for="component in this.$store.state.systemList"
      :is="component.sub"
      :key="component.id"
      :opt="component.opt"
    ></component>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>