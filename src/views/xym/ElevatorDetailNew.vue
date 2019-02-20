<template>
  <div id="ed">
    <div class="ed-container clearfix">
      <div class="ed-left">
        <div class="ed-elevator">
          <div class="ed-elevator-name">2号电梯</div>
          <div class="ed-ebox-title clearfix">
            <h3>94 <span>今天健康指数（{{dateNow}}）</span></h3>
          </div>
          <div class="ed-ebox"></div>
          <div class="ed-ebox-data">
            <div class="ed-ebox-data-btn ed-ebox-data-up"></div>
            <div class="ed-ebox-data-floor">{{eleCurrentFloor}}<span>F</span></div>
            <div class="ed-ebox-data-btn ed-ebox-data-down"></div>

            <div class="ed-ebox-sc">
              <h4>{{eleSpeed}}<span>m/s</span></h4>
              <p>运行速度</p>
            </div>
            <div class="ed-ebox-sc">
              <h4>10</h4>
              <p>当前人数</p>
            </div>
            <div class="ed-ebox-sc">
              <h4>关</h4>
              <p>轿门状态</p>
            </div>

          </div>


          <div class="ed-ebox-sum clearfix">
            <div class="ede-sum-box">
              <h4>121<span>人</span></h4>
              <p>1小时累计人数</p>
            </div>
            <div class="ede-sum-box">
              <h4>831<span>人</span></h4>
              <p>今日累计人数</p>
            </div>
            <div class="ede-sum-box">
              <h4>185<span>天</span></h4>
              <p>已无故障运行</p>
            </div>
            <div class="ede-sum-box">
              <h4>7821<span>km</span></h4>
              <p>累计运行里程</p>
            </div>
          </div>
        </div>

        <div class="ed-elist">
          <div class="ed-elist-title">维保记录</div>
          <div class="ed-elist-table-container">
            <el-scrollbar style="height: 100%;">
              <table class="ed-elist-table">
                <tr>
                  <th width="22%">维保人员</th>
                  <th width="36%">录像记录</th>
                  <th width="42%">状态</th>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td>
                    <i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard">合格</span>
                  </td>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td>
                    <i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard">合格</span>
                  </td>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td>
                    <i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard elist-standard-non">不合格</span>
                  </td>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td>
                    <i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard">合格</span>
                  </td>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td>
                    <i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard elist-standard-non">不合格</span>
                  </td>
                </tr>
              </table>
            </el-scrollbar>
          </div>
        </div>
      </div>

      <!-- 导航 -->
      <div class="ed-mid">
        <div class="ed-nav">
          <div class="ed-nav-box" :class="{on : navActive == '机房'}" @click="switchNav('机房')">
            <!-- TODO 告警 -->
            <!-- <div class="warning"></div> -->
            <div class="edn-icon edn-icon1"></div>
            <p>机房</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '曳引机'}" @click="switchNav('曳引机')">
            <div class="edn-icon edn-icon2"></div>
            <p>曳引机</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '限速器'}" @click="switchNav('限速器')">
            <div class="edn-icon edn-icon3"></div>
            <p>限速器</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '梯门'}" @click="switchNav('梯门')">
            <div class="edn-icon edn-icon4"></div>
            <p>梯门</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '轿厢'}" @click="switchNav('轿厢')">
            <div class="edn-icon edn-icon5"></div>
            <p>轿厢</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '安全回路'}" @click="switchNav('安全回路')">
            <div class="edn-icon edn-icon6"></div>
            <p>安全回路</p>
          </div>
          <div class="ed-nav-box" :class="{on : navActive == '门锁回路'}" @click="switchNav('门锁回路')">
            <div class="edn-icon edn-icon7"></div>
            <p>门锁回路</p>
          </div>
        </div>
      </div>

      <div class="ed-right1" id="ed-right1" ref="ed-right1">
        <el-scrollbar style="height: 100%;">
          <div class="ed-item-time-change clearfix">
            <span :class="{on : timeOn == 'now'}" @click="changeTime('now')">现在</span>
            <span :class="{on : timeOn == 'day'}" @click="changeTime('day')">今日</span>
            <span :class="{on : timeOn == 'month'}" @click="changeTime('month')">本月</span>
            <span :class="{on : timeOn == 'year'}" @click="changeTime('year')">本年</span>
          </div>


          <!-- 大类 -->
          <!-- 机房 -->
          <div id="EDMotorRoom" class="edType">

            <div class="ed-item">
              <div class="ed-item-title">环境</div>

              <div class="ed-item-chart-box clearfix">
                <!-- <div class="ed-item-warn">告警记录</div> -->
                <div class="ed-item-chart-data clearfix">
                  <div class="edic-data-icon edic-data-icon1"></div>
                  <div class="edic-data-p">
                    <h4>{{tempValue}}<span>{{tempUnit}}</span></h4>
                    <p>机房温度</p>
                  </div>
                </div>
                <div class="ed-item-chart">
                  <div class="item-chart" id="room-temp-chart" ref="room-temp-chart"></div>
                </div>
              </div>

              <div class="ed-item-chart-box clearfix">
                <!-- <div class="ed-item-warn">告警记录</div> -->
                <div class="ed-item-chart-data clearfix">
                  <div class="edic-data-icon edic-data-icon2"></div>
                  <div class="edic-data-p">
                    <h4>{{westValue}}<span>{{westUnit}}</span></h4>
                    <p>机房湿度</p>
                  </div>
                </div>
                <div class="ed-item-chart">
                  <div class="item-chart" id="west-chart" ref="west-chart"></div>
                </div>
              </div>

              <div class="ed-item-chart-box clearfix">
                <!-- <div class="ed-item-warn">告警记录</div> -->
                <div class="ed-item-chart-data clearfix">
                  <div class="edic-data-icon edic-data-icon3"></div>
                  <div class="edic-data-p">
                    <h4>{{windValue}}<span>{{windUnit}}</span></h4>
                    <p>机房风速</p>
                  </div>
                </div>
                <div class="ed-item-chart">
                  <div class="item-chart" id="room-wind-chart" ref="room-wind-chart"></div>
                </div>
              </div>

              <div class="ed-item-chart-box clearfix">
                <!-- <div class="ed-item-warn">告警记录</div> -->
                <div class="ed-item-chart-data clearfix">
                  <div class="edic-data-icon edic-data-icon4"></div>
                  <div class="edic-data-p">
                    <h4><em>{{roomWaterValue}}</em><span></span></h4>
                    <p>机房水浸</p>
                  </div>
                </div>
                <div class="ed-item-chart">
                  <div class="item-chart" id="room-water-chart" ref="roomWaterChart"></div>
                </div>
              </div>

              <div class="ed-item-chart-box clearfix">
                <!-- <div class="ed-item-warn">告警记录</div> -->
                <div class="ed-item-chart-data clearfix">
                  <div class="edic-data-icon edic-data-icon5"></div>
                  <div class="edic-data-p">
                    <h4><em>{{airValue}}</em><span></span></h4>
                    <p>空调/排气扇</p>
                  </div>
                </div>
                <div class="ed-item-chart">
                  <div class="item-chart" id="air-chart" ref="air-chart"></div>
                </div>
              </div>
            </div>

          </div>

          <!-- 曳引机 -->
          <div id="EDTractor" class="edType">
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
                    <h4>{{tractorTempValue}}<span>{{tempUnit}}</span></h4>
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
                  

        </el-scrollbar>
      </div>


      <!-- 告警日志 -->
      <div class="ed-right2">
        <div class="warn-list">
          <div class="warn-list-title">告警日志</div>
          <div class="warn-list-ul">
            <el-scrollbar style="height: 100%;">
              <div class="warn-list-ul-n">
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">机房温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
                <div class="warn-list-li clearfix">
                  <p class="wai-p">制动器线圈温度异常</p>
                  <p class="wai-time">01.28  13:29:22</p>
                </div>
              </div>
            </el-scrollbar>
          </div>
          
          
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import EDMotorRoom from "./EDMotorRoom";
import EDTractor from "./EDTractor";
import EDSpeed from "./EDSpeed"
import EDDoor from "./EDDoor"
import EDBox from "./EDBox"
import EDSafeLoop from "./EDSafeLoop"
import EDLockLoop from "./EDLockLoop"

import api from '../../api.js'

export default {
  data() {
    return {
      dateNow: '',
      dtID: 'dt001',
      timeOn: 'now',
      dataX: ['60s', '55s', '50s', '45s', '40s', '35s', '30s', '25s', '20s', '15s', '10s', '5s', '0s'],
      dataValue: [],
      currentView: "EDMotorRoom",
      navActive: '机房',
      eleSpeed: '0',
      eleCurrentFloor: '0',

      // 机房默认值
      tempValue: '0',
      tempUnit: '℃',
      westValue: '0',
      westUnit: '%',
      windValue: '0',
      windUnit: 'm/s',
      roomWaterValue: '正常',
      roomWaterValueNum: '1',
      airValue: '开',
      airValueNum: '1',

      // 曳引机默认值
      vControlValue: '0',
      vControlUnit: 'V',
      iControlValue: '0',
      iControlUnit: 'A',
      tractorTempValue: '0',
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
          formatter: '{a}: {c}℃'
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
    };
  },
  mounted() {
    let abc = document.querySelector('.ed-right1')
    let abc2 = document.getElementById('ed-right1')
    console.log(abc2)
    abc2.addEventListener('scroll', () => {
      console.log(222)
    })
    
    

    setTimeout(() => {
      let room_temp_chart = this.$echarts.getInstanceByDom(document.getElementById("room-temp-chart"));
      let west_chart = this.$echarts.getInstanceByDom(document.getElementById("west-chart"));
      let room_wind_chart = this.$echarts.getInstanceByDom(document.getElementById("room-wind-chart"));
      let room_water_chart = this.$echarts.getInstanceByDom(document.getElementById("room-water-chart"));
      let air_chart = this.$echarts.getInstanceByDom(document.getElementById("air-chart"));

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
        room_temp_chart.resize();
        west_chart.resize();
        room_wind_chart.resize();
        room_water_chart.resize();
        air_chart.resize();

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

    // 更新时间和实时数据
    this.getCurrentData()
    this.dateNow = this.formatDate()
    this.getRealTime()
    setInterval(() => {
      this.getRealTime()
      this.getCurrentData()
      this.dateNow = this.formatDate()
    }, 2000)


  },
  methods: {
    // 封装时间
    formatDate(){
        // date = new Date(date);
        var date = new Date(Date.now())
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var m1 = date.getMinutes();
        var s = date.getSeconds();
        m = m < 10 ? ("0" + m) : m;
        d = d < 10 ? ("0" + d) : d;
        // return y+"-"+m+"-"+d+" "+h+":"+m1+":"+s;
        return y + "." + m + "." + d
    },
    // 切换导航
    switchNav(name) {
      this.navActive = name
      if (name == '机房') {
        this.currentView = "EDMotorRoom";
      }
      if (name == '曳引机') {
        this.currentView = "EDTractor";
      }
      if (name == '限速器') {
        this.currentView = "EDSpeed";
      }
      if (name == '梯门') {
        this.currentView = "EDDoor";
      }
      if (name == '轿厢') {
        this.currentView = "EDBox";
      }
      if (name == '安全回路') {
        this.currentView = "EDSafeLoop";
      }
      if (name == '门锁回路') {
        this.currentView = "EDLockLoop";
      }
    },

    // 滚动高亮
    scrollNav() {
      let test_scroll = this.$refs.testScroll
      let testContent = document.getElementById('testContent')
      let EDMotorRoom = document.getElementById('EDMotorRoom')
      let EDTractor = document.getElementById('EDTractor')

      let testContentTop = testContent.offsetTop
      let boxATop = boxA.offsetTop - testContentTop
      let boxBTop = boxB.offsetTop - testContentTop
      let boxCTop = boxC.offsetTop - testContentTop
      testContent.addEventListener('scroll', () => {
        var current_offset_top = testContent.scrollTop;
        // console.log(boxATop)
        if (current_offset_top < boxBTop) {
          this.navActive = 'A'
        } else if (current_offset_top >= boxBTop && current_offset_top < boxCTop) {
          this.navActive = 'B'
        } else if (current_offset_top >= boxCTop) {
          this.navActive = 'C'
        }

      })
    },

    // 更新电梯实时数据
    getCurrentData() {
      api.detail.getCurrent(this.dtID).then(res => {
        // console.log(res.data)
        
        // 电梯当前楼层、速度、状态
        if (res.data[19]) {
          this.eleCurrentFloor = res.data[19].louc
          this.eleSpeed = Math.abs(res.data[19].speed.toFixed(3)) || 0
          // this.eleBottomValue = res.data[19].value
          // if (res.data[19].direction === 'up') {
          //   this.direction = '上'
          // } else if (res.data[19].direction === 'down') {
          //   this.direction = '下'
          // } else {
          //   this.direction = '停'
          // }
        }
      })
    },


    // 获取实时数据（总）
    getRealTime() {
      api.detail.getCurrent(this.dtID).then(res => {
  
        // 机房温度
        if (res.data[1]) {
          this.tempValue = res.data[1].value
          // this.tempUnit = res.data[1].unit
        }
        this.drawTemp(this.tempValue)

        // 机房湿度
        if (res.data[2]) {
          this.westValue = res.data[2].value
          this.westUnit = res.data[2].unit
        }
        this.drawWest(this.westValue)

        // 机房风速
        if (res.data[3]) {
          this.windValue = res.data[3].value
          this.windUnit = res.data[3].unit
        }
        this.drawWind(this.windValue)

        // 水浸（？）
        if (res.data[4]) {
          if (res.data[4].unit == 'V') {
            this.roomWaterValue = '正常'
          } else {
            this.roomWaterValue = '异常'
          }
          this.roomWaterValueNum = res.data[4].value
        }
        this.drawRoomWater(this.roomWaterValueNum)

        // 风扇
        if (res.data[5]) {
          if (res.data[5].unit == 'V') {
            this.airValue = '开'
          } else {
            this.airValue = '关'
          }
          this.airValueNum = res.data[5].value
        }
        this.drawAir(this.airValueNum)

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

        // 电动机温度
        if (res.data[8]) {
          this.tractorTempValue = res.data[8].value
          this.drawMotorTemp(this.tractorTempValue)
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

    // 机房温度
    drawTemp(currentVal) {
      let that = this
      let dataValue = []
      let timeArr = []


      api.detail.getD1(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('room-temp-chart'))

        // console.log(that.options.tooltip.formatter)
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(℃)'
        that.options.series[0].name = '机房温度'
        that.options.tooltip.formatter = '{a}: {c}℃<br /> '
        chart.setOption(that.options)
      }

    },

    // 机房湿度
    drawWest(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD2(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('west-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue
        that.options.xAxis.name = '(%)'
        that.options.series[0].name = '机房湿度'
        that.options.tooltip.formatter = '{a}: {c}%<br /> '
        chart.setOption(that.options)
      }
    },

    // 机房风速
    drawWind(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD3(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('room-wind-chart'))
        that.options.xAxis.data = that.dataX
        that.options.series[0].data = dataValue

        that.options.xAxis.name = '(m/s)'
        that.options.series[0].name = '机房风速'
        that.options.tooltip.formatter = '{a}: {c}m/s<br /> '

        chart.setOption(that.options)
      }
    },

    // 机房水浸
    drawRoomWater(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD4(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('room-water-chart'))
        that.options2.xAxis.data = that.dataX
        that.options2.series[0].data = dataValue
        that.options.xAxis.name = ''
        that.options.series[0].name = '机房水浸'
        that.options.tooltip.formatter = '{a}: {c}<br /> '
        chart.setOption(that.options2)
      }
    },

    // 空调
    drawAir(currentVal) {
      let that = this
      let dataValue = []

      api.detail.getD5(this.dtID).then(res => {
        res.data.result.forEach((item, i) => {
          dataValue.unshift(item.value)
        })
        dataValue.push(currentVal)
        motorVChart(dataValue)
      })
      .catch(err => {
        motorVChart(dataValue)
      })

      function motorVChart(dataValue) {
        let chart = that.$echarts.init(document.getElementById('air-chart'))
        that.options2.xAxis.data = that.dataX
        that.options2.series[0].data = dataValue
        that.options.xAxis.name = ''
        that.options.series[0].name = '空调/排气扇'
        that.options.tooltip.formatter = '{a}: {c}<br /> '
        chart.setOption(that.options2)
      }
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
        chart.setOption(that.options)
      }
    },

    
  },
  components: {
    EDMotorRoom,
    EDTractor,
    EDSpeed,
    EDDoor,
    EDBox,
    EDSafeLoop,
    EDLockLoop
  }
};
</script>

<style>
/* 全局 */
.el-scrollbar {
  height: 100%;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.el-scrollbar__thumb {
  background: rgba(13, 186, 127, 0.2);
  border: none !important;
  border-radius: 8px;
}
.el-scrollbar__bar.is-vertical {
  width: 4px;
}
.el-scrollbar__thumb:hover {
  background: rgba(13, 186, 127, 0.5);
}
.el-scrollbar__bar {
  opacity: 1;
}
.el-scrollbar__bar.is-horizontal {
  opacity: 0 !important;
}

</style>

<style lang="stylus">
@import "../../assets/stylus/panel"

</style>




<style lang="scss">

#ed {
  // @import url("../../assets/stylus/css-reset.css");

  background: #000;
  padding: 80px 36px 20px;

  .ed-container {
    margin-top: 32px;
  }
  .ed-left {
    width: 472px;
    float: left;
  }
  .ed-elevator {
    position: relative;
    box-sizing: border-box;
    height: 600px;
    background: #12151c url('../../assets/images/xym/ele-bg.png') no-repeat center center;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
  }
  .ed-elevator-name {
    position: absolute;
    right: 30px;
    top: 40px;
    font-size: 24px;
    color: #ffffff;
  }
  .ed-ebox-title {
    padding-left: 30px;
    padding-top: 8px;
  }
  .ed-ebox-title h3 {
    font-weight: normal;
    font-size: 70px;
    line-height: 70px;
    color: #0DBA7F;
  }
  .ed-ebox-title h3 span{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #66667F;
  }
  .ed-ebox-title p {
    font-size: 12px;
    color: #66667f;
  }
  .ed-ebox {
    width: 234px;
    height: 358px;
    background: url("../../assets/images/xym/evn.png") no-repeat;
    margin-top: 36px;
    margin-left: 26px;
  }
  .ed-ebox-data {
    position: absolute;
    top: 100px;
    right: 20px;
    text-align: center;
    width: 120px;
  }
  .ed-ebox-data-floor {
    font-weight: normal;
    font-size: 58px;
    color: #FFFFFF;
    margin: 10px 0;
    line-height: 1 !important;
  }
  .ed-ebox-data-floor span {
    font-size: 14px;
  }
  .ed-ebox-data-btn {
    width: 34px;
    height: 24px;
    margin: 0 auto;
  }
  .ed-ebox-data-up {
    background: url("../../assets/images/xym/up_normal.png") no-repeat center
      center;
  }
  .ed-ebox-data-down {
    background: url("../../assets/images/xym/down_normal.png") no-repeat center
      center;
  }
  .ed-ebox-data-speed {
    font-size: 24px;
    color: #ffffff;
    margin: 8px 0;
  }
  .ed-ebox-data-speed span {
    font-size: 14px;
  }
  .ed-ebox-sum {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    border-top: 2px solid #000;
  }
  .ede-sum-box {
    box-sizing: border-box;
    float: left;
    width: 25%;
    padding-left: 4%;
  }
  .ede-sum-box h4 {
    font-weight: normal;
    font-size: 24px;
    color: #ffffff;
  }
  .ede-sum-box h4 span {
    font-size: 14px;
  }
  .ede-sum-box p {
    font-size: 12px;
    color: #66667f;
    line-height: 20px;
    margin-top: 6px;
  }
  .ed-elist {
    position: relative;
    box-sizing: border-box;
    height: 195px;
    background: #12151c;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
    margin-top: 10px;
    /* padding: 0 25px; */
    padding: 0 0 0 25px;
  }
  .ed-elist-title {
    font-size: 18px;
    color: #ffffff;
    padding-top: 15px;
  }
  .ed-elist-table-container {
    height: 126px;
    margin-top: 10px;
  }
  .ed-elist-table {
    box-sizing: border-box;
    width: 96%;
    
  }
  .ed-elist-table th {
    font-size: 12px;
    line-height: 20px;
    color: #66667f;
    font-weight: normal;
    padding: 6px 0;
    text-align: left;
  }
  .ed-elist-table td {
    font-size: 14px;
    color: #ffffff;
    line-height: 20px;
    padding: 6px 0;
    /* border-top: 1px solid #303240; */
  }
  .elist-video {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 16px;
    margin-right: 10px;
    margin-top: -2px;
    background: url("../../assets/images/xym/play.png") no-repeat center center;
  }
  .elist-standard {
    margin-left: 30px;
    display: inline-block;
  }
  .elist-standard.elist-standard-non {
    color: #f56f6f;
  }

  .ed-mid {
    float: left;
    width: 110px;
    margin-left: 30px;
    margin-top: 30px;
    position: relative;
    box-sizing: border-box;
    height: 745px;
    background: #24242f;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    /* border-radius: 10px; */
    background-image: linear-gradient(
      90deg,
      rgba(18, 21, 28, 0.22) 0%,
      #12151c 42%
    );
    border-radius: 10px 0 0 10px;
  }
  .ed-nav {
    margin-top: 100px;
    text-align: center;
  }
  .ed-nav-box {
    position: relative;
    box-sizing: border-box;
    height: 80px;
    padding-top: 12px;
    border-left: 4px solid #23232e;
    padding-right: 4px;
    cursor: pointer;
  }
  .ed-nav-box.on {
    border-left: 4px solid #27DBB2;
    /* background-image: linear-gradient(90deg, rgba(13,186,127,0.08) 0%, rgba(13,186,127,0.91) 100%); */
    background-image: linear-gradient(90deg, rgba(13,186,127,0.91) 0%, rgba(13,186,127,0.08) 100%);
  }
  .warning {
    position: absolute;
    top: 10px;
    right: 30px;
    width: 15px;
    height: 13px;
    background: url("../../assets/images/xym/warning.png") no-repeat center center;
  }
  .edn-icon {
    width: 32px;
    height: 32px;
    margin: 0 auto;
  }
  .edn-icon1 {
    background: url("../../assets/images/xym/motor_room_normal.png") no-repeat
      center center;
  }
  .ed-nav-box.on .edn-icon1 {
    background: url("../../assets/images/xym/motor_room_highlight.png") no-repeat
      center center;
  }
  .edn-icon2 {
    background: url("../../assets/images/xym/tractor_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon2 {
    background: url("../../assets/images/xym/tractor_highlight.png") no-repeat
      center center;
  }
  .ed-nav-box.on .edn-icon2 {
    background: url("../../assets/images/xym/tractor_highlight.png") no-repeat
      center center;
  }
  .edn-icon3 {
    background: url("../../assets/images/xym/governor_normal.png") no-repeat
      center center;
  }
  .ed-nav-box.on .edn-icon3 {
    background: url("../../assets/images/xym/governor_highlight.png") no-repeat
      center center;
  }
  .edn-icon4 {
    background: url("../../assets/images/xym/door_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon4 {
    background: url("../../assets/images/xym/door_highlight.png") no-repeat center
      center;
  }
  .edn-icon5 {
    background: url("../../assets/images/xym/landing_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon5 {
    background: url("../../assets/images/xym/landing_highlight.png") no-repeat
      center center;
  }
  .edn-icon6 {
    background: url("../../assets/images/xym/loop_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon6 {
    background: url("../../assets/images/xym/loop_highlight.png") no-repeat center
      center;
  }
  .edn-icon7 {
    background: url("../../assets/images/xym/loop_normal.png") no-repeat center
      center;
  }
  .ed-nav-box.on .edn-icon7 {
    background: url("../../assets/images/xym/loop_highlight.png") no-repeat center
      center;
  }

  .ed-nav-box p {
    font-size: 18px;
    color: #66667f;
    margin-top: 5px;
  }
  .ed-nav-box.on p {
    color: #fff;
  }
  .ed-right1 {
    float: left;
    width: 900px;
    position: relative;
    box-sizing: border-box;
    height: 805px;
    background: #12151c;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px 0 20px 30px;
    z-index: 10;
  }
  .ed-item {
    padding-right: 20px;
    padding-bottom: 10px;
    margin-top: 10px;
  }
  .ed-item-title {
    font-size: 20px;
    color: #ffffff;
  }
  .ed-item-time-change{
  text-align: right;
  padding-right: 20px;
  }
  .ed-item-time-change span{
    display: inline-block;
    cursor: pointer;
    line-height: 22px;
    text-align: center;
    padding: 0 15px;
    margin-left: 10px;
    font-size: 14px;
    color: #656886;
    border-radius: 5px;
  }
  .ed-item-time-change span.on{
    color: #FFFFFF;
    background-color: #0DBA7F;
  }
  .ed-item-chart-box {
    position: relative;
    /* padding: 20px 0 20px; */
    /* border-bottom: 1px solid #303240; */
    margin-top: 20px;
  }
  .ed-item-chart-data {
    float: left;
    width: 180px;
    margin-top: 14px;
  }
  .edic-data-icon {
    float: left;
    width: 48px;
    height: 48px;
    margin-top: 8px;
  }
  .edic-data-icon1 {
    background: url("../../assets/images/xym/temp_normal.png") no-repeat center
      center;
  }
  .edic-data-icon2 {
    background: url("../../assets/images/xym/humidity_normal.png") no-repeat
      center center;
  }
  .edic-data-icon3 {
    background: url("../../assets/images/xym/wind_normal.png") no-repeat center
      center;
  }
  .edic-data-icon4 {
    background: url("../../assets/images/xym/water_normal.png") no-repeat center
      center;
  }
  .edic-data-icon5 {
    background: url("../../assets/images/xym/air_normal.png") no-repeat center
      center;
  }
  .edic-data-icon6 {
    background: url("../../assets/images/xym/v_normal.png") no-repeat center
      center;
  }
  .edic-data-icon7 {
    background: url("../../assets/images/xym/a_normal.png") no-repeat center
      center;
  }
  .edic-data-icon8 {
    background: url("../../assets/images/xym/temp_normal.png") no-repeat center
      center;
  }
  .edic-data-icon9 {
    background: url("../../assets/images/xym/vibrate_normal.png") no-repeat center
      center;
  }
  .edic-data-icon10 {
    background: url("../../assets/images/xym/temp_normal.png") no-repeat center
      center;
  }
  .edic-data-icon11 {
    background: url("../../assets/images/xym/temp_normal.png") no-repeat center
      center;
  }
  .edic-data-icon12 {
    background: url("../../assets/images/xym/v_normal.png") no-repeat center
      center;
  }
  .edic-data-icon13 {
    background: url("../../assets/images/xym/a_normal.png") no-repeat center
      center;
  }
  .edic-data-icon14 {
    background: url("../../assets/images/xym/drive_normal.png") no-repeat center
      center;
  }
  .edic-data-icon15 {
    background: url("../../assets/images/xym/speed_normal.png") no-repeat center
      center;
  }
  .edic-data-icon16 {
    background: url("../../assets/images/xym/floor_door_normal.png") no-repeat center
      center;
  }
  .edic-data-icon18 {
    background: url("../../assets/images/xym/vibrate_normal.png") no-repeat center
      center;
  }
  .edic-data-icon19 {
    background: url("../../assets/images/xym/position_normal.png") no-repeat center
      center;
  }
  .edic-data-icon20 {
    background: url("../../assets/images/xym/room_weight_normal.png") no-repeat center
      center;
  }
  .edic-data-icon21 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon22 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon23 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon24 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon25 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon26 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-icon27 {
    background: url("../../assets/images/xym/loop.png") no-repeat center
      center;
  }
  .edic-data-p {
    float: left;
    margin-left: 20px;
    margin-top: 10px;
  }
  .edic-data-p h4 {
    font-weight: normal;
    font-size: 28px;
    color: #ffffff;
  }
  .edic-data-p h4 em {
    font-style: normal;
    font-size: 24px;
  }
  .edic-data-p h4 span {
    font-size: 14px;
    margin-left: 5px;
  }
  .edic-data-p p {
    font-size: 14px;
    color: #66667f;
    margin-top: 7px;
  }
  .ed-item-chart {
    float: left;
    width: 650px;
    height: 100px;
    /* margin-left: 10px; */
  }
  .item-chart {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .ed-item-warn {
    position: absolute;
    top: 20px;
    right: 0;
    display: inline-block;
    background: url("../../assets/images/xym/warning.png") no-repeat left center;
    font-size: 14px;
    color: #656886;
    line-height: 20px;
    padding-left: 20px;
    cursor: pointer;
  }
  .ed-right2{
    float: left;
    width: 280px;
    position: relative;
    box-sizing: border-box;
    height: 805px;
    background: #12151c;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); */
    border-radius: 10px;
    padding: 20px;
    padding-right: 0;
    margin-left: 30px;
  }

  .warn-list-title{
    font-size: 18px;
    color: #FFFFFF;
    /* padding-top: 10px; */
  }
  .warn-list-ul{
    padding: 10px 0;
    margin-top: 10px;
    height: 720px;
  }
  .warn-list-li{
    padding: 10px 0;
    padding-right: 20px;
  }
  .wai-p{
    float: left;
    line-height: 24px;
    font-size: 14px;
    color: #FFFFFF;
  }
  .wai-time{
    float: right;
    line-height: 24px;
    font-size: 12px;
    color: #656886;
  }
  .ed-ebox-sc{
    text-align: center;
    margin-top: 30px;
  }
  .ed-ebox-sc h4{
    font-weight: normal;
    font-size: 32px;
    color: #FFFFFF;
    line-height: 1;
  }
  .ed-ebox-sc h4 span {
    font-size: 14px;
    color: #fff;
  }
  .ed-ebox-sc p{
    font-size: 12px;
    color: #66667F;
    margin-top: 10px;
    line-height: 1;
  }


}


/* 适配 */
@media screen and (max-width: 1910px) {
  #ed{
    padding: 80px 20px 20px;

    .ed-right1{width: 42%;padding: 14px 0 20px 30px;}
    .ed-item-chart{width: 68%;}
    .ed-item-chart-data{width: 150px;}
    .edic-data-p{margin-left: 10px;}
    .ed-left{width: 30%;}
    .ed-mid{width: 80px;margin-left: 20px;}
    .ed-nav-box p{font-size: 14px;}
    .ed-right2{width: 18%;margin-left: 20px;padding: 14px 0 14px 14px;}
    .wai-p{font-size: 12px;}
    .wai-time{font-size: 10px;}
    .ed-ebox-title h3{line-height: 60px;margin-top: 10px;}
    .ed-ebox-title h3 span{display: block;}
    .ed-ebox-data-floor{font-size: 24px;}
    .ed-ebox-sc h4{font-size: 24px;}
    .ed-ebox-data{right: 17px;}
    .ed-ebox{background-size: 200px auto;}
    .ede-sum-box h4{font-size: 18px;}
    .ede-sum-box h4 span{font-size: 12px;}
    .ede-sum-box p{font-size: 10px;}
    .edic-data-p{width: 90px;}
    .edic-data-p h4{font-size: 23px;}
    .edic-data-p h4 span{font-size: 12px;}
    /* .edic-data-p p{width: 60px;line-height: 1.3;} */
  }
  
  

}
@media screen and (max-width: 1350px) {
  #ed{
    min-width: 1350px;
  }
}

</style>
