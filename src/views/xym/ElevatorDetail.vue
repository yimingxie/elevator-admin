<template>
  <div id="elevator-detail">
    <div class="elevator-wrap clearfix">
      <!-- 电梯 -->
      <div class="elevator-container">
        <div class="track-bg-right"></div>
        <div class="elevator-box">
          <div class="track-inner-bg track-inner-bg1"></div>
          <div class="track-inner-bg track-inner-bg2"></div>
        </div>
      </div>

      <!-- 电梯信息 -->
      <div class="elevator-content">
        <div class="elevator-back">&lt; 返回首页</div>
        <div class="elevator-title clearfix">
          <div class="elevator-title-heading">电梯详情页</div>
          <!-- <select class="elevator-select" name id>
            <option value>电梯AR134</option>
            <option value>电梯AR134</option>
            <option value>电梯AR134</option>
          </select> -->
          <el-select v-model="value" placeholder="请选择" style="float: right;">
            <el-option value="电梯AR134">电梯AR134</el-option>
            <el-option value="电梯AR135">电梯AR135</el-option>
            <el-option value="电梯AR136">电梯AR136</el-option>
          </el-select>
        </div>

        <div class="elevator-info clearfix">
          <div class="elevator-info-detail">
            <div class="eid-title">电梯AR1234</div>
            <div class="eid-state">正常运行</div>
            <div class="eid-address">
              <p>使用地点：</p>
              <p>深圳市南山区花园城数码大厦A座</p>
            </div>
          </div>
          <div class="elevator-info-data">
            <div class="ele-title">
              <div class="ele-title-head">
                <span class="ele-title-t">详情数据</span>
                <p class="ele-title-green"></p>
              </div>
            </div>
            <div class="ei-data-ul clearfix">
              <div class="ei-data-li">
                <h4>设备注册代码</h4>
                <p>M23RR23434</p>
              </div>
              <div class="ei-data-li">
                <h4>使用单位名称</h4>
                <p>花园城数码大厦</p>
              </div>
              <div class="ei-data-li">
                <h4>制造日期</h4>
                <p>2012-03-22</p>
              </div>
              <div class="ei-data-li">
                <h4>设备型号</h4>
                <p>M23RR23434</p>
              </div>
              <div class="ei-data-li">
                <h4>维保单位名称</h4>
                <p>蛇口电梯维保有限公司</p>
              </div>
              <div class="ei-data-li">
                <h4>制造单位名称</h4>
                <p>史蒂夫特种设备制造有限公司</p>
              </div>
            </div>
          </div>
          <div class="elevator-info-box">
            <div class="eibox-icon eibox-icon1"></div>
            <div class="eibox-state">正常</div>
            <div class="elbox-position">
              <h3>12F</h3>
              <p>电梯位置</p>
            </div>
          </div>
          <div class="elevator-info-box">
            <div class="eibox-icon eibox-icon3"></div>
            <div class="eibox-state eibox-state-slow">缓慢</div>
            <div class="elbox-position">
              <h3>上 1.5m/s</h3>
              <p>电梯运行</p>
            </div>
          </div>
        </div>

        <!-- 下半部分 -->
        <div class="elevator-bottom clearfix">
          <!-- 设备实时数据 -->
          <div class="elevator-data">
            <div class="ele-title">
              <div class="ele-title-head">
                <span class="ele-title-t">设备实时数据</span>
                <p class="ele-title-green"></p>
              </div>
            </div>

            <div class="elevator-data-content clearfix">
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/temperature.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>60<span>℃</span></h4>
                  <p>主机温度</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/vibrate.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>2543<span>mm/s</span></h4>
                  <p>机房主机振动</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/vibrate.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>2543<span>mm/s</span></h4>
                  <p>轿厢主机振动</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/vibrate.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>2543<span>mm/s</span></h4>
                  <p>轨道振动</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/rpm.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>12312<span>RPM</span></h4>
                  <p>限速器转速</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/v.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>220<span>V</span></h4>
                  <p>制动器电压</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/i.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>325<span>A</span></h4>
                  <p>制动器电流</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/distance.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>23<span>mm</span></h4>
                  <p>制动器距离</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/v.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>223<span>V</span></h4>
                  <p>控制柜电压</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/i.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>23<span>A</span></h4>
                  <p>控制柜电流</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/battery.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>23<span>kw/h</span></h4>
                  <p>控制柜耗电量</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/door.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>关<span></span></h4>
                  <p>电梯轿门</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/door.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>关<span></span></h4>
                  <p>电梯层门</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/distance.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>23<span>m</span></h4>
                  <p>轿厢底与底部距离</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/loop.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>开<span></span></h4>
                  <p>安全回路</p>
                </div>
              </div>
              <div class="eled-box clearfix">
                <div class="eled-box-icon">
                  <img src="../../assets/images/xym/loop.png" alt>
                </div>
                <div class="eled-box-p">
                  <h4>开<span></span></h4>
                  <p>门锁回路</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 告警 -->
          <div class="elevator-warn">
            <div class="ele-title">
              <div class="ele-title-head">
                <span class="ele-title-t">告警</span>
                <p class="ele-title-yellow"></p>
              </div>
            </div>
            <div class="elevator-warn-list">
              <el-scrollbar style="height: 100%;">
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">机房门：打开（监测门窗开/合数据达到预设值，告警）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">制动器刹车片温度数（监测温湿度数据达到预设值，告警文字太多的话）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">机房门：打开（监测门窗开/合数据达到预设值，告警）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">制动器刹车片温度数（监测温湿度数据达到预设值，告警文字太多的话）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">机房门：打开（监测门窗开/合数据达到预设值，告警）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">制动器刹车片温度数（监测温湿度数据达到预设值，告警文字太多的话）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">机房门：打开（监测门窗开/合数据达到预设值，告警）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">制动器刹车片温度数（监测温湿度数据达到预设值，告警文字太多的话）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">制动器刹车片温度数（监测温湿度数据达到预设值，告警文字太多的话）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">机房门：打开（监测门窗开/合数据达到预设值，告警）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">制动器刹车片温度数（监测温湿度数据达到预设值，告警文字太多的话）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
                <div class="ewarn-box clearfix">
                  <div class="ewarn-icon"></div>
                  <div class="ewarn-box-p">制动器刹车片温度数（监测温湿度数据达到预设值，告警文字太多的话）</div>
                  <div class="ewarn-box-time">2018.01.15 13:30</div>
                </div>
              </el-scrollbar>
              
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: "",
      value: ''
    };
  },
  mounted() {
    this.id = this.$route.query.id;
    // 发送请求
    // axios.post('url', {id: '132'}).then(function (res) {
    //   console.log(res)
    // })
  },
  methods: {

  
  },
  components: {}
};
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


<style scoped>
@import url("../../assets/stylus/css-reset.css");

/* TODO 适配 */
#elevator-detail{
  min-width: 1800px;
}



/* #elevator-detail{ */
.elevator-container {
  position: fixed;
  bottom: 0;
  left: 0;
  height: calc(100% - 80px);
  width: 250px;
  background: #24242f url("../../assets/images/xym/track-bg.png") no-repeat
    center center;
  box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
  overflow: hidden;
  z-index: 10;
}
.track-bg-right {
  position: absolute;
  right: 63px;
  top: 0;
  width: 6px;
  height: 100%;
  z-index: 2;
  background: url("../../assets/images/xym/track-bg-right.png") no-repeat;
}
.elevator-box {
  position: absolute;
  bottom: 50px;
  left: 53px;
  width: 137px;
  height: 192px;
  background: url("../../assets/images/xym/elevator.png") no-repeat;
  background-size: 100% 100%;
}
.track-inner-bg {
  position: absolute;
  bottom: 0;
  left: 44px;
  width: 29px;
  height: 1000px;
  background: url("../../assets/images/xym/track-inner.png") repeat-y center
    center;
  z-index: -1;
}
.track-inner-bg2 {
  left: 70px;
}

.elevator-content {
  box-sizing: border-box;
  margin-left: 250px;
  padding: 30px 60px;
}
.elevator-back {
  display: inline-block;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.03px;
  cursor: pointer;
}
.elevator-title {
  margin-top: 10px;
  line-height: 1;
}
.elevator-title-heading {
  float: left;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 0.04px;
}
.elevator-select {
  float: right;
}
.elevator-info {
  margin-top: 36px;
}
.elevator-info-detail {
  box-sizing: border-box;
  padding: 16px;
  float: left;
  width: 22%;
  height: 206px;
  background-image: linear-gradient(90deg, #2fccb3 0%, #0eb77e 100%);
  box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
  border-radius: 10px;
}
.eid-title {
  font-size: 18px;
  color: #ffffff;
  margin-top: 6px;
}
.eid-state {
  display: inline-block;
  border: 1px solid #ffffff;
  border-radius: 12px;
  margin-top: 8px;
  font-size: 12px;
  padding: 0 12px;
  line-height: 20px;
  color: #ffffff;
}
.eid-address {
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  margin-top: 60px;
}
.elevator-info-data {
  box-sizing: border-box;
  float: left;
  width: 33.7%;
  height: 206px;
  background: #24242f;
  box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
  border-radius: 10px;
  margin-left: 1.5%;
  padding: 16px;
}
.ele-title-head {
  display: inline-block;
  position: relative;
}
.ele-title-t {
  display: inline-block;
  position: relative;
  font-size: 18px;
  color: #ffffff;
  z-index: 2;
  margin-top: 6px;
}
.ele-title-green {
  display: inline-block;
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: #0dba7f;
  z-index: 1;
}
.ele-title-yellow {
  display: inline-block;
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: #FEC101;
  z-index: 1;
}
.ei-data-li {
  box-sizing: border-box;
  float: left;
  width: 33%;
  padding-right: 16px;
  margin-top: 16px;
}
.ei-data-li h4 {
  font-weight: normal;
  font-size: 14px;
  color: #66667f;
}
.ei-data-li p {
  font-size: 14px;
  color: #ffffff;
  line-height: 20px;
  margin-top: 4px;
}
.elevator-info-box {
  position: relative;
  float: left;
  width: 19%;
  margin-left: 1.5%;
  height: 206px;
  background: #24242f;
  box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
  border-radius: 10px;
}
.eibox-icon {
  position: absolute;
  left: 24px;
  top: 18px;
  width: 60px;
  height: 60px;
}
.eibox-icon1 {
  background: url("../../assets/images/xym/postion.png") no-repeat center center;
}
.eibox-icon2 {
  background: url("../../assets/images/xym/postion.png") no-repeat center center;
}
.eibox-state {
  position: absolute;
  top: 36px;
  right: 40px;
  width: 46px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #0dba7f;
  border-radius: 12px;
  text-align: center;
  color: #0dba7f;
  font-size: 12px;
}
.eibox-state-slow {
  background: #f75f5f;
  border: 1px solid #f75f5f;
  color: #fff;
}
.elbox-position {
  position: absolute;
  bottom: 26px;
  left: 30px;
}
.elbox-position h3 {
  font-weight: normal;
  font-size: 24px;
  color: #ffffff;
}
.elbox-position p {
  font-size: 14px;
  color: #ffffff;
  margin-top: 6px;
}
.elevator-data {
  box-sizing: border-box;
  width: 57.2%;
  float: left;
  height: 578px;
  background: #24242f;
  box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
  border-radius: 10px;
  margin-top: 30px;
  padding: 16px;
}
.elevator-data-content {
  margin-top: 26px;
}
.eled-box {
  box-sizing: border-box;
  float: left;
  width: 25%;
  height: 120px;
  border-top: 1px solid #1d1d26;
  border-left: 1px solid #1d1d26;
}
.eled-box-icon {
  float: left;
  width: 50px;
  height: 50px;
  text-align: center;
  margin-top: 34px;
  margin-left: 10%;
}
.eled-box-p {
  float: left;
  margin-top: 30px;
  margin-left: 5%;
}
.eled-box-p h4 {
  font-size: 24px;
  color: #ffffff;
  font-weight: normal;
}
.eled-box-p h4 span {
  font-size: 14px;
  margin-left: 4px;
}
.eled-box-p p {
  font-size: 14px;
  color: #66667f;
}
.elevator-warn{
  float: left;
  width: 39.5%;
  margin-left: 1.5%;
  box-sizing: border-box;
  height: 578px;
  background: #24242f;
  box-shadow: 0 21px 20px -14px rgba(10, 23, 63, 0.15);
  border-radius: 10px;
  margin-top: 30px;
  padding: 16px;
}
.elevator-warn-list{
  margin-top: 20px;
  height: 480px;
}
.ewarn-box{
  position: relative;
  padding: 14px 0;
  border-top: 1px solid #1D1D25;
}
.elevator-warn-list .ewarn-box:first-child{
  border-top: none;
}
.ewarn-icon{
  position: absolute;
  top: 15px;
  left: 0;
  width: 18px;
  height: 18px;
  background: url('../../assets/images/xym/warn.png') no-repeat
}
.ewarn-box-p{
  float: left;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 20px;
  margin-left: 30px;
  width: 64%;
}
.ewarn-box-time{
  float: right;
  font-size: 12px;
  line-height: 20px;
  color: #66667F;
  margin-right: 20px;
}
/* } */
</style>
