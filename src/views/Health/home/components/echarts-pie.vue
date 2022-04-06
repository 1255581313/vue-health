<template>
  <div id="echart" style="width: 100%;height: 100%; padding-top: .6rem">
  </div>
</template>

<script>
//  引入基本模板
const echarts = require('echarts/lib/echarts')
//  引入饼图组件
require('echarts/lib/chart/pie')

//  引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

var placeHolderStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    color: 'rgba(0,0,0,0)',
    borderWidth: 0
  },
  emphasis: {
    color: 'rgba(0,0,0,0)',
    borderWidth: 0
  }
}

var dataStyle = {
  normal: {
    formatter: '{c}%',
    position: 'center',
    show: true,
    textStyle: {
      fontSize: '28',
      fontWeight: 'normal',
      color: '#fff'
    }
  }
}

export default {
  name: 'ECharts',
  data() {
    return {
    }
  },
  mounted() {
    setTimeout(() => {
      this.drawLine()
    }, 1500)
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const eChart = echarts.init(document.getElementById('echart'))
      // 绘制图表
      eChart.setOption({
        backgroundColor: '#142058',
        title: [
          {
            text: '完成率',
            x: '20',
            y: '20',
            textStyle: {
              color: '#fff',
              fontSize: 20
            }
          }, {
            text: '目标',
            left: '29.8%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: '16',
              color: '#fff',
              textAlign: 'center'
            }
          }, {
            text: '已完成',
            left: '70%',
            top: '60%',
            textAlign: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '16',
              textAlign: 'center'
            }
          }],
        series: [{
          type: 'pie',
          hoverAnimation: false, // 鼠标经过的特效
          radius: ['25%', '31%'],
          center: ['30%', '50%'],
          startAngle: 225,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 75,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#99da69'
                }, {
                  offset: 1,
                  color: '#01babc'
                }])
              }
            },
            label: dataStyle
          }, {
            value: 25,
            itemStyle: placeHolderStyle
          }]
        }, {
          type: 'pie',
          hoverAnimation: false,
          radius: ['25%', '31%'],
          center: ['70%', '50%'],
          startAngle: 225,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 20,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#9f3edd' }, { offset: 1, color: '#4897f6' }]) }
            },
            label: dataStyle
          }, {
            value: 80,
            itemStyle: placeHolderStyle
          }]
        }, { // 外圈的边框
          // name: '总人数',
          type: 'pie',
          hoverAnimation: false, // 鼠标经过的特效
          radius: ['31%', '32%'],
          center: ['30%', '50%'],
          startAngle: 225,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 75,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#01babc' }, { offset: 1, color: '#99da69' }])
              }
            }
          }, {
            value: 25,
            itemStyle: placeHolderStyle
          }]
        }, {
          type: 'pie',
          hoverAnimation: false,
          radius: ['31%', '32%'],
          center: ['70%', '50%'],
          startAngle: 225,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 75,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#4897f6' }, { offset: 1, color: '#9f3edd' }])
              }
            }
          }, {
            value: 25,
            itemStyle: placeHolderStyle
          }]
        }]
      })
    }
  }
}

</script>

<style scoped>

</style>
