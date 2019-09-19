
import title from './formBuilder/title.vue'
import textInput from './formBuilder/textInput.vue'
import numberInput from './formBuilder/numberInput.vue'
import dateInput from './formBuilder/dateInput.vue'
import timeInput from './formBuilder/timeInput.vue'
import prependedText from './formBuilder/prependedText.vue'
import appendedText from './formBuilder/appendedText.vue'
import textarea from './formBuilder/textarea.vue'
import selectBasic from './formBuilder/selectBasic.vue'
import addressSelector from './formBuilder/addressSelector.vue'
import selectMultiple from './formBuilder/selectMultiple.vue'
import checkboxes from './formBuilder/checkboxes.vue'
import radioButtons from './formBuilder/radioButtons.vue'
import inlineCheckBoxes from './formBuilder/inlineCheckBoxes.vue'
import inlineRadioButtons from './formBuilder/inlineRadioButtons.vue'
import starRating from './formBuilder/starRating.vue'
import fileUpload from './formBuilder/fileUpload.vue'
import button from './formBuilder/button.vue'

export default {
  install(Vue) {
    Vue.component('toyo-title', title)
    Vue.component('toyo-textInput', textInput)
    Vue.component('toyo-numberInput', numberInput)
    Vue.component('toyo-dateInput', dateInput)
    Vue.component('toyo-timeInput', timeInput)
    Vue.component('toyo-prependedText', prependedText)
    Vue.component('toyo-appendedText', appendedText)
    Vue.component('toyo-textarea', textarea)
    Vue.component('toyo-selectBasic', selectBasic)
    Vue.component('toyo-addressSelector', addressSelector)
    Vue.component('toyo-selectMultiple', selectMultiple)
    Vue.component('toyo-checkboxes', checkboxes)
    Vue.component('toyo-radioButtons', radioButtons)
    Vue.component('toyo-inlineCheckBoxes', inlineCheckBoxes)
    Vue.component('toyo-inlineRadioButtons', inlineRadioButtons)
    Vue.component('toyo-starRating', starRating)
    Vue.component('toyo-fileUpload', fileUpload)
    Vue.component('toyo-button', button)
  }
}