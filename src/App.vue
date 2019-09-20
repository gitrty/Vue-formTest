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
    this.upData();
  },
  methods: {
    // 1 - 移动位置
    dargSub() {
      let handleList = document.querySelectorAll(".handle>.handle1");
      handleList.forEach((el, index) => {
        // 鼠标按下
        el.onmousedown = ev => {
          ev = ev || window.event;
          let disY = ev.pageY - el.parentNode.parentNode.offsetTop;

          let newEl = el.parentNode.parentNode.cloneNode(true);
          newEl.style.position = "absolute";
          newEl.style.zIndex = "50";
          newEl.style.top = ev.pageY - disY + "px";
          document.querySelector(".container-con").appendChild(newEl);

          this.$store.state.componentList.forEach((item, index) => {
            if (item.id == this.$store.state.componentId) {
              this.$store.state.componentList.splice(index, 1);
            }
          });

          // 鼠标移动
          document.onmousemove = ev => {
            newEl.style.top = ev.pageY - disY + "px";

            let component = document.querySelectorAll(".container-con>div");
            let temIndex = 100;
            Array.from(component).some((el, index) => {
              if (newEl.offsetTop < el.offsetTop) {
                temIndex = index;
                return true;
              }
            });
            // 鼠标移动时显示需要放置的位置
            if (temIndex == 100) {
              component.forEach(item => {
                item.style.borderBottom = "1px solid rgba(0,0,0,0)";
                item.style.borderTop = "1px solid rgba(0,0,0,0)";
              });
              component[component.length - 1].style.borderBottom =
                "6px solid #ccc";
            } else {
              component.forEach(item => {
                item.style.borderTop = "1px solid rgba(0,0,0,0)";
                item.style.borderBottom = "1px solid rgba(0,0,0,0)";
              });
              component[temIndex].style.borderTop = "8px solid #ccc";
            }
          };
          // 鼠标松开
          document.onmouseup = () => {
            let component = document.querySelectorAll(".container-con>div");
            // 鼠标松开时将显示的要放置位置的提示块删除
            component.forEach(item => {
              item.style.borderTop = "1px solid rgba(0,0,0,0)";
              item.style.borderBottom = "1px solid rgba(0,0,0,0)";
            });
            //temIndex - 要插入节点的位置
            let temIndex = 100;
            Array.from(component).some((el, index) => {
              if (newEl.offsetTop < el.offsetTop) {
                temIndex = index;
                return true;
              }
            });
            // 获取当前使用组件中 最大的id值
            let maxId = null;
            this.$store.state.componentList.forEach(el => {
              if (el.id > maxId) {
                maxId = el.id;
              }
            });
            if (temIndex == 100) {
              this.$store.state.componentList.push({
                id: maxId + 1,
                sub: this.$store.state.componentSub,
                opt: this.$store.state.componentOpt
              });
            } else {
              this.$store.state.componentList.splice(temIndex, 0, {
                id: maxId + 1,
                sub: this.$store.state.componentSub,
                opt: this.$store.state.componentOpt
              });
            }
            newEl.remove();
            document.onmousemove = document.onmouseup = null;
            this.upData();
          };
        };
      });
    },
    // 2 - 复制该组件
    addSub() {
      let handleList2 = document.querySelectorAll(".handle>.handle2");
      handleList2.forEach((el, index) => {
        el.onclick = () => {
          let maxId = null;
          let temIndex = null;
          this.$store.state.componentList.forEach((el, index) => {
            if (el.id > maxId) {
              maxId = el.id;
            }
            if (el.id == this.$store.state.componentId) {
              temIndex = index;
            }
          });
          this.$store.state.componentList.splice(temIndex + 1, 0, {
            id: maxId + 1,
            sub: this.$store.state.componentSub
          });
          this.upData();
        };
      });
    },
    // 3 - 删除该组件
    delSub() {
      let handleList3 = document.querySelectorAll(".handle>.handle3");
      handleList3.forEach((el, index) => {
        el.onclick = () => {
          this.$store.state.componentList.forEach((item, index) => {
            if (item.id == this.$store.state.componentId) {
              this.$store.state.componentList.splice(index, 1);
            }
          });
          this.upData();
        };
      });
    },
    upData() {
      this.$forceUpdate();
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
