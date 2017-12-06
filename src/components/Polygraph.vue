<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <axis-label v-for="(stat, index) in stats"
                :key="stat.id"
                :stat="stat"
                :total="stats.length"
                :index="index">
    </axis-label>
  </g>
</template>
<script>
 import AxisLabel from './AxisLabel'
 export default {
   name: 'polygraph',
   props: {
     stats: Array
   },
   methods: {
     valueToPoint (value, index, total) {
       var x = 0
       var y = -value * 0.8
       var angle = Math.PI * 2 / total * index
       var cos = Math.cos(angle)
       var sin = Math.sin(angle)
       var tx = x * cos - y * sin + 100
       var ty = x * sin + y * cos + 100
       return {
         x: tx,
         y: ty
       }
     }
   },
   computed: {
     points: function () {
       var total = this.stats.length
       var _this = this
       return this.stats.map(function (stat, i) {
         var point = _this.valueToPoint(stat.value, i, total)
         return point.x + ',' + point.y
       }).join(' ')
     }
   },
   components: {
     AxisLabel
   }
 }
</script>
<style scoped>
  polygon {
      fill: #42b983;
      opacity: .75;
  }

  circle {
      fill: transparent;
      stroke: #999;
  }
</style>
