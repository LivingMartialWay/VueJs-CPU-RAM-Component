<template>
  <div id="app">
     <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'
import api from '@/api'

export default {
  components: { LineChart },
  data () {
    return {
      datacollection: {
        labels: ['x', 'y'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: Array(20).fill(0),
          }, {
            label: 'Data Two',
            backgroundColor: '#0eb881',
            data: Array(20).fill(0),
          }
        ]
      }
    }
  },
  mounted () {
     this.interval = setInterval(() => this.fillData(), 1000);
   },
  methods: {
      fillData () {
        api.timeSeries().then(apiResponse=>{
          this.datacollection = {
            labels: apiResponse.cpu.map((o, i)=> apiResponse.timeStart + i * apiResponse.interval),
            datasets: [
              {
                label: 'CPU',
                backgroundColor: '#f8797980',
                data: apiResponse.cpu,
              }, {
                label: 'Memory',
                backgroundColor: '#0eb881',
                data: apiResponse.memory,
              }
            ]
          }
        })
      },
    },
  name: 'app',
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#ffffff' }
    ]
  }
}
</script>
