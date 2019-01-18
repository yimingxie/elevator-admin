<template>
  <div class="main-wrap" id="videoBox">
    <div class="main">
      <div class="left" id="left">
        <div class="ele" :style="{'bottom': ratio + 'px'}">
            <div>
              <i v-for = "n in totalFloor" :key = n v-bind:style = "{'background' : n === floor ? '#33CFA8':'#5C6C77'}"  class="circle"> </i>
            </div>
          <img  src="./../assets/images/电梯.png"/>
        </div>
      </div>
      <div class="right">
        <el-row>
          <el-col :span="24"><div class="panel"><div class="title">新天世纪商务中心</div></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="panel" style="margin: 17px 0 31px 4px">
              <select >
                <option>电梯A</option>
              </select>
              <input type="text" v-model="dataFromWs"/>
              <button @click="closeWs()">关闭websocket连接</button>
              <button @click="openWs()">打开websocket连接</button>
            </div>
          </el-col>
        </el-row>
        
        <el-row >
          <el-col :span="12">
            <div class="panel rect">
              <img src="./../assets/images/距离传感器.png"/>
              <div><span class="number">{{ distance }}</span><span class="unit">m</span></div>
              <div><span class="label">轿厢与底坑距离</span></div>
            </div>
            
          </el-col>
          <el-col :span="12">
            <div class="panel rect">
              <img src="./../assets/images/楼层.png"/>
              <div><span class="number">{{ floor }}</span><span class="unit">F</span></div>
              <div><span class="label">电梯位置</span></div>
            </div>
          </el-col>
          
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="panel rect">
              <img src="./../assets/images/temp.png"/>
              <div><span class="number">{{ temp }}</span><span class="unit">{{ tempUnit }}</span></div>
              <div><span class="label">电机温度</span></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="panel rect">
              <img src="./../assets/images/su.png"/>
              <div><span class="number">{{ speed }}</span><span class="unit">{{ speedUnit }}</span></div>
              <div><span class="label">限速器转速</span></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="bottomIcon"><img src="./../assets/images/顶部-logo.png"/></div>
    </div>
  </div>
</template>

<script>
  import $axios from './api'
  // import {createWebSocket, closeWebSocket, dataFromWs, ws, heartCheck} from '../api/socket.js'
  export default {
    name: 'LoginForm',
    components: {
     
    },
    data (){
      return {
        timer: '',
        distance: 0,
        ratio: 0,
        floor: 1,
        temp: 0,
        speed:0,
        speedUnit: '',
        tempUnit: '',
        totalFloor: 0,
        // dataFromWs:''
      }
    },
    
    mounted () {
      // this.socketApi.initWebSocket()
      // websockcls.initWebSocket()
      const params = {

          event: "auth",
          body: {
            user: "123", // 开发期间暂时使用随机数
            pass: "123"  // 随机数
          }
      }
      // this.socketApi.sendSock(params);
      // this.dataFromWs = createWebSocket(this.dataFromWs);
      // console.log('aaaaaaa======' + this.dataFromWs)
      // createWebSocket();
      // ws.onmessage = function (event) {
          //拿到任何消息都说明当前连接是正常的
          // heartCheck.start();
          // console.log('111接收到消息' + JSON.stringify(event));
          // websocketonmessage(JSON.stringify(event.data));
          // dataFromWs = JSON.stringify(event.data)
          // heartCheck.start();
          // return JSON.stringify(event.data)
      // }
      // this.aaa()
      // this.task().then((v)=>{
      //   console.log(v);//"helloAsync"
      // })
      // this.requestLiftPos()
      // if (this.timer) {
      //   clearInterval (this.timer)
      // } else {
      //   this.timer = setInterval ( () => {
      //     this.requestLiftPos()
      //   }, 6000)
      // }
    },
    created () {
      // this.socketApi.initWebSocket()
      // async function helloAsync(){
      //   return "helloAsyn22222222c";
      // }
      // helloAsync().then(v=>{
      //   console.log(v);//"helloAsync"
      // })
    },
    
    beforeDestroy () {
      clearInterval(this.timer)
    },

    // destroyed() {
    // //页面销毁时关闭长连接
    //   this.websocket.close()
    // },
    methods: {
      closeWs(){
        alert("close?")
        closeWebSocket()
      },
      openWs(){
        createWebSocket()
      },
      dataFromWs(data){
        alert(12)
        console.log('data===' + data)
      },
      requestLiftPos() {
        // // axios.defaults.baseURL = "http://localhost";
        // $axios.get('/iotsqu/liftposition').then((resp) => {
        //   this.distance = resp.data.liftHeight.distance
        //   // this.distance =  Math.random() * 40
        //   this.speed = resp.data.liftRpm.rpm
        //   this.temp = resp.data.liftTemp.temp
        //   this.speedUnit = resp.data.liftRpm.unit
        //   this.tempUnit = resp.data.liftTemp.unit
        //   this.totalFloor = resp.data.liftHeight.total / resp.data.liftHeight.floorheight
        //   this.ratio = this.distance / resp.data.liftHeight.total * (document.getElementById('left').offsetHeight - 150) 
        //   this.floor = Math.floor(this.distance / resp.data.liftHeight.floorheight) + 1
        //   // console.log('ratio--' + document.getElementById('left').offsetHeight)
        // }).catch((e) => {
        //   console.log('axios get lift pos exception:' + e)
        // })


        // // 初始化一个 WebSocket 对象
        // var ws = new WebSocket("ws://192.168.100.11:8080/lift-wsapi");
        // const params = {
        //     event: "auth",
        //     body: {
        //         user: "123", // 开发期间暂时使用随机数
        //         pass: "123"  // 随机数
        //     }
        // }

        // // 建立 web socket 连接成功触发事件
        // ws.onopen = function () {
        //     // 使用 send() 方法发送数据
        //     ws.send(JSON.stringify(params));
        //     alert("数据发送中...");
        // };

        // // 接收服务端数据时触发事件
        // ws.onmessage = function (evt) {
        //   alert("数据已接收...");
        //   var received_msg = evt.data;
        //   console.log('received_msg' + received_msg)
        // };

        // ws.onerror = function () {
        //     console.log("WebSocket连接发生错误...");
        // };
        // // 断开 web socket 连接成功触发事件
        // ws.onclose = function () {
        //     console.log("连接已关闭...");
        // };


        // var ws;
        // function ToggleConnectionClicked() {
        // try {
        // ws = new WebSocket("ws://10.9.146.31:1818/chat");//连接服务器
        // ws.onopen = function(event){alert("已经与服务器建立了连接rn当前连接状态："+this.readyState);};
        // ws.onmessage = function(event){alert("接收到服务器发送的数据：rn"+event.data);};
        // ws.onclose = function(event){alert("已经与服务器断开连接rn当前连接状态："+this.readyState);};
        // ws.onerror = function(event){alert("WebSocket异常！");};
        // } catch (ex) {
        // alert(ex.message);
        // }
        // };
        
        // function SendData() {
        // try{
        // ws.send("beston");
        // }catch(ex){
        // alert(ex.message);
        // }
        // };
        
        // function seestate(){
        // alert(ws.readyState);
        // }

      },
    
    }
  }
</script>

<style lang="stylus">

// @import '../assets/stylus/utilities'

body,html
  margin 0
  font-family: pingfang
.main
  size 100%
  position relative
  .panel
    margin 4px
  .left
    absolute left 0
    width 35%
    height 100%
    background: #222229 url("./../assets/images/guidao.png") no-repeat center;
    background-size: 27px 100%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.21);
    text-align center
    .ele
      width 100%
      absolute bottom 0%
      transition 0.5s
      -moz-transition: 0.5s /* Firefox 4 */
      -webkit-transition: 0.5s /* Safari 和 Chrome */
      -o-transition: 0.5s /* Opera */
      transition-timing-function: ease-in-out
      text-align center
      .circle
        relative top 48px left -5px
        color #fff
        size 4px
        display inline-block
        border-radius 50%
        margin-right 3px
        background #5C6C77
        transition 0.5s
        -moz-transition: 0.5s /* Firefox 4 */
        -webkit-transition: 0.5s /* Safari 和 Chrome */
        -o-transition: 0.5s /* Opera */
        transition-timing-function: ease-in-out
    img{
      width: 105px;
      height: auto;
    }

  .right
    absolute left 35% right 0 bottom 0 top 0
    padding 33px 11.25px
    .title
      font-size: 21px;
      color: #FFFFFF;
      letter-spacing: 0.07px;
    select
      background-color:transparent;
      border-color:transparent;
      -webkit-appearance: none;
      background: #33CFA8;
      border-radius: 10px;
      color #fff
      padding 3px 15px
    
    .rect
      background: #222229;
      box-shadow: 0 4px 5px 0 rgba(0,0,0,0.46);
      border-radius: 4px;
      text-align center
      padding 15px 0 12.5px 0
      font-size: 12px;
      color: #A0B4C1;
      letter-spacing: 0.04px;
      img{
        width: auto;
        height: auto;
        max-width: 40%;
        max-height: 40%;	
      }
      .number
        font-size: 22px;
        color: #FFFFFF;
        letter-spacing: 0.08px;
        padding-left 10px
        font-family: myFirstFont;
      .unit
        padding-left 5px
        // absolute left 10px
      div:nth-child(3)
        margin-top 10px
  .bottomIcon
    absolute bottom 20px right 20px
    img{
        width: 62px;
        height: 10px;
      }
</style>
