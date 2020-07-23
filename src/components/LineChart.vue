<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    console.log(JSON.parse(JSON.stringify(this.chartData)))
    this.renderChart(this.chartData, this.options)
  },
}
</script>

<style>
</style>
