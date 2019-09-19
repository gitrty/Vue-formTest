import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentList: [
      { id: 1, sub: 'toyo-title' },
      { id: 2, sub: 'toyo-textInput' },
      { id: 3, sub: 'toyo-numberInput' },
      { id: 4, sub: 'toyo-dateInput' },
      { id: 5, sub: 'toyo-timeInput' },
      { id: 6, sub: 'toyo-prependedText' },
      { id: 7, sub: 'toyo-appendedText' },
      { id: 8, sub: 'toyo-textarea' },
      { id: 9, sub: 'toyo-selectBasic' },
      { id: 10, sub: 'toyo-addressSelector' },
      { id: 11, sub: 'toyo-selectMultiple' },
      { id: 12, sub: 'toyo-checkboxes' },
      { id: 13, sub: 'toyo-radioButtons' },
      { id: 14, sub: 'toyo-inlineCheckBoxes' },
      { id: 15, sub: 'toyo-inlineRadioButtons' },
      { id: 16, sub: 'toyo-starRating' },
      { id: 17, sub: 'toyo-fileUpload' },
      { id: 18, sub: 'toyo-button' }
    ],
    componentId: null,
    componentSub: null
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    maxId(state) {
      // state.componentList.for
      // return
    }
  }
})
