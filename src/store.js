import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentList: [
      { id: 1, sub: 'toyo-title', opt: { title: "什么什么活动报名表", help: "请如实填写,如有弄虚作假取消参与资格" } },
      {
        id: 2, sub: 'toyo-textInput', opt: {
          title: "Text Input:",
          input: "",
          textInput: "placeholdel",
          help: "填写帮助",
          checked: true
        }
      },
      {
        id: 3, sub: 'toyo-numberInput', opt: {
          title: "Number Input:",
          num: "",
          help: "填写帮助",
          checked: false
        }
      },
      {
        id: 4, sub: 'toyo-dateInput', opt: {
          title: "Date Input:",
          num: "",
          help: "填写帮助",
          checked: false
        }
      },
      {
        id: 5, sub: 'toyo-timeInput', opt: {
          title: "Time Input:",
          num: "",
          help: "填写帮助",
          checked: false
        }
      },
      {
        id: 6, sub: 'toyo-prependedText', opt: {
          title: "Prepended:",
          tipInput: "^_^",
          textInput: "placeholdel",
          help: "填写帮助",
          checked: false,
          input1: ""
        }
      },
      {
        id: 7, sub: 'toyo-appendedText', opt: {
          title: "Appended:",
          tipInput: "^_^",
          textInput: "placeholdel",
          help: "填写帮助",
          checked: false,
          input1: ""
        }
      },
      {
        id: 8, sub: 'toyo-textarea', opt: {
          title: "textarea:",
          textInput: "placeholdel",
          textarea: "",
          help: "最多140个字符",
          checked: false,
          maxText: 140
        }
      },
      {
        id: 9, sub: 'toyo-selectBasic', opt: {
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
        id: 10, sub: 'toyo-addressSelector', opt: {
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
        id: 11, sub: 'toyo-selectMultiple', opt: {
          title: "selectMultiple:",
          textInput: "placeholdel",
          selectAll: "qwe\nasd\nzxc\n"
        }
      },
      {
        id: 12, sub: 'toyo-checkboxes', opt: {
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
        id: 13, sub: 'toyo-radioButtons', opt: {
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
        id: 14, sub: 'toyo-inlineCheckBoxes', opt: {
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
        id: 15, sub: 'toyo-inlineRadioButtons', opt: {
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
        id: 16, sub: 'toyo-starRating', opt: {
          title: "starRating:",
          help: "填写帮助",
          value1: null
        }
      },
      {
        id: 17, sub: 'toyo-fileUpload', opt: {
          title: "fileUpload:",
          help: "填写帮助",
          fileList: []
        }
      },
      {
        id: 18, sub: 'toyo-button', opt: {
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
    ],
    imgList: [],
    componentId: null,
    componentSub: null,
    componentOpt: null,
    systemList: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})
