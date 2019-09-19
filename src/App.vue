<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.$nextTick(() => {
    this.dargSub();
    this.addSub();
    this.delSub();
    // });
  },
  methods: {
    // 1 - 移动位置
    dargSub() {
      let handleList = document.querySelectorAll(".handle>.handle1");
      handleList.forEach((el, index) => {
        // 鼠标按下
        el.onmousedown = ev => {
          el.parentNode.parentNode.style.position = "absolute";
          el.parentNode.parentNode.style.zIndex = "50";

          ev = ev || window.event;
          let disY = ev.pageY - el.parentNode.parentNode.offsetTop;
          // 鼠标移动
          document.onmousemove = ev => {
            el.parentNode.parentNode.style.top = ev.pageY - disY + "px";
          };
          // 鼠标松开
          document.onmouseup = () => {
            document.onmousemove = document.onmouseup = null;
            el.parentNode.parentNode.style.position = "relative";
            el.parentNode.parentNode.style.top = 0;

            let x = index;
            let y = 4;
            let arr = this.$store.state.componentList;
            arr.splice(x, 1, ...arr.splice(y, 1, arr[x]));
          };
        };
      });
    },
    // 2 - 复制该组件
    addSub() {
      let handleList2 = document.querySelectorAll(".handle>.handle2");
      handleList2.forEach((el, index) => {
        el.onclick = () => {
          let newSub = el.parentNode.parentNode.getAttribute("data-sub");
          let maxId = 1;
          this.$store.state.componentList.forEach(el => {
            if (el.id > maxId) {
              maxId = el.id;
            }
          });
          // console.info(maxId);
          this.$store.state.componentList.splice(index + 1, 0, {
            id: maxId + 1,
            sub: newSub
          });
          // console.info(this.$store.state.componentList);
        };
      });
    },
    // 3 - 删除该组件
    delSub() {
      let handleList3 = document.querySelectorAll(".handle>.handle3");
      handleList3.forEach((el, index) => {
        el.onclick = () => {
          this.upData();
          this.$store.state.componentList.splice(index, 1);
          console.info(this.$store.state.componentList);
          this.upData();
        };
      });
    },
    upData() {
      this.dargSub();
      this.addSub();
      this.delSub();
      this.$forceUpdate();
    }
  },
  computed: {
    subList() {
      return this.$store.state.componentList;
    }
  },
  watch: {
    subList(old, newd) {
      this.upData();
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
