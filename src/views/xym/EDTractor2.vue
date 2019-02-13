<template>
  <div>
    <!-- <div class="ed-item-time-change clearfix">
      <span :class="{on : timeOn == 'now'}" @click="changeTime('now')">现在</span>
      <span :class="{on : timeOn == 'day'}" @click="changeTime('day')">今日</span>
      <span :class="{on : timeOn == 'month'}" @click="changeTime('month')">本月</span>
      <span :class="{on : timeOn == 'year'}" @click="changeTime('year')">本年</span>
    </div> -->

    <div class="ed-item">
      <div class="ed-item-title">电动机</div>
      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon6"></div>
          <div class="edic-data-p">
            <h4>{{vControlValue}}<span>{{vControlUnit}}</span></h4>
            <p>电动机电压</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="motor-v-chart" ref="motor-v-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon7"></div>
          <div class="edic-data-p">
            <h4>{{iControlValue}}<span>{{iControlUnit}}</span></h4>
            <p>电动机电流</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="motor-i-chart" ref="motor-i-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon8"></div>
          <div class="edic-data-p">
            <h4>{{tempValue}}<span>{{tempUnit}}</span></h4>
            <p>电动机温度</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="motor-temp-chart" ref="motor-temp-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon9"></div>
          <div class="edic-data-p">
            <h4>{{roomVibrateValue}}<span>{{roomVibrateUnit}}</span></h4>
            <p>电动机振动</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="motor-vibrate-chart" ref="motor-vibrate-chart"></div>
        </div>
      </div>

    </div>

    <div class="ed-item">
      <div class="ed-item-title">制动器</div>
      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon10"></div>
          <div class="edic-data-p">
            <h4>{{brakeTempValue}}<span>{{brakeTempUnit}}</span></h4>
            <p>制动器线圈温度</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="brake-temp-chart" ref="brake-temp-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon11"></div>
          <div class="edic-data-p">
            <h4>{{brakeSkrTempValue}}<span>{{brakeSkrTempUnit}}</span></h4>
            <p>制动器刹车片温度</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="brake-skr-chart" ref="brake-skr-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon12"></div>
          <div class="edic-data-p">
            <h4>{{vBrakeValue}}<span>{{vBrakeUnit}}</span></h4>
            <p>制动器电压</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="v-brake-chart" ref="v-brake-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon13"></div>
          <div class="edic-data-p">
            <h4>{{iBrakeValue}}<span>{{iBrakeUnit}}</span></h4>
            <p>制动器电流</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="i-brake-chart" ref="i-brake-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <!-- <div class="ed-item-warn">告警记录</div> -->
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon14"></div>
          <div class="edic-data-p">
            <h4>{{driveValue}}<span>{{driveUnit}}</span></h4>
            <p>曳引轮磨损</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="drive-chart" ref="drive-chart"></div>
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
      intervalTimer: null,


      vControlValue: '0',
      vControlUnit: 'V',
      iControlValue: '0',
      iControlUnit: 'A',
      tempValue: '0',
      tempUnit: '℃',
      roomVibrateValue: '0',
      roomVibrateUnit: 'mm/s',
      brakeTempValue: '0',
      brakeTempUnit: '℃',
      brakeSkrTempValue: '0',
      brakeSkrTempUnit: '℃',
      vBrakeValue: '0',
      vBrakeUnit: 'V',
      iBrakeValue: '0',
      iBrakeUnit: 'A',
      driveValue: '100',
      driveUnit: '',

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
          splitNumber: 1,
          axisTick: {
            show: false
          },
          axisLabel: {
            // show: true,
            color: '#66667F',
            formatter: function (value, index) {
              if (value == 0) {
                return '异常'
              }
              if (value == 1) {
                return '正常'
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

    const intervalTimer = setInterval(() => {
      this.getRealTime()
    }, 2000)
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {            
      clearInterval(intervalTimer);                                    
    })
    setTimeout(() => {
      let motor_v_chart = this.$echarts.getInstanceByDom(document.getElementById("motor-v-chart"));
      let motor_i_chart = this.$echarts.getInstanceByDom(document.getElementById("motor-i-chart"));
      let motor_temp_chart = this.$echarts.getInstanceByDom(document.getElementById("motor-temp-chart"));
      let motor_vibrate_chart = this.$echarts.getInstanceByDom(document.getElementById("motor-vibrate-chart"));
      let brake_temp_chart = this.$echarts.getInstanceByDom(document.getElementById("brake-temp-chart"));
      let brake_skr_chart = this.$echarts.getInstanceByDom(document.getElementById("brake-skr-chart"));
      let v_brake_chart = this.$echarts.getInstanceByDom(document.getElementById("v-brake-chart"));
      let i_brake_chart = this.$echarts.getInstanceByDom(document.getElementById("i-brake-chart"));
      let drive_chart = this.$echarts.getInstanceByDom(document.getElementById("drive-chart"));
      
      window.addEventListener("resize", function() {
        motor_v_chart.resize();
        motor_i_chart.resize();
        motor_temp_chart.resize();
        motor_vibrate_chart.resize();
        brake_temp_chart.resize();
        brake_skr_chart.resize();
        v_brake_chart.resize();
        i_brake_chart.resize();
        drive_chart.resize();
      });
    }, 300)   

  },
  // beforeDestroy() {
  //   clearInterval(this.intervalTimer)
  // },
  methods: {
    // 切换时间
    changeTime(name) {
      // this.timeOn = name
    },

    // 获取实时数据
    getRealTime() {
      api.detail.getCurrent(this.dtID).then(res => {
        // 电动机电压
        if (res.data[6]) {
          this.vControlValue = res.data[6].value
          this.vControlUnit = res.data[6].unit
          this.drawMotorV(this.vControlValue)
        }

        // 电动机电流
        if (res.data[7]) {
          this.iControlValue = res.data[7].value
          this.iControlUnit = res.data[7].unit
          this.drawMotorI(this.iControlValue)
        }

        // 主机温度
        if (res.data[8]) {
          this.tempValue = res.data[8].value
          this.drawMotorTemp(this.tempValue)
        }

        // 电机振动
        if (res.data[9]) {
          this.roomVibrateValue = res.data[9].value
          this.roomVibrateUnit = res.data[9].unit
          this.drawRoomVibrate(this.roomVibrateValue)
        }

        // 制动器线圈温度
        if (res.data[10]) {
          this.brakeTempValue = res.data[10].value
          // this.brakeDistanceUnit = res.data[10].unit
          this.brakeTempUnit = '℃'
          this.drawBrakeTemp(this.brakeTempValue)
        }

        // 制动器刹车片温度
        if (res.data[11]) {
          this.brakeSkrTempValue = res.data[11].value1
          this.brakeSkrTempUnit = '℃'
          this.drawBrakeSkrTemp(this.brakeSkrTempValue)
        }

        // 制动器电压
        if (res.data[12]) {
          this.vBrakeValue = res.data[12].value
          this.vBrakeUnit = res.data[12].unit
          this.drawVBrake(this.vBrakeValue)
          
        }

        // 制动器电流
        if (res.data[13]) {
          this.iBrakeValue = res.data[13].value
          this.iBrakeUnit = res.data[13].unit
          this.drawIBrake(this.iBrakeValue)
        }

        // 曳引轮磨损
        if (res.data[14]) {
          this.driveValue = res.data[14].value
          this.driveUnit = res.data[14].unit 
        }
        this.drawDrive(this.driveValue)

      })

      
    },


    // 电动机电压
    drawMotorV(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD6(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('motor-v-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(V)'
        that.options.series[0].name = '电动机电压'
        that.options.tooltip.formatter = '{a}: {c}V<br /> '
        chart.setOption(that.options)
      }
    },

    // 电动机电流
    drawMotorI(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD7(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('motor-i-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(A)'
        that.options.series[0].name = '电动机电流'
        that.options.tooltip.formatter = '{a}: {c}A<br /> '
        chart.setOption(that.options)
      }
    },

    // 电动机温度
    drawMotorTemp(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD8(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('motor-temp-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(℃)'
        that.options.series[0].name = '电动机温度'
        that.options.tooltip.formatter = '{a}: {c}℃<br /> '
        chart.setOption(that.options)
      }
    },

    // 电动机振动
    drawRoomVibrate(currentVal) {
      let that = this
      let dataValue = []

      // http.get('/iotsqu/lift/dt001/historyData/9').then(res => {
      //   res.data.result.forEach((item, i) => {
      //     dataValue.unshift(item.value)
      //   })
      //   dataValue.push(currentVal)
      //   motorVChart(dataValue)
      // })

      api.detail.getD9(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('motor-vibrate-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(m/s²)'
        that.options.series[0].name = '电动机振动'
        that.options.tooltip.formatter = '{a}: {c}m/s^2<br /> '
        chart.setOption(that.options)
      }
    },

    // 制动器线圈温度
    drawBrakeTemp(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD10(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('brake-temp-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(℃)'
        that.options.series[0].name = '制动器温度'
        that.options.tooltip.formatter = '{a}: {c}℃<br /> '
        chart.setOption(that.options)
      }
    },

    // 刹车片温度
    drawBrakeSkrTemp(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD11(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('brake-skr-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(℃)'
        that.options.series[0].name = '制动器刹车片温度'
        that.options.tooltip.formatter = '{a}: {c}℃<br /> '
        chart.setOption(that.options)
      }
    },

    // 制动器电压
    drawVBrake(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD12(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('v-brake-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(V)'
        that.options.series[0].name = '制动器电压'
        that.options.tooltip.formatter = '{a}: {c}V<br /> '
        chart.setOption(that.options)
      }
    },

    // 制动器电流
    drawIBrake(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD13(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('i-brake-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(A)'
        that.options.series[0].name = '制动器电流'
        that.options.tooltip.formatter = '{a}: {c}A<br /> '
        chart.setOption(that.options)
      }
    },

    // 曳引轮磨损
    drawDrive(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD14(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      }).catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('drive-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = ''
        that.options.series[0].name = '曳引轮磨损'
        that.options.tooltip.formatter = '{a}: {c}<br /> '
        // console.log(dataValue)
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
