<template>
  <div>
    <!-- 环境组件 -->
    <div class="ed-item">
      <div class="ed-item-title">环境</div>

      <div class="ed-item-chart-box clearfix">
        <div class="ed-item-warn">告警记录</div>
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon1"></div>
          <div class="edic-data-p">
            <h4>36<span>℃</span></h4>
            <p>机房温度</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="room-temp-chart" ref="room-temp-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <div class="ed-item-warn">告警记录</div>
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon2"></div>
          <div class="edic-data-p">
            <h4>50<span>％</span></h4>
            <p>机房湿度</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="room-humi-chart" ref="room-humi-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <div class="ed-item-warn">告警记录</div>
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon3"></div>
          <div class="edic-data-p">
            <h4>62<span>m/s</span></h4>
            <p>机房风速</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="room-wind-chart" ref="room-wind-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <div class="ed-item-warn">告警记录</div>
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon4"></div>
          <div class="edic-data-p">
            <h4>正常<span></span></h4>
            <p>机房水浸</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="room-water-chart" ref="room-water-chart"></div>
        </div>
      </div>

      <div class="ed-item-chart-box clearfix">
        <div class="ed-item-warn">告警记录</div>
        <div class="ed-item-chart-data clearfix">
          <div class="edic-data-icon edic-data-icon3"></div>
          <div class="edic-data-p">
            <h4>62<span>m/s</span></h4>
            <p>机房风速</p>
          </div>
        </div>
        <div class="ed-item-chart">
          <div class="item-chart" id="room-wind-chart" ref="room-wind-chart"></div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  mounted() {
    this.drawTemp()
    this.drawHumi()
    this.drawWind()
    this.drawWater()
  },
  methods: {
    drawTemp() {
      let chart = this.$echarts.init(document.getElementById('room-temp-chart'))
      let options = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          }
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
              color: '#1D1B25'
            }
          },
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {
          axisLabel: {
            show: false,
            color: '#66667F'
          },
          axisLine: {
            lineStyle: {
              color: '#1D1B25'
            }
          },
          splitLine: {
            show: false,
            // lineStyle: {
            //   color: '#303240'
            // }
          },
        },
        

        grid: {
          top: '20px',  
          left: '40px',  
          right: '10px',  
          bottom: '24px'
        },  
        visualMap: { //区间内控制显示颜色
          show: false,
          dimension: 1,
          type: 'continuous',
          min: 0,
          max: 100,
          range: [0, 60],
          borderWidth: 10,
          inRange: {
            color: ['rgba(41,220,181,0.00)', '#07f7c1'],
          },
          outOfRange: {
            color: ['rgba(209,104,105,0.20)', '#D16869']
          }
        },
        series: [
          // {
          //   name: '分割线',
          //   type: 'line',
          //   symbolSize: 0,
          //   yAxis: {},
          //   lineStyle: {
          //     color: '#303240',
          //     width: 1
          //   },
          //   data: [60, 60, 60, 60, 60, 60]
          // },
          {
            name: "A类",
            type: "line",
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              width: 4
            },
            areaStyle: {
              // color: {
              //   type: 'linear',
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   colorStops: [{
              //       offset: 0, color: 'green' // 0% 处的颜色
              //   }, {
              //       offset: 1, color: 'transparent' // 100% 处的颜色
              //   }],
              //   global: false // 缺省为 false
              // },
            },
            markLine: {
                data: [
                  {
                    name: 'Y 轴值为 60 的水平线',
                    yAxis: 60
                  },
                ],
                animation: false,
                symbolSize: 0,
                label: {
                  position: 'start'
                },
                lineStyle: {
                  normal: {
                    type: 'solid',
                    color: '#66667F',
                  },
                }
            },
            data: [30, 20, 60, 100, 30, 50]
          },
          
        ]
      };
      chart.setOption(options)
    },
    drawHumi() {
      let chart = this.$echarts.init(document.getElementById('room-humi-chart'))
      let options = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          }
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
              color: '#1D1B25'
            }
          },
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {
          axisLabel: {
            show: false,
            color: '#66667F'
          },
          axisLine: {
            lineStyle: {
              color: '#1D1B25'
            }
          },
          splitLine: {
            show: false,
          },
        },
        

        grid: {
          top: '20px',  
          left: '40px',  
          right: '10px',  
          bottom: '24px'
        },  
        visualMap: { //区间内控制显示颜色
          show: false,
          dimension: 1,
          type: 'continuous',
          min: 0,
          max: 100,
          range: [0, 60],
          borderWidth: 10,
          inRange: {
            color: ['rgba(41,220,181,0.00)', '#07f7c1'],
          },
          outOfRange: {
            color: ['rgba(209,104,105,0.20)', '#D16869']
          }
        },
        series: [
          {
            name: "A类",
            type: "line",
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              width: 4
            },
            areaStyle: {},
            markLine: {
                data: [
                  {
                    name: 'Y 轴值为 60 的水平线',
                    yAxis: 60
                  },
                ],
                animation: false,
                symbolSize: 0,
                label: {
                  position: 'start'
                },
                lineStyle: {
                  normal: {
                    type: 'solid',
                    color: '#66667F',
                  },
                }
            },
            data: [50, 56, 80, 60, 53, 46]
          },
          
        ]
      };
      chart.setOption(options)
    },
    drawWind() {
      let chart = this.$echarts.init(document.getElementById('room-wind-chart'))
      let options = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          }
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
              color: '#1D1B25'
            }
          },
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        yAxis: {
          axisLabel: {
            show: false,
            color: '#66667F'
          },
          axisLine: {
            lineStyle: {
              color: '#1D1B25'
            }
          },
          splitLine: {
            show: false,
          },
        },
        

        grid: {
          top: '20px',  
          left: '40px',  
          right: '10px',  
          bottom: '24px'
        },  
        visualMap: { //区间内控制显示颜色
          show: false,
          dimension: 1,
          type: 'continuous',
          min: 0,
          max: 100,
          range: [0, 60],
          borderWidth: 10,
          inRange: {
            color: ['rgba(41,220,181,0.00)', '#07f7c1'],
          },
          outOfRange: {
            color: ['rgba(209,104,105,0.20)', '#D16869']
          }
        },
        series: [
          {
            name: "A类",
            type: "line",
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              width: 4
            },
            areaStyle: {},
            markLine: {
                data: [
                  {
                    name: 'Y 轴值为 60 的水平线',
                    yAxis: 60
                  },
                ],
                animation: false,
                symbolSize: 0,
                label: {
                  position: 'start'
                },
                lineStyle: {
                  normal: {
                    type: 'solid',
                    color: '#66667F',
                  },
                }
            },
            data: [50, 56, 80, 60, 53, 46]
          },
          
        ]
      };
      chart.setOption(options)
    },
    drawWater() {
      let chart = this.$echarts.init(document.getElementById('room-water-chart'))
      let options = {
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
              color: '#1D1B25'
            }
          },
          data: ["60s", "48s", "36s", "24s", "12s", "0s"]
        },
        yAxis: {
          interval: 1,
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
              color: '#1D1B25'
            }
          },
          splitLine: {
            show: false,
          },
      
        },
        grid: {
          top: '20px',  
          left: '40px',  
          right: '10px',  
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
            symbolSize: 0,
            // lineStyle: {
            //   width: 3
            // },
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
            data: [1, 1, 1, 0, 1, 0]
          },
          
        ]
      };
      chart.setOption(options)
    },

  },
  components: {

  }
}
</script>

<style scoped>
  @import url("../../assets/stylus/css-reset.css");


</style>
