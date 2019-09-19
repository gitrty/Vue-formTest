<template>
  <div class="formBuilder">
    <!-- top -->
    <div class="build-top">
      <button>
        <i class="el-icon-finished"></i>
        保存
      </button>
      <button>
        <i class="el-icon-finished"></i>
        保存为模板
      </button>
      <button>
        <i class="el-icon-setting"></i>
        表单设置
      </button>
    </div>

    <!-- left 组件库 -->
    <div :class="['build-left',navshow?'navshow':'navhidden']">
      <div class="build-left-tit">部件库</div>
      <!-- select 框 -->
      <div class="snippetPicker">
        <select id="selSnips" class="categories" v-model="selected">
          <option value="all">all</option>
          <option value="input">输入框</option>
          <option value="select">列表选择</option>
          <option value="radioCheck">单选、多选</option>
          <option value="fileButton">文件、按钮</option>
        </select>
      </div>

      <!-- 左侧 组件 -->
      <div class="snippetList">
        <div
          class="ui-draggable"
          v-for="item in imgList"
          :key="item.id"
          @mousedown.prevent="darg(item.id,item.sub,$event)"
        >
          <img :src="item.src" />
        </div>
      </div>

      <!-- 显示/隐藏 -->
      <div class="showhid" @click="tabNav">
        <i :class="[navshow?'el-icon-arrow-left':'el-icon-arrow-right']"></i>
      </div>
    </div>

    <!-- right 组件属性 -->
    <div :class="['build-right',panelshow?'panelshow':'panelhidden']">
      <div class="build-left-tit">属性</div>

      <!-- 组件属性 -->
      <div class="build-right-con"></div>

      <!-- 显示/隐藏 -->
      <div class="showhid2" @click="tabNav2">
        <i :class="[panelshow?'el-icon-arrow-right':'el-icon-arrow-left']"></i>
      </div>
    </div>

    <!-- middle 自定义表单区域 -->
    <div class="build-container" :style="{'padding-left':pl,'padding-right':pr}">
      <div class="container-con">
        <component
          v-for="component in $store.state.componentList"
          :is="component.sub"
          :key="component.id"
          @click.native="edit(component.id,component.sub,$event)"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import { vue } from "../main";
export default {
  data() {
    return {
      navshow: true,
      panelshow: true,
      pl: "240px",
      pr: "240px",
      input: "",
      selected: "all",
      natureObj: {},
      imgList: [
        { id: 1, src: require(`../assets/images/fl1.png`), sub: "toyo-title" },
        {
          id: 2,
          src: require(`../assets/images/fl2.png`),
          sub: "toyo-textInput"
        },
        {
          id: 3,
          src: require(`../assets/images/fl3.png`),
          sub: "toyo-numberInput"
        },
        {
          id: 4,
          src: require(`../assets/images/fl4.png`),
          sub: "toyo-dateInput"
        },
        {
          id: 5,
          src: require(`../assets/images/fl5.png`),
          sub: "toyo-timeInput"
        },
        {
          id: 6,
          src: require(`../assets/images/fl6.png`),
          sub: "toyo-prependedText"
        },
        {
          id: 7,
          src: require(`../assets/images/fl7.png`),
          sub: "toyo-appendedText"
        },
        {
          id: 8,
          src: require(`../assets/images/fl8.png`),
          sub: "toyo-textarea"
        },
        {
          id: 9,
          src: require(`../assets/images/fl9.png`),
          sub: "toyo-selectBasic"
        },
        {
          id: 10,
          src: require(`../assets/images/fl10.png`),
          sub: "toyo-addressSelector"
        },
        {
          id: 11,
          src: require(`../assets/images/fl11.png`),
          sub: "toyo-selectMultiple"
        },
        {
          id: 12,
          src: require(`../assets/images/fl12.png`),
          sub: "toyo-checkboxes"
        },
        {
          id: 13,
          src: require(`../assets/images/fl13.png`),
          sub: "toyo-radioButtons"
        },
        {
          id: 14,
          src: require(`../assets/images/fl14.png`),
          sub: "toyo-inlineCheckBoxes"
        },
        {
          id: 15,
          src: require(`../assets/images/fl15.png`),
          sub: "toyo-inlineRadioButtons"
        },
        {
          id: 16,
          src: require(`../assets/images/fl16.png`),
          sub: "toyo-starRating"
        },
        {
          id: 17,
          src: require(`../assets/images/fl17.png`),
          sub: "toyo-fileUpload"
        },
        {
          id: 18,
          src: require(`../assets/images/fl18.png`),
          sub: "toyo-button"
        }
      ]
    };
  },
  methods: {
    tabNav() {
      this.navshow = !this.navshow;
      this.navshow ? (this.pl = "240px") : (this.pl = "0px");
    },
    tabNav2() {
      let current = document.querySelectorAll(".container-con>div");
      this.panelshow = !this.panelshow;
      this.panelshow ? (this.pr = "240px") : (this.pr = "0px");
      if (!this.panelshow) {
        current.forEach(el => {
          el.querySelector(".nature").style.display = "none";
        });
      } else {
        current.forEach(el => {
          if (el.getAttribute("class").indexOf("data-active") > 0) {
            el.querySelector(".nature").style.display = "block";
          }
        });
      }
    },
    edit(id, sub, ev) {
      // 控制点击后边框 与 左上操作项的显示
      let currentList = document.querySelectorAll(".container-con>div");
      currentList.forEach(el => {
        el.classList.remove("data-active");
        el.classList.remove("bd1");
        el.querySelector(".handle").style.display = "none";
        if (this.panelshow) {
          el.querySelector(".nature").style.display = "none";
        }
      });
      ev.currentTarget.classList.add("data-active");
      ev.currentTarget.classList.add("bd1");
      ev.currentTarget.querySelector(".handle").style.display = "block";
      if (this.panelshow) {
        ev.currentTarget.querySelector(".nature").style.display = "block";
      }
      // 点击后添加操作选项
      this.$store.state.componentId = id;
      this.$store.state.componentSub = sub;
    },
    // 1 -鼠标按下
    darg(id, sub, ev) {
      let newDiv = document.createElement("div");
      newDiv.style.width = "180px";
      newDiv.style.height = "50px";
      newDiv.style.border = "4px solid #ccc";
      newDiv.style.position = "fixed";
      newDiv.style.zIndex = "9999";
      newDiv.style.top = ev.clientY - 25 + "px";
      newDiv.style.left = ev.clientX - 90 + "px";
      newDiv.style.cursor = "move";
      document.body.appendChild(newDiv);
      // 2 - 鼠标移动
      document.onmousemove = ev => {
        newDiv.style.top = ev.clientY - 25 + "px";
        newDiv.style.left = ev.clientX - 90 + "px";

        // 判断是否拖拽到了表单内
        let parentNode = document.querySelector(".container-con");
        let component = document.querySelectorAll(".container-con>div");
        if (
          newDiv.offsetLeft >= parentNode.offsetLeft &&
          newDiv.offsetLeft + newDiv.offsetWidth <=
            parentNode.offsetLeft + parentNode.offsetWidth &&
          parentNode.offsetTop <= newDiv.offsetTop
        ) {
          let temIndex = 100;
          Array.from(component).some((el, index) => {
            if (
              newDiv.offsetTop + document.documentElement.scrollTop <
              el.offsetTop
            ) {
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
        }
      };
      // 3 - 鼠标松开
      document.onmouseup = () => {
        let parentNode = document.querySelector(".container-con");
        let component = document.querySelectorAll(".container-con>div");
        // 鼠标松开时将显示的要放置位置的提示块删除
        component.forEach(item => {
          item.style.borderTop = "1px solid rgba(0,0,0,0)";
          item.style.borderBottom = "1px solid rgba(0,0,0,0)";
        });
        // 判断是否拖拽到了表单内
        if (
          newDiv.offsetLeft >= parentNode.offsetLeft &&
          newDiv.offsetLeft + newDiv.offsetWidth <=
            parentNode.offsetLeft + parentNode.offsetWidth &&
          parentNode.offsetTop <= newDiv.offsetTop
        ) {
          //temIndex - 要插入节点的位置
          let temIndex = 100;
          Array.from(component).some((el, index) => {
            if (
              newDiv.offsetTop + document.documentElement.scrollTop <
              el.offsetTop
            ) {
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
            this.$store.state.componentList.push({ id: maxId + 1, sub: sub });
          } else {
            this.$store.state.componentList.splice(temIndex, 0, {
              id: maxId + 1,
              sub: sub
            });
          }
        }
        // console.info(component[17].offsetTop);
        // console.info(newDiv.offsetTop + document.documentElement.scrollTop);

        document.onmousemove = document.onmouseup = null;
        newDiv.remove();
      };
    }
  },
  watch: {
    selected(newd, old) {
      switch (newd) {
        case "all":
          this.imgList = [
            {
              id: 1,
              src: require(`../assets/images/fl1.png`),
              sub: "toyo-title"
            },
            {
              id: 2,
              src: require(`../assets/images/fl2.png`),
              sub: "toyo-textInput"
            },
            {
              id: 3,
              src: require(`../assets/images/fl3.png`),
              sub: "toyo-numberInput"
            },
            {
              id: 4,
              src: require(`../assets/images/fl4.png`),
              sub: "toyo-dateInput"
            },
            {
              id: 5,
              src: require(`../assets/images/fl5.png`),
              sub: "toyo-timeInput"
            },
            {
              id: 6,
              src: require(`../assets/images/fl6.png`),
              sub: "toyo-prependedText"
            },
            {
              id: 7,
              src: require(`../assets/images/fl7.png`),
              sub: "toyo-appendedText"
            },
            {
              id: 8,
              src: require(`../assets/images/fl8.png`),
              sub: "toyo-textarea"
            },
            {
              id: 9,
              src: require(`../assets/images/fl9.png`),
              sub: "toyo-selectBasic"
            },
            {
              id: 10,
              src: require(`../assets/images/fl10.png`),
              sub: "toyo-addressSelector"
            },
            {
              id: 11,
              src: require(`../assets/images/fl11.png`),
              sub: "toyo-selectMultiple"
            },
            {
              id: 12,
              src: require(`../assets/images/fl12.png`),
              sub: "toyo-checkboxes"
            },
            {
              id: 13,
              src: require(`../assets/images/fl13.png`),
              sub: "toyo-radioButtons"
            },
            {
              id: 14,
              src: require(`../assets/images/fl14.png`),
              sub: "toyo-inlineCheckBoxes"
            },
            {
              id: 15,
              src: require(`../assets/images/fl15.png`),
              sub: "toyo-inlineRadioButtons"
            },
            {
              id: 16,
              src: require(`../assets/images/fl16.png`),
              sub: "toyo-starRating"
            },
            {
              id: 17,
              src: require(`../assets/images/fl17.png`),
              sub: "toyo-fileUpload"
            },
            {
              id: 18,
              src: require(`../assets/images/fl18.png`),
              sub: "toyo-button"
            }
          ];
          break;
        case "input":
          this.imgList = [
            {
              id: 2,
              src: require(`../assets/images/fl2.png`),
              sub: "toyo-textInput"
            },
            {
              id: 3,
              src: require(`../assets/images/fl3.png`),
              sub: "toyo-numberInput"
            },
            {
              id: 4,
              src: require(`../assets/images/fl4.png`),
              sub: "toyo-dateInput"
            },
            {
              id: 5,
              src: require(`../assets/images/fl5.png`),
              sub: "toyo-timeInput"
            },
            {
              id: 6,
              src: require(`../assets/images/fl6.png`),
              sub: "toyo-prependedText"
            },
            {
              id: 7,
              src: require(`../assets/images/fl7.png`),
              sub: "toyo-appendedText"
            },
            {
              id: 8,
              src: require(`../assets/images/fl8.png`),
              sub: "toyo-textarea"
            }
          ];
          break;
        case "select":
          this.imgList = [
            {
              id: 9,
              src: require(`../assets/images/fl9.png`),
              sub: "toyo-selectBasic"
            },
            {
              id: 10,
              src: require(`../assets/images/fl10.png`),
              sub: "toyo-addressSelector"
            },
            {
              id: 11,
              src: require(`../assets/images/fl11.png`),
              sub: "toyo-selectMultiple"
            }
          ];
          break;
        case "radioCheck":
          this.imgList = [
            {
              id: 12,
              src: require(`../assets/images/fl12.png`),
              sub: "toyo-checkboxes"
            },
            {
              id: 13,
              src: require(`../assets/images/fl13.png`),
              sub: "toyo-radioButtons"
            },
            {
              id: 14,
              src: require(`../assets/images/fl14.png`),
              sub: "toyo-inlineCheckBoxes"
            },
            {
              id: 15,
              src: require(`../assets/images/fl15.png`),
              sub: "toyo-inlineRadioButtons"
            },
            {
              id: 16,
              src: require(`../assets/images/fl16.png`),
              sub: "toyo-starRating"
            }
          ];
          break;
        case "fileButton":
          this.imgList = [
            {
              id: 17,
              src: require(`../assets/images/fl17.png`),
              sub: "toyo-fileUpload"
            },
            {
              id: 18,
              src: require(`../assets/images/fl18.png`),
              sub: "toyo-button"
            }
          ];
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.formBuilder {
  height: 100%;
  background-color: #eee;
}

.build-top {
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  height: 38px;
  background: url(../assets/images/bar.gif) 0 0;
  padding-left: 6px;
  button {
    background: none;
    height: 24px;
    border-radius: 6px;
    padding: 0 4px;
    line-height: 24px;
    text-align: center;
    margin-top: 6px;
    margin-right: 4px;
    cursor: pointer;
    color: #005588;
    border: 1px solid rgba(0, 0, 0, 0);
    &:hover {
      background: linear-gradient(#fffefa, #f8e494);
      border: 1px solid #dac272;
    }
  }
}

.build-left {
  position: fixed;
  left: 0;
  margin-top: 38px;
  width: 240px;
  height: calc(100% - 38px);
  background-color: #f3f3f3;
  padding-right: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
  transition: all 0.5s;
}
.build-right {
  position: fixed;
  right: 0;
  margin-top: 38px;
  width: 240px;
  height: calc(100% - 38px);
  background-color: #f3f3f3;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
  // transition: all 0.5s;
}

.build-left-tit {
  width: 100%;
  height: 24px;
  background-color: #eff2f4;
  border-bottom: 1px solid #d2dbe5;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #e9f4ff;
    color: #005588;
  }
}

.snippetPicker {
  padding: 6px 10px;
}
.snippetList {
  height: 522px;
  overflow-y: auto;
  overflow-x: hidden;
  // background-color: pink;
  padding: 6px 10px;
}

.categories {
  display: block;
  width: 99%;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  height: 28px;
  line-height: 1;
  color: #454545;
  border-radius: 0px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 0px 4px;
  cursor: pointer;
  background: #fff;
}
select {
  color: #336699;
  border: 1px solid #abc;
  vertical-align: middle;
  margin: 0;
  min-height: 24px;
}
.showhid {
  width: 16px;
  height: 38px;
  position: absolute;
  top: 90px;
  right: -16px;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 0px 4px;
  line-height: 38px;
  text-align: center;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}
.showhid2 {
  width: 16px;
  height: 38px;
  position: absolute;
  top: 90px;
  left: -16px;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.2) -3px 0px 4px;
  line-height: 38px;
  text-align: center;
  border-radius: 6px 0 0 6px;
  cursor: pointer;
}
.navshow {
  transform: translate(0, 0);
}
.navhidden {
  transform: translate(-240px, 0);
}
.panelshow {
  transform: translate(0, 0);
}
.panelhidden {
  transform: translate(240px, 0);
}
.build-right-con {
  width: 100%;
  padding: 22px 20px;
}

.build-container {
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow-y: auto;
  padding-top: 100px;
  transition: all 0.5s;
}
.container-con {
  width: 90%;
  // height: 300px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 8px;
  padding: 36px 26px;
  > div {
    border: 1px solid rgba(0, 0, 0, 0);
    &:hover {
      border: 1px dashed #f1cdac !important;
    }
  }
}
.ui-draggable {
  cursor: move;
  margin: 1px 10px 12px 1px;
  padding: 0;
  float: left;
  background: #acacac;
}
</style>