import Vue from 'vue'
import Polygraph from './components/Polygraph'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#demo',
  data: {
    newLabel: '',
    stats: [
      { id: 1, label: 'A', value: 100 },
      { id: 2, label: 'B', value: 100 },
      { id: 3, label: 'C', value: 100 },
      { id: 4, label: 'D', value: 100 },
      { id: 5, label: 'E', value: 100 },
      { id: 6, label: 'F', value: 100 }
    ]
  },
  components: { Polygraph },
  methods: {
    add: function (e) {
      e.preventDefault()
      if (!this.newLabel) return
      this.stats.push({
        label: this.newLabel,
        value: 100
      })
      this.newLabel = ''
    },
    remove: function (stat) {
      if (this.stats.length > 3) {
        this.stats.splice(this.stats.indexOf(stat), 1)
      } else {
        alert('not delete')
      }
    }
  }
})
