<template>
  <div class="formBuilder">
    <!-- top - 保存模板 -->
    <div class="build-top">
      <button @click="$path('/formPreview')">
        <i class="el-icon-finished"></i>
        保存
      </button>
      <button @click="$path('/formPreview')">
        <i class="el-icon-finished"></i>
        保存为模板
      </button>
      <button @click="$path('/formTemplate')">
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

      <!-- 左侧 组件选项栏 -->
      <div class="snippetList">
        <div
          class="ui-draggable"
          v-for="item in $store.state.imgList"
          :key="item.id"
          @mousedown.prevent="darg(item.id,item.sub,item.opt,$event)"
        >
          <img :src="require(`../assets/images/fl${item.id}.png`)" />
        </div>
      </div>

      <!-- 左侧显示/隐藏 -->
      <div class="showhid" @click="tabNav">
        <i :class="[navshow?'el-icon-arrow-left':'el-icon-arrow-right']"></i>
      </div>
    </div>

    <!-- right 组件属性 -->
    <div :class="['build-right',panelshow?'panelshow':'panelhidden']">
      <div class="build-left-tit">属性</div>

      <!-- 组件属性 -->
      <div class="build-right-con"></div>

      <!-- 右侧显示/隐藏 -->
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
          :opt="component.opt"
          @click.native="edit(component.id,component.sub,component.opt,$event)"
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
      natureObj: {}
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
    edit(id, sub, opt, ev) {
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
      this.$store.state.componentOpt = opt;
    },
    // 1 -鼠标按下
    darg(id, sub, opt, ev) {
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
        if (component.length == 0) return;
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
            this.$store.state.componentList.push({
              id: maxId + 1,
              sub: sub,
              opt: opt
            });
          } else {
            this.$store.state.componentList.splice(temIndex, 0, {
              id: maxId + 1,
              sub: sub,
              opt: opt
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
          this.$store.state.imgList = [
            {
              id: 1,
              src: require(`../assets/images/fl1.png`),
              sub: "toyo-title",
              opt: {
                title: "什么什么活动报名表",
                help: "请如实填写,如有弄虚作假取消参与资格"
              }
            },
            {
              id: 2,
              src: require(`../assets/images/fl2.png`),
              sub: "toyo-textInput",
              input: "",
              opt: {
                title: "Text Input:",
                textInput: "placeholdel",
                help: "填写帮助",
                checked: false
              }
            },
            {
              id: 3,
              src: require(`../assets/images/fl3.png`),
              sub: "toyo-numberInput",
              opt: {
                title: "Number Input:",
                num: "",
                help: "填写帮助",
                checked: false
              }
            },
            {
              id: 4,
              src: require(`../assets/images/fl4.png`),
              sub: "toyo-dateInput",
              opt: {
                title: "Date Input:",
                num: "",
                help: "填写帮助",
                checked: false
              }
            },
            {
              id: 5,
              src: require(`../assets/images/fl5.png`),
              sub: "toyo-timeInput",
              opt: {
                title: "Time Input:",
                num: "",
                help: "填写帮助",
                checked: false
              }
            },
            {
              id: 6,
              src: require(`../assets/images/fl6.png`),
              sub: "toyo-prependedText",
              opt: {
                title: "Prepended:",
                tipInput: "^_^",
                textInput: "placeholdel",
                help: "填写帮助",
                checked: false,
                input1: ""
              }
            },
            {
              id: 7,
              src: require(`../assets/images/fl7.png`),
              sub: "toyo-appendedText",
              opt: {
                title: "Appended:",
                tipInput: "^_^",
                textInput: "placeholdel",
                help: "填写帮助",
                checked: false,
                input1: ""
              }
            },
            {
              id: 8,
              src: require(`../assets/images/fl8.png`),
              sub: "toyo-textarea",
              opt: {
                title: "textarea:",
                textInput: "placeholdel",
                textarea: "",
                help: "最多140个字符",
                checked: false,
                maxText: 140
              }
            },
            {
              id: 9,
              src: require(`../assets/images/fl9.png`),
              sub: "toyo-selectBasic",
              opt: {
                title: "SelectBasic:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n",
                options: [
                  {
                    label: "黄金糕"
                  },
                  {
                    label: "双皮奶"
                  }
                ],
                value: ""
              }
            },
            {
              id: 10,
              src: require(`../assets/images/fl10.png`),
              input: "",
              sub: "toyo-addressSelector",
              opt: {
                title: "Address:",
                input: "",
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
              }
            },
            {
              id: 11,
              src: require(`../assets/images/fl11.png`),
              sub: "toyo-selectMultiple",
              opt: {
                title: "selectMultiple:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n"
              }
            },
            {
              id: 12,
              src: require(`../assets/images/fl12.png`),
              sub: "toyo-checkboxes",
              opt: {
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
              }
            },
            {
              id: 13,
              src: require(`../assets/images/fl13.png`),
              sub: "toyo-radioButtons",
              opt: {
                title: "radioButtons:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n",
                options: [
                  {
                    label: "黄金糕"
                  }
                ],
                nodelist: [],
                radio: 1
              }
            },
            {
              id: 14,
              src: require(`../assets/images/fl14.png`),
              sub: "toyo-inlineCheckBoxes",
              opt: {
                title: "inlinecheck:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n",
                options: [
                  {
                    label: "黄金糕"
                  }
                ],
                nodelist: [],
                value: ""
              }
            },
            {
              id: 15,
              src: require(`../assets/images/fl15.png`),
              sub: "toyo-inlineRadioButtons",
              opt: {
                title: "inlineRadio:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n",
                options: [
                  {
                    label: "黄金糕"
                  }
                ],
                nodelist: [],
                radio: 1
              }
            },
            {
              id: 16,
              src: require(`../assets/images/fl16.png`),
              sub: "toyo-starRating",
              opt: {
                title: "starRating:",
                help: "填写帮助",
                value1: null
              }
            },
            {
              id: 17,
              src: require(`../assets/images/fl17.png`),
              sub: "toyo-fileUpload",
              opt: {
                title: "fileUpload:",
                help: "填写帮助",
                fileList: []
              }
            },
            {
              id: 18,
              src: require(`../assets/images/fl18.png`),
              sub: "toyo-button",
              opt: {
                title: "",
                textInput: "submit",
                help: "风格",
                tabq: "primary",
                options: [
                  {
                    value: "",
                    label: "default"
                  },
                  {
                    value: "1",
                    label: "primary"
                  },
                  {
                    value: "2",
                    label: "success"
                  },
                  {
                    value: "3",
                    label: "info"
                  },
                  {
                    value: "4",
                    label: "warning"
                  },
                  {
                    value: "5",
                    label: "danger"
                  }
                ],
                value: ""
              }
            }
          ];
          break;
        case "input":
          this.$store.state.imgList = [
            {
              id: 2,
              src: require(`../assets/images/fl2.png`),
              sub: "toyo-textInput",
              input: "",
              opt: {
                title: "Text Input:",
                textInput: "placeholdel",
                help: "填写帮助",
                checked: false
              }
            },
            {
              id: 3,
              src: require(`../assets/images/fl3.png`),
              sub: "toyo-numberInput",
              opt: {
                title: "Number Input:",
                num: "",
                help: "填写帮助",
                checked: false
              }
            },
            {
              id: 4,
              src: require(`../assets/images/fl4.png`),
              sub: "toyo-dateInput",
              opt: {
                title: "Date Input:",
                num: "",
                help: "填写帮助",
                checked: false
              }
            },
            {
              id: 5,
              src: require(`../assets/images/fl5.png`),
              sub: "toyo-timeInput",
              opt: {
                title: "Time Input:",
                num: "",
                help: "填写帮助",
                checked: false
              }
            },
            {
              id: 6,
              src: require(`../assets/images/fl6.png`),
              sub: "toyo-prependedText",
              opt: {
                title: "Prepended:",
                tipInput: "^_^",
                textInput: "placeholdel",
                help: "填写帮助",
                checked: false,
                input1: ""
              }
            },
            {
              id: 7,
              src: require(`../assets/images/fl7.png`),
              sub: "toyo-appendedText",
              opt: {
                title: "Appended:",
                tipInput: "^_^",
                textInput: "placeholdel",
                help: "填写帮助",
                checked: false,
                input1: ""
              }
            },
            {
              id: 8,
              src: require(`../assets/images/fl8.png`),
              sub: "toyo-textarea",
              opt: {
                title: "textarea:",
                textInput: "placeholdel",
                textarea: "",
                help: "最多140个字符",
                checked: false,
                maxText: 140
              }
            }
          ];
          break;
        case "select":
          this.$store.state.imgList = [
            {
              id: 9,
              src: require(`../assets/images/fl9.png`),
              sub: "toyo-selectBasic",
              opt: {
                title: "SelectBasic:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n",
                options: [
                  {
                    label: "黄金糕"
                  },
                  {
                    label: "双皮奶"
                  }
                ],
                value: ""
              }
            },
            {
              id: 10,
              src: require(`../assets/images/fl10.png`),
              sub: "toyo-addressSelector",
              opt: {
                title: "Address:",
                input: "",
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
              }
            },
            {
              id: 11,
              src: require(`../assets/images/fl11.png`),
              sub: "toyo-selectMultiple",
              opt: {
                title: "selectMultiple:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n"
              }
            }
          ];
          break;
        case "radioCheck":
          this.$store.state.imgList = [
            {
              id: 12,
              src: require(`../assets/images/fl12.png`),
              sub: "toyo-checkboxes",
              opt: {
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
              }
            },
            {
              id: 13,
              src: require(`../assets/images/fl13.png`),
              sub: "toyo-radioButtons",
              opt: {
                title: "radioButtons:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n",
                options: [
                  {
                    label: "黄金糕"
                  }
                ],
                nodelist: [],
                radio: 1
              }
            },
            {
              id: 14,
              src: require(`../assets/images/fl14.png`),
              sub: "toyo-inlineCheckBoxes",
              opt: {
                title: "inlinecheck:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n",
                options: [
                  {
                    label: "黄金糕"
                  }
                ],
                nodelist: [],
                value: ""
              }
            },
            {
              id: 15,
              src: require(`../assets/images/fl15.png`),
              sub: "toyo-inlineRadioButtons",
              opt: {
                title: "inlineRadio:",
                textInput: "placeholdel",
                selectAll: "qwe\nasd\nzxc\n",
                options: [
                  {
                    label: "黄金糕"
                  }
                ],
                nodelist: [],
                radio: 1
              }
            },
            {
              id: 16,
              src: require(`../assets/images/fl16.png`),
              sub: "toyo-starRating",
              opt: {
                title: "starRating:",
                help: "填写帮助",
                value1: null
              }
            }
          ];
          break;
        case "fileButton":
          this.$store.state.imgList = [
            {
              id: 17,
              src: require(`../assets/images/fl17.png`),
              sub: "toyo-fileUpload",
              opt: {
                title: "fileUpload:",
                help: "填写帮助",
                fileList: []
              }
            },
            {
              id: 18,
              src: require(`../assets/images/fl18.png`),
              sub: "toyo-button",
              opt: {
                title: "",
                textInput: "submit",
                help: "风格",
                tabq: "primary",
                options: [
                  {
                    value: "",
                    label: "default"
                  },
                  {
                    value: "1",
                    label: "primary"
                  },
                  {
                    value: "2",
                    label: "success"
                  },
                  {
                    value: "3",
                    label: "info"
                  },
                  {
                    value: "4",
                    label: "warning"
                  },
                  {
                    value: "5",
                    label: "danger"
                  }
                ],
                value: ""
              }
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