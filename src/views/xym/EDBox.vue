<template>
  <div>
    <div class="ed-item-time-change clearfix">
      <span :class="{on : timeOn == 'now'}" @click="changeTime('now')">现在</span>
      <span :class="{on : timeOn == 'day'}" @click="changeTime('day')">今日</span>
      <span :class="{on : timeOn == 'month'}" @click="changeTime('month')">本月</span>
      <span :class="{on : timeOn == 'year'}" @click="changeTime('year')">本年</span>
    </div>

    <div class="ed-item">
      <div class="ed-item-title">厢体</div>
      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon18"></div>
          <div class="edic-data-p">
            <h4>{{boxVibrateValue}}<span>{{boxVibrateUnit}}</span></h4>
            <p>轿厢振动</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="box-vibrate-chart" ref="box-vibrate-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon19"></div>
          <div class="edic-data-p">
            <h4>{{currentFloor}}F<span></span></h4>
            <p>轿厢位置</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="box-position-chart" ref="box-position-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon20"></div>
          <div class="edic-data-p">
            <h4>{{boxWeightValue}}<span>{{boxWeightUnit}}</span></h4>
            <p>轿厢荷载</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="box-weight-chart" ref="box-weight-chart"></div>
        </div>
      </div>

  
    </div>

  </div>
</template>

<script>
import api from '../../api.js'

export default {
  data() {
    return {
      dtID: 'dt001',
      timeOn: 'now',
      dataX: ['60s', '55s', '50s', '45s', '40s', '35s', '30s', '25s', '20s', '15s', '10s', '5s', '0s'],
      dataValue: [],
      boxVibrateValue: '0',
      boxVibrateUnit: 'mm/s',
      eleBottomValue: '0',
      eleBottomUnit: 'm',
      currentFloor: '1',
      speed: '0',
      direction: '停',
      boxWeightValue: '0',
      boxWeightUnit: 'kg',



      // 温湿度配置
      options: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: '#1D1B25',
            }
          },
          formatter: '{a}: {c}℃<br /> '
        },
        xAxis: {
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#66667F',
            margin: 12
          },
          name: '(℃)',
          nameLocation: 'start',
          nameTextStyle: {
            color: '#66667F'
          },
          nameGap: 6,
          axisLine: {
            lineStyle: {
              color: '#303240'
            }
          },
          data: []
        },
        yAxis: {
          axisLabel: {
            show: false,
            color: '#66667F'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#303240'
            }
          },
          splitLine: {
            show: false,
          },
        },
        grid: {
          top: '20px',  
          left: '40px',  
          right: '26px',  
          bottom: '24px'
        },  
        // visualMap: { //区间内控制显示颜色
        //   show: false,
        //   dimension: 1,
        //   type: 'continuous',
        //   min: 0,
        //   max: 100,
        //   range: [0, 60],
        //   borderWidth: 10,
        //   inRange: {
        //     color: ['rgba(41,220,181,0.00)', '#07f7c1'],
        //   },
        //   outOfRange: {
        //     color: ['rgba(209,104,105,0.20)', '#D16869']
        //   }
        // },
        visualMap: { //区间内控制显示颜色
          show: false,
          dimension: 1,
          type: 'continuous',
          range: [0, 500],
          inRange: {
            color: ['#29DDB6']
          },
          outOfRange: {
            color: ['#E75561']
          }
        },
        series: [
          {
            name: "机房温度",
            type: "line",
            // symbolSize: 0,
            showSymbol: false,
            smooth: true,
            lineStyle: {
              width: 3
            },
            // areaStyle: {},
            // markLine: {
            //   data: [{
            //       name: '',
            //       yAxis: 60
            //   }],
            //   animation: false,
            //   symbolSize: 0,
            //   label: {
            //     position: 'start'
            //   },
            //   lineStyle: {
            //     normal: {
            //       type: 'solid',
            //       color: '#DF4B4B',
            //     },
            //   }
            // },
            data: []
          },    
        ]
      },

      // 回路配置
      options2: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: '#1D1B25',
            }
          },
          formatter: '{a}: {c}℃<br /> '
        },
        xAxis: {
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#66667F'
          },
          axisLine: {
            lineStyle: {
              color: '#303240'
            }
          },
          data: []
        },
        yAxis: {
          interval: 1,
          axisTick: {
            show: false
          },
          axisLabel: {
            // show: true,
            color: '#66667F',
            formatter: function (value, index) {
              if (value == 0) {
                return '合'
              }
              if (value == 1) {
                return '开'
              }
              // return '异常'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#303240'
            }
          },
          splitLine: {
            show: false,
          },
      
        },
        grid: {
          top: '20px',  
          left: '40px',  
          right: '26px',  
          bottom: '24px'
        },  
        visualMap: { //区间内控制显示颜色
          show: false,
          dimension: 1,
          type: 'continuous',
          range: [0, 0.01],
          inRange: {
            color: ['#E75561']
          },
          outOfRange: {
            color: ['#29DDB6']
          }
        },
        series: [
          {
            name: "A类",
            type: "line",
            step: true,
            showSymbol: false,
            lineStyle: {
              width: 2
            },
            // markLine: {
            //   data: [
            //     {
            //       name: '异常',
            //       yAxis: 0
            //     },
            //   ],
            //   animation: false,
            //   symbolSize: 0,
            //   label: {
            //     position: 'start'
            //   },
            //   lineStyle: {
            //     normal: {
            //       type: 'solid',
            //       color: '#66667F',
            //     },
            //   }
            // },
            data: []
          },
          
        ]
      }


    }
  },
  mounted() {
    this.getRealTime()
    // setInterval(() => {
    //   this.getRealTime()
    // }, 2000)


  },
  methods: {

    // 切换时间
    changeTime(name) {
      // this.timeOn = name
    },

    // 获取实时数据
    getRealTime() {
      api.detail.getCurrent(this.dtID).then(res => {
        // 轿厢振动
        if (res.data[18]) {
          this.boxVibrateValue = res.data[18].value
          this.boxVibrateUnit = res.data[18].unit
        }
        this.drawBoxVibrate(this.boxVibrateValue)

        // 电梯当前楼层、速度、状态
        if (res.data[19]) {
          this.eleBottomValue = res.data[19].value.toFixed(3)
          this.currentFloor = res.data[19].louc
          // this.eleBottomValue = res.data[19].value
          if (res.data[19].direction === 'up') {
            this.direction = '上'
          } else if (res.data[19].direction === 'down') {
            this.direction = '下'
          } else {
            this.direction = '停'
          }
        }
        this.drawBoxPosition(this.currentFloor)

        // 轿厢荷载
        if (res.data[20]) {
          this.boxWeightValue = res.data[20].value
          this.boxWeightUnit = res.data[20].unit
        }
        this.drawBoxWeight(this.boxWeightValue)

      })

    },

    // 轿厢振动
    drawBoxVibrate(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD18(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('box-vibrate-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        chart.setOption(that.options)
      }
    },

    // 轿厢位置
    drawBoxPosition(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD19(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('box-position-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        chart.setOption(that.options)
      }
    },

    // 轿厢荷载
    drawBoxWeight(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD18(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('box-weight-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        chart.setOption(that.options)
      }
    }


  },
  components: {

  }
}
</script>

<style scoped>

</style>
