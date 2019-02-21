<template>
    <div class="main-wrap">
        <div id="dateContainer">
            <div class="date__showNowTime">
                今天是 <span v-text="ynow"></span>年<span v-text="mnow+1"></span>月<span v-text="dnow"></span>日
            </div>
            <div class="nowTime">
                <button class="preMon" @click="preMon" :style="{background:Mindex === 0?'#0DBA7F' : '#1B1B23'}">上个月</button>
                <button class="thisMon" @click="Expired" :style="{background:Mindex === 1?'#DF4B4B' : '#1B1B23'}">
                    <!-- <span v-text="ynow"></span>/
                <span v-text="mnow+1">

                </span> -->
                45
                <p>已过期></p>
                </button>
                <button class="nextMon" @click="nextMon" :style="{background:Mindex === 2?'#6B50D0' : '#1B1B23'}">下个月</button>
            </div>
            <table border="1" id="table">
              <tr class="xinqi">
                <td class="isRed">日</td>
                <td>一</td>
                <td>二</td>
                <td>三</td>
                <td>四</td>
                <td>五</td>
                <td class="isRed">六</td>
              </tr>
              <tr v-for="i in tr_str" :key=i>
                <td v-for="k in 7" :key=k v-bind:class="{red:isred===(i-1) * 7 + k - firstnow}" @click="change((i-1) * 7 + k - firstnow)"> 

                  <div class="dateNub">
                    {{ getTitle((i-1) * 7 + k - firstnow) }} 
                  </div>

                  <div class="" v-for="(LMsg,index) in jsonHtml" :key=index  v-if="(i-1) * 7 + k - firstnow === jsonHtml[index].date">
                    <p>{{ LMsg.msg }}</p>
                    <div class="GqTotal">共{{ LMsg.total }}</div>
                  </div>
                </td>
              </tr>

            </table>
        
        </div>
    </div>
  </template>



  <script>
//   import AMap from 'AMap'
//   import Loca from 'Loca'
   export default {
    data() {
      return {
        newDate: '',//当前的日期的信息
        ynow: '',//当前的年数
        mnow: '',//当前选择的月份
        dnow: '',//当前的天数
        firstDay: '',//第一天
        firstnow: '',//当前的星期
        m_days: [],//每个月的天数
        tr_str: '',//行数
        nnn: 2,
        isred: 1,
        Mindex:0,
        jsonHtml : [{
          date: 2,
          msg: '1234',
          total:2300
        },
        {
          date: 3,
          msg: 3456,
          total:2300
        },
        {
          date: 4,
          msg: 3456,
          total:2300
        },
        {
          date: 6,
          msg: 2345,
          total:2300
        },
        {
          date: 12,
          msg: 0,
          total:2300
        },
        {
          date: 15,
          msg: 1234,
          total:2300
        },
        {
          date: 20,
          msg: 0,
          total:2300
        }]
      }
    },
    mounted() {
      //画出当前的月份的天数对应的表格
      this.getDaysInfo();
      //进行数据的获取，显示到对应的位置
    },
    methods: {
      getTitle(data1){
        if (data1 <= 0 || data1 > this.m_days[this.mnow] ) {
            return '';
        } else {
            return data1;
        }
      },
      change:function(index){
        if(index !='' && index > 0 && index <= this.m_days[this.mnow] ){
          this.isred=index
        }
      },
      getDaysInfo() {
        var _this = this;
        this.sureDate(_this);
      },
      is_leap(year) {//判断是不是闰年
        return (year%100==0?(year%400==0?1:0):(year%4==0?1:0));
      },
      //下面的是画表格的方法，这个方法会根据数据画出我们需要的表格
      drawTable(jsonHtml) {
          
        var _this = this;
        var str = `
        <tr class="xiqi">
          <td class="isRed">星期日</td>
          <td>星期一</td>
          <td>星期二</td>
          <td>星期三</td>
          <td>星期四</td>
          <td>星期五</td>
          <td class="isRed">星期六</td>
        </tr>`;
        var idx = '',date_str = '',isRed = '',hasMsg='';
        for(var i = 0; i< _this.tr_str; i++) {
          str+='<tr>';
          for(var k = 0; k < 7; k++) {
 
              idx = i*7+k;
              // isRed = (k===0||k===6)?"isRed":"";
              date_str= idx-_this.firstnow+1;
              console.log(date_str);
              // 确定日期
            (date_str<=0 || date_str>this.m_days[this.mnow]) ? date_str=" " : date_str=idx-_this.firstnow+1;
            // date_str==_this.dnow?hasMsg='<td class="thisDay" onclick="this.change('+ parseInt(_this.nnn) +')" date="'+date_str +'"><span>'+date_str+'</span></td>':hasMsg='<td date="'+date_str +'"><span>'+date_str+'</span></td>';
            hasMsg='<td>'+date_str+'</td>'
 
            // for(var l = 0, len = jsonHtml.length; l < len; l++) {
            //   if(date_str== jsonHtml[l].date) {
            //     var newStr = '<p>'+jsonHtml[l].msg +'</p>';
            //     date_str==_this.dnow?hasMsg='<td class="'+isRed +'" class="thisDay" date="'+date_str +'"><span>'+date_str+'</span>'+ newStr+'</td>':hasMsg='<td date="'+date_str +'"><span>'+date_str+'</span>'+ newStr+'</td>';
  
            //   }
            // }
            str+=hasMsg;
           }
          str+='</tr>';
        }
        var table = document.getElementById('table');
        table.innerHTML = str;
      },
      //两个参数代表的含义分别是this对象以及判断当前的操作是不是在进行月份的修改
      sureDate(_this,other) {
        this.newDate = new Date();
        this.ynow = this.newDate.getFullYear();
        if(!other) {
          this.mnow=this.newDate.getMonth(); //月份
        }
        this.dnow=this.newDate.getDate(); //今日日期
        // 设置日期为当月的第一天
        this.firstDay = new Date(this.ynow,this.mnow,1);
        console.log(this.firstDay)

        // 获取每月第一天是星期几
        this.firstnow=this.firstDay.getDay();
        console.log(this.firstnow)

        this.m_days = [31,28+this.is_leap(this.ynow),31,30,31,30,31,31,30,31,30,31];
        // 表格有几行
        this.tr_str = Math.ceil((_this.m_days[this.mnow] + this.firstnow)/7);
        // this.showMsg();
      },
      preMon() {
        this.Mindex = 0;
        var _this = this;
        this.mnow--;
        this.sureDate(_this,"up");
      },
      Expired(){
        this.Mindex = 1;
      },
      nextMon() {
        this.Mindex = 2;
        var _this = this;
        this.mnow++;
        this.sureDate(_this,"next");
      },
      //通过接口返回的是我们当前的月份对应在日历中需要处理的事项
      // showMsg() {
      //  var jsonHtml = [{
      //    date: 2,
      //    msg: '吃饭'
      //  },
      //  {
      //    date: 3,
      //    msg: '睡觉'
      //  },
      //  {
      //    date: 4,
      //    msg: '打豆豆'
      //  },
      //  {
      //    date: 6,
      //    msg: '豆豆不在家'
      //  },
      //  {
      //    date: 12,
      //    msg: '~~~~~'
      //  },
      //  {
      //    date: 15,
      //    msg: '怎么办1111111~~~~'
      //  },
      //  {
      //    date: 20,
      //    msg: '找豆豆'
      //  }];
      // //  this.drawTable(jsonHtml)
      // }
 
    },
    
   }
</script>
<style lang="stylus">
// 配置
@import '../assets/stylus/base'
@import '../assets/stylus/panel'
#dateContainer
  background: #16161C;
  box-shadow: -14px 0 37px 0 rgba(3,3,3,0.80);
  border-radius: 0 10px 10px 0;
  #table 
    width 100%
    td
      border: 1px solid rgba(102,102,127,0.23);
      size 157px 83.6px
      font-size: 12px;
      color: #66667F;
      letter-spacing: 0.02px;
      vertical-align top
      // cursor pointer
    .thisDay
      background red
    .red
      background: #0DBA7F;
      color: rgba(255,255,255,0.60);
    .xinqi td
      height 33px
      background: #23232D;
      font-size: 12px;
      color: #66667F;
      letter-spacing: 0.02px;
      text-align: center;
      vertical-align middle
    .dateNub
      text-align left
      margin 5px
    p
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0.02px;
      text-align: center;
      margin 9px 0 4px 0
.nowTime
  clearfix()
  .preMon,.nextMon,.thisMon
    size 25% 63px
    background: #1B1B23;
    font-size: 18px;
    color: #FFFFFF;
    float left
    cursor pointer
  .preMon
    width 50%

  
</style>
