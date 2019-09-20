import $store from "../store"
export default [
  { path: '/formTemplate/', redirect: 'yjdy' },
  {
    path: 'yjdy',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "邮件订阅",
            help: "订阅成功后，我们将定期向您发送最新的产品和服务信息。"
          }
        },
        {
          id: 2,
          sub: "toyo-textInput",
          opt: {
            title: "您的Email地址:",
            textInput: "xxxxx@qq.com",
            help: "建议用QQ邮箱或网易邮箱",
            checked: false
          }
        },
        {
          id: 18,
          sub: "toyo-button",
          opt: {
            title: "",
            textInput: "提交",
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
      ]
      next()
    }
  },
  {
    path: 'yjfk',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "意见反馈",
            help: ""
          }
        },
        {
          id: 8,
          sub: 'toyo-textarea',
          opt: {
            title: "反馈信息:",
            textInput: "",
            textarea: "",
            help: "最多140个字符",
            checked: false,
            maxText: 140
          }
        },
        {
          id: 2,
          sub: "toyo-textInput",
          opt: {
            title: "您的Email地址:",
            textInput: "xxxxx@qq.com",
            help: "我们将通过此Email与您联系，并承诺不会泄露给任何第三方。",
            checked: false
          }
        },
        {
          id: 18,
          sub: "toyo-button",
          opt: {
            title: "",
            textInput: "提交",
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
      ]
      next()
    }
  }
]