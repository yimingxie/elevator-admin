<template>
  <div id="elevator-detail">
    <div class="elevator-wrap clearfix">
      <!-- 电梯 -->
      <div class="elevator-container">
        <div class="elevator-box"></div>
      </div>

      <!-- 电梯信息 -->
      <div class="elevator-content">
        <div class="elevator-back">&lt; 返回首页</div>
        <div class="elevator-title clearfix">
          <div class="elevator-title-heading">电梯详情页</div>
          <select class="elevator-select" name="" id="">
            <option value="">电梯AR134</option>
            <option value="">电梯AR134</option>
            <option value="">电梯AR134</option>
          </select>
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
              <h3>上 1.5m/s </h3>
              <p>电梯运行</p>
            </div>
          </div>

          



        </div>

      </div>
      
    </div>
    <h1 style="color: white">电梯详情 -- 电梯id:{{id}}</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  mounted() {
    this.id = this.$route.query.id
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
@import url('../../assets/stylus/css-reset.css');
/* #elevator-detail{ */
  .elevator-container{
    position: fixed;
    bottom: 0;
    left: 0;
    height: calc(100% - 80px);
    width: 250px;
    background: #fff url('../../assets/images/xym/track-bg.png') no-repeat center center;
  }
  .elevator-content{
    box-sizing: border-box;
    margin-left: 250px;
    padding: 30px 60px;
  }
  .elevator-back{
    display: inline-block;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.03px;
    cursor: pointer;
  }
  .elevator-title{
    margin-top: 10px;
    line-height: 1;
  }
  .elevator-title-heading{
    float: left;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0.04px;
  }
  .elevator-select{
    float: right;
  }
  .elevator-info{
    margin-top: 36px;
  }
  .elevator-info-detail{
    box-sizing: border-box;
    padding: 16px;
    float: left;
    width: 22%;
    height: 206px;
    background-image: linear-gradient(90deg, #2FCCB3 0%, #0EB77E 100%);
    box-shadow: 0 21px 20px -14px rgba(10,23,63,0.15);
    border-radius: 10px;
  }
  .eid-title{
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 6px;
  }
  .eid-state{
    display: inline-block;    
    border: 1px solid #FFFFFF;
    border-radius: 12px;
    margin-top: 8px;
    font-size: 12px;
    padding: 0 12px;
    line-height: 20px;
    color: #FFFFFF;
  }
  .eid-address{
    font-size: 14px;
    color: #FFF;
    line-height: 20px;
    margin-top: 60px;
  }
  .elevator-info-data{
    box-sizing: border-box;
    float: left;
    width: 33.7%;
    height: 206px;
    background: #24242F;
    box-shadow: 0 21px 20px -14px rgba(10,23,63,0.15);
    border-radius: 10px;
    margin-left: 1.5%;
    padding: 16px;
  }
  .ele-title-head{
    display: inline-block;
    position: relative;
  }
  .ele-title-t{
    display: inline-block;
    position: relative;
    font-size: 18px;
    color: #FFFFFF;
    z-index: 2;
    margin-top: 6px;
  }
  .ele-title-green{
    display: inline-block;
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: #0DBA7F;
    z-index: 1;
  }
  .ei-data-li{
    box-sizing: border-box;
    float: left;
    width: 33%;
    padding-right: 16px;
    margin-top: 16px;
  }
  .ei-data-li h4{
    font-weight: normal;
    font-size: 14px;
    color: #66667F;
  }
  .ei-data-li p{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    margin-top: 4px;
  }
  .elevator-info-box{
    position: relative;
    float: left;
    width: 19%;
    margin-left: 1.5%;
    height: 206px;
    background: #24242F;
    box-shadow: 0 21px 20px -14px rgba(10,23,63,0.15);
    border-radius: 10px;
  }
  .eibox-icon{
    position: absolute;
    left: 24px;
    top: 18px;
    width: 60px;
    height: 60px;
  }
  .eibox-icon1{
    background: url('../../assets/images/xym/postion.png') no-repeat center center;
  }
  .eibox-icon2{
    background: url('../../assets/images/xym/postion.png') no-repeat center center;
  }
  .eibox-state{
    position: absolute;
    top: 36px;
    right: 40px;
    width: 46px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #0DBA7F;
    border-radius: 12px;
    text-align: center;
    color: #0DBA7F;
    font-size: 12px;
  }
  .eibox-state-slow{
    background: #F75F5F;
    border: 1px solid #F75F5F;
    color: #fff;
  }
  .elbox-position{
    position: absolute;
    bottom: 26px;
    left: 30px;
  }
  .elbox-position h3{
    font-weight: normal;
    font-size: 24px;
    color: #FFFFFF;
  }
  .elbox-position p{
    font-size: 14px;
    color: #FFFFFF;
    margin-top: 6px;
  }

/* } */

</style>
