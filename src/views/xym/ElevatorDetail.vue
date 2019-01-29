<template>
  <div id="ed">
    <div class="ed-container clearfix">
      <div class="ed-left">
        <div class="ed-elevator">
          <div class="ed-elevator-name">2号电梯</div>
          <div class="ed-ebox-title clearfix">
            <h3>94</h3>
            <p>今天健康指数（2019.01.26）</p>
          </div>
          <div class="ed-ebox"></div>
          <div class="ed-ebox-data">
            <div class="ed-ebox-data-floor">21<span>F</span></div>
            <div class="ed-ebox-data-btn ed-ebox-data-up"></div>
            <div class="ed-ebox-data-speed">2.9<span>m/s</span></div>
            <div class="ed-ebox-data-btn ed-ebox-data-down"></div>
            <div class="ed-ebox-data-floor">10<span>人</span></div>
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
                  <th>维保人员</th>
                  <th>录像记录</th>
                  <th>状态</th>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td><i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard">合格</span></td>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td><i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard">合格</span></td>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td><i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard elist-standard-non">不合格</span></td>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td><i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard">合格</span></td>
                </tr>
                <tr>
                  <td>陈辉</td>
                  <td><i class="elist-video"></i>1小时21分</td>
                  <td>例行维保<span class="elist-standard elist-standard-non">不合格</span></td>
                </tr>
              </table>
            </el-scrollbar>
          </div>

        </div>
      </div>

      <!-- 导航 -->
      <div class="ed-mid">
        <div class="ed-nav">
          <div class="ed-nav-box on" @click="switchNav('机房')">
            <div class="warning"></div>
            <div class="edn-icon edn-icon1"></div>
            <p>机房</p>
          </div>
          <div class="ed-nav-box" @click="switchNav('曳引机')">
            <div class="edn-icon edn-icon2"></div>
            <p>曳引机</p>
          </div>
          <div class="ed-nav-box">
            <div class="edn-icon edn-icon3"></div>
            <p>限速器</p>
          </div>
          <div class="ed-nav-box">
            <div class="edn-icon edn-icon4"></div>
            <p>梯门</p>
          </div>
          <div class="ed-nav-box">
            <div class="edn-icon edn-icon5"></div>
            <p>轿厢</p>
          </div>
          <div class="ed-nav-box">
            <div class="edn-icon edn-icon6"></div>
            <p>安全回路</p>
          </div>
          <div class="ed-nav-box">
            <div class="edn-icon edn-icon7"></div>
            <p>门锁回路</p>
          </div>

        </div>
      </div>

      <div class="ed-right1">
        <el-scrollbar style="height: 100%;">

          <!-- 大类 -->
          <div :is="currentView"></div>
          
        </el-scrollbar>

      </div>

    </div>


  </div>
</template>

<script>
import EDMotorRoom from './EDMotorRoom'
import EDTractor from './EDTractor'


export default {
  data() {
    return {
      currentView: 'EDMotorRoom'

    }
  },
  mounted() {
    

  },
  methods: {
    

    switchNav(name) {
      if (name == '机房') {
        this.currentView = 'EDMotorRoom';
      } 
      if (name == '曳引机') {
        this.currentView = 'EDTractor';
      } 
    }

  },
  components: {
    EDMotorRoom,
    EDTractor
  }
}
</script>

<style>
/* 全局 */
.el-scrollbar{
  height: 100%;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-scrollbar__thumb{
  background: rgba(13,186,127,0.20);
  border: 1px solid #0DBA7F;
  border-radius: 8px;
}
.el-scrollbar__bar.is-vertical{
  width: 4px;
}
.el-scrollbar__thumb:hover{
  background: rgba(13,186,127,0.50);
}
.el-scrollbar__bar{
  opacity: 1;
}
.el-scrollbar__bar.is-horizontal{
  opacity: 0 !important;
}
</style>

<style>
  @import url("../../assets/stylus/css-reset.css");

  #ed{
    /* TODO 适配 */
    min-width: 1800px;

    background: #1B1B23;
    padding: 80px 36px 20px;


  }

  .ed-container{
    margin-top: 32px;
  }
  .ed-left{
    width: 472px;
    float: left;

  }
  .ed-elevator{
    position: relative;
    box-sizing: border-box;
    height: 600px;
    background: #24242f;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
  }
  .ed-elevator-name{
    position: absolute;
    right: 36px;
    top: 16px;
    font-size: 24px;
    color: #FFFFFF;
  }
  .ed-ebox-title{
    padding-left: 30px;
    padding-top: 8px;
  }
  .ed-ebox-title h3{
    font-weight: normal;
    font-size: 38px;
    color: #FFFFFF;
  }
  .ed-ebox-title p{
    font-size: 12px;
    color: #66667F;
  }
  .ed-ebox{
    width: 234px;
    height: 358px;
    background: url('../../assets/images/xym/evn.png') no-repeat;
    margin-top: 10px;
    margin-left: 26px;
  }
  .ed-ebox-data{
    position: absolute;
    top: 130px;
    right: 20px;
    text-align: center;
    width: 120px;
  }
  .ed-ebox-data-floor{
    font-size: 38px;
    color: #13BE85;
    margin: 16px 0;
  }
  .ed-ebox-data-floor span{
    font-size: 14px;
  }
  .ed-ebox-data-btn{
    width: 34px;
    height: 24px;
    margin: 0 auto;
  }
  .ed-ebox-data-up{
    background: url('../../assets/images/xym/up_normal.png') no-repeat center center;
  }
  .ed-ebox-data-down{
    background: url('../../assets/images/xym/down_normal.png') no-repeat center center;
  }
  .ed-ebox-data-speed{
    font-size: 24px;
    color: #FFFFFF;
    margin: 8px 0;
  }
  .ed-ebox-data-speed span{
    font-size: 14px;
  }
  .ed-ebox-sum{
    margin-top: -20px;
  }
  .ede-sum-box{
    float: left;
    width: 30%;
    padding-left: 6%;
    margin-top: 20px;
    padding-right: 4%;
  }
  .ede-sum-box h4{
    font-weight: normal;
    font-size: 24px;
    color: #FFFFFF;
  }
  .ede-sum-box h4 span{
    font-size: 14px
  }
  .ede-sum-box p{
    font-size: 12px;
    color: #66667F;
  }
  .ed-elist{
    position: relative;
    box-sizing: border-box;
    height: 195px;
    background: #24242f;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
    margin-top: 10px;
    padding: 0 25px;
  }
  .ed-elist-title{
    font-size: 18px;
    color: #FFFFFF;
    padding-top: 15px;
  }
  .ed-elist-table-container{
    height: 120px;
  }
  .ed-elist-table{
    width: 100%;
  }
  .ed-elist-table th{
    font-size: 12px;
    line-height: 20px;
    color: #66667F;
    font-weight: normal;
    padding: 10px 0;
    text-align: left;
  }
  .ed-elist-table td{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    padding: 15px 0;
    border-top: 1px solid #303240;
  }
  .elist-video{
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 16px;
    margin-right: 10px;
    margin-top: -2px;
    background: url('../../assets/images/xym/play.png') no-repeat center center;
  }
  .elist-standard{
    margin-left: 30px;
    display: inline-block;
  }
  .elist-standard.elist-standard-non{
    color: #F56F6F;
  }

  .ed-mid{
    float: left;
    width: 160px;
    margin-left: 30px;
    position: relative;
    box-sizing: border-box;
    height: 805px;
    background: #24242f;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
  }
  .ed-nav{
    margin-top: 100px;
    text-align: center;
  }
  .ed-nav-box{
    position: relative;
    box-sizing: border-box;
    height: 80px;
    padding-top: 12px;
    border-left: 6px solid #23232E;
    cursor: pointer;
  }
  .ed-nav-box.on{
    background-image: linear-gradient(90deg, rgba(13,186,127,0.35) 0%, rgba(13,186,127,0.00) 100%);
    border-left: 6px solid #1E9E9E;
  }
  .warning{
    position: absolute;
    top: 10px;
    right: 30px;
    width: 15px;
    height: 13px;
    background: url('../../assets/images/xym/warning.png') no-repeat center center;
  }
  .edn-icon{
    width: 32px;
    height: 32px;
    margin: 0 auto;
  }
  .edn-icon1{
    background: url('../../assets/images/xym/motor_room_normal.png') no-repeat center center;
  }
  .ed-nav-box.on .edn-icon1{
    background: url('../../assets/images/xym/motor_room_highlight.png') no-repeat center center;
  }
  .edn-icon2{
    background: url('../../assets/images/xym/tractor_normal.png') no-repeat center center;
  }
  .ed-nav-box.on .edn-icon2{
    background: url('../../assets/images/xym/tractor_highlight.png') no-repeat center center;
  }
  .edn-icon3{
    background: url('../../assets/images/xym/governor_normal.png') no-repeat center center;
  }
  .ed-nav-box.on .edn-icon3{
    background: url('../../assets/images/xym/governor_highlight.png') no-repeat center center;
  }
  .edn-icon4{
    background: url('../../assets/images/xym/door_normal.png') no-repeat center center;
  }
  .ed-nav-box.on .edn-icon4{
    background: url('../../assets/images/xym/door_highlight.png') no-repeat center center;
  }
  .edn-icon5{
    background: url('../../assets/images/xym/landing_normal.png') no-repeat center center;
  }
  .ed-nav-box.on .edn-icon5{
    background: url('../../assets/images/xym/landing_highlight.png') no-repeat center center;
  }
  .edn-icon6{
    background: url('../../assets/images/xym/loop_normal.png') no-repeat center center;
  }
  .ed-nav-box.on .edn-icon6{
    background: url('../../assets/images/xym/loop_highlight.png') no-repeat center center;
  }
  .edn-icon7{
    background: url('../../assets/images/xym/loop_normal.png') no-repeat center center;
  }
  .ed-nav-box.on .edn-icon7{
    background: url('../../assets/images/xym/loop_highlight.png') no-repeat center center;
  }

  .ed-nav-box p{
    font-size: 18px;
    color: #66667F;
  }
  .ed-nav-box.on p{
    color: #fff;
  }
  .ed-right1{
    float: left;
    width: 800px;
    margin-left: 30px;
    position: relative;
    box-sizing: border-box;
    height: 805px;
    background: #24242f;
    box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
    border-radius: 10px;
    padding: 30px;
    padding-right: 10px;
  }
  .ed-item{
    padding-right: 20px;
  }
  .ed-item-title{
    font-size: 24px;
    color: #FFFFFF;
  }
  .ed-item-chart-box{
    position: relative;
    padding: 46px 0 20px;
    border-bottom: 1px solid #303240;
  }
  .ed-item-chart-data{
    float: left;
    width: 130px;
    margin-top: 14px;
  }
  .edic-data-icon{
    float: left;
    width: 48px;
    height: 48px;
    margin-top: 8px;
  }
  .edic-data-icon1{
    background: url('../../assets/images/xym/temp_normal.png') no-repeat center center;
  }
  .edic-data-icon2{
    background: url('../../assets/images/xym/humidity_normal.png') no-repeat center center;
  }
  .edic-data-icon3{
    background: url('../../assets/images/xym/wind_normal.png') no-repeat center center;
  }
  .edic-data-icon4{
    background: url('../../assets/images/xym/water_normal.png') no-repeat center center;
  }
  .edic-data-p{
    float: left;
    margin-left: 8px;
    margin-top: 10px;
  }
  .edic-data-p h4{
    font-weight: normal;
    font-size: 28px;
    color: #FFFFFF;
  }
  .edic-data-p h4 span{
    font-size: 14px;
  }
  .edic-data-p p{
    font-size: 14px;
    color: #66667F;
  }
  .ed-item-chart{
    float: left;
    width: 500px;
    height: 100px;
  }
  .item-chart{
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .ed-item-warn{
    position: absolute;
    top: 20px;
    right: 0;
    display: inline-block;
    background: url('../../assets/images/xym/warning.png') no-repeat left center;
    font-size: 14px;
    color: #656886;
    line-height: 20px;
    padding-left: 20px;
    cursor: pointer;
  }
  



</style>
