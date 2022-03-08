import Vue from 'vue'
import Question1 from './Question1.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Question1),
}).$mount('#app')
