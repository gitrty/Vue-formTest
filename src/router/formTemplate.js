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
            input: "",
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
          input: "",
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
  },
  {
    path: 'yhmyddc',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "用户满意度调查",
            help: "为了更好地为您提供产品或服务，请您认真填写以下表单。"
          }
        },
        {
          id: 9, sub: 'toyo-selectBasic', opt: {
            title: "您购买的商品:",
            textInput: "placeholdel",
            selectAll: "产品1\n产品2\n产品3\n",
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
          id: 8,
          sub: 'toyo-textarea',
          opt: {
            title: "购买原因:",
            textInput: "您购买此商品的原因是什么",
            textarea: "",
            help: "最多140个字符",
            checked: false,
            maxText: 140
          }
        },
        {
          id: 16, sub: 'toyo-starRating', opt: {
            title: "对产品的满意度:",
            help: "",
            value1: null
          }
        },
        {
          id: 17, sub: 'toyo-starRating', opt: {
            title: "对服务的满意度:",
            help: "",
            value1: null
          }
        },
        {
          id: 15, sub: 'toyo-inlineRadioButtons', opt: {
            title: "您会再次购买吗:",
            textInput: "placeholdel",
            selectAll: "会\n可能会\n不会\n",
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
    path: 'hysqbg',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "会员申请表格",
            help: "请如实填写，如有虚假取消参与资格。"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'hybmb',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "会议报名表",
            help: "2016年手机游戏大会，填写以下内容，抽取奖品。"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'yydjb',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "预约登记表",
            help: "填写您的预约信息，将享受优先服务。"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'ygtxl',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "员工通讯录",
            help: "可以在内网站通讯录栏目进行查询。"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'bxsqb',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "报销申请表",
            help: "填报后先将发票交财务统计发票金额，然后经理审核通过后，方给予报销。"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'lyb',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "留言板",
            help: "有事请留言，我们会尽快联系您。"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'tspt',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "投诉平台",
            help: "客户无小事，请详细说明您的不满。"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'stnx',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "学院新媒体中心纳新表",
            help: "欢迎您加入我们的团队！ 请认真填写表单，我们会根据您填写的内容进行审核！"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'khbfjl',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "客户拜访记录",
            help: ""
          }
        }
      ]
      next()
    }
  },
  {
    path: 'gzrb',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "工作日报",
            help: "恭喜你又度过了充实的一天！"
          }
        }
      ]
      next()
    }
  },
  {
    path: 'jxkh',
    component: () => import('../components/formTemplate/tem.vue'),
    beforeEnter: (to, from, next) => {
      $store.state.systemList = [
        {
          id: 1,
          sub: "toyo-title",
          opt: {
            title: "绩效考核",
            help: "以下填写请实名填写，结果HR部门将严格保密。"
          }
        }
      ]
      next()
    }
  }
]