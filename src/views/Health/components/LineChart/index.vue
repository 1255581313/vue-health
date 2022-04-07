<template>
  <div id="echart" :class="className" :style="{ height: height, width: width }" >
  </div>
</template>

<script>
// 引入基本模板
const echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
// require('echarts/lib/chart/bar')

// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

import { GridComponent } from 'echarts/components'
echarts.use([GridComponent])

// import echarts from 'echarts'
// require('echarts/theme/macarons') // echarts theme

export default {
  name: 'ECharts',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null

    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.drawLine()
    // }, 1500)
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ data1, data2, data3, xAxisData, dataName1, dataName2 } = {}) {
      // 基于准备好的dom，初始化echarts实例
      // const eChart = echarts.init(document.getElementById('echart'))
      // 绘制图表
      this.chart.setOption({
        title: { text: '' },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        xAxis: [{
          data: xAxisData,
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#e3e3e3'
            }
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#999',
              fontWeight: 'normal',
              fontSize: '12'
            }
          },
          splitLine: { show: false } // 去除网格线
        }, {
          type: 'category',
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitArea: { show: false },
          splitLine: { show: false },
          data: xAxisData
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#32346c'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#32346c '
            }
          },
          axisLabel: {
            textStyle: {
              color: '#bac0c0',
              fontWeight: 'normal',
              fontSize: '12'
            },
            formatter: '{value}'
          }
        }, {
          type: 'value',
          yAxisIndex: 1,
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value}%',
            textStyle: {
              color: '#999'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'transparent' // 坐标轴线颜色
            }
          },
          splitLine: { show: false }// 去除网格线
        }],
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        legend: {
          data: ['高压', '低压', '心率']
        },
        series: [
          {
            name: dataName1,
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: data1,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: dataName2,
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: data2,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          },
          {
            name: '心率',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: data3,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }
        ]
      })
    }
  }
}

</script>

<style scoped>

</style>
