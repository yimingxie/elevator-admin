<template>
    <div class="main-wrap">
      <div id="container_map" class="container"></div>
    </div>
  </template>

  <style lang="stylus">
    html,
    body,
    #container_map {
        margin: 0;
        padding: 0;
        width: 100%;
    }
    #container_map
      height:500px
    
    .info {
      background: #363F49;
      color: #A0A7B4;
      padding: 10px;
      max-width: 300px;
      min-width: 200px;
      font-size: 12px;
    }

    .info tr .content {
      text-align: right;
      color: #D3D8E0;
      max-width: 200px;
    }
  </style>

  <script>
  import AMap from 'AMap'
  import Loca from 'Loca'
  export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: 'hello'
        }
      },
      // mounted () {
      //   this.init()
      // },
     
      mounted() {
        // this.newMap()
        // alert(123)
        console.log('Loca===' + Loca)
        var el = document.getElementById('container_map');
        var locaMap = Loca.create('container_map', {
          pitch: 60,
          center: [116.473168, 39.993015],
          zoom: 22,
          mapStyle: 'amap://styles/twilight',
          // mapStyle: 'amap://styles/grey',
          // viewMode:'3D',
          features: ['bg', 'road', 'building', 'point']
          // Loca 自 1.2.0 起 viewMode 模式默认为 3D，如需 2D 模式，请显示配置。
          // viewMode: '3D'
        });
        // 底图加载完成触发
        locaMap.on('mapload', function () {
        // 获取 AMap.Map 实例
          var amap = locaMap.getMap();
          // 使用 AMap.Map 基本方法添加插件
          amap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.ControlBar'], function () {
            // 工具条
            amap.addControl(new AMap.ToolBar());
            // 比例尺
            amap.addControl(new AMap.Scale());
            // 控制条
            amap.addControl(new AMap.ControlBar());
          });
        });
        var bankMap = {
          // 1: '中国银行',
          // 2: '邮储银行',
          // 3: '工商银行',
          // 4: '建设银行',
          // 5: '交通银行',
          160139:{
            name:'农业银行',
            img: require('../assets/images/160107.png')
          },
          160108:{
            name:'农业银行',
            img: require('../assets/images/160107.png')
          },
          160107: {
            name:'农业银行',
            img: require('../assets/images/160107.png')
          },
          160109: {
            name:'农业银行',
            img: require('../assets/images/160109.png')
          },
          160111: {
            name:'农业银行',
            img: require('../assets/images/160107.png')
          },
          160107:{
            name:'农业银行',
            img: require('../assets/images/160111.png')
          }
        };

        var vl = Loca.visualLayer({
          eventSupport: true,
          type: 'point',
          shape: 'image',
          container: locaMap
        });
        
        vl.setData(bankData, {
          lnglat: 'location'
        });

        vl.setOptions({
          source: function(res) {
            var value = res.value;
            var typecode = value.typecode;
            var src
            // 这里需要写上 http 协议，不能忽略
            if ( bankMap[typecode] ) {
              src = bankMap[typecode].img
            } else {
              src = require('../assets/images/160107.png')
            }
            console.log(src)
            return src
          },
          style: {
            size: 35,
            radius: 10,
            color: 'red',
            borderColor: 'gray',
            borderWidth: 1,
            opacity: 0.9
          }
        });

        vl.on('mousemove', function (ev) {
          var rawData = ev.rawData;
          openInfoWin(locaMap.getMap(), ev.originalEvent, {
            '名称': rawData.name,
            '位置': rawData.address,
            '电话': rawData.tel
          });
        });

        vl.on('mouseleave', function (ev) {
          closeInfoWin();
        });

        vl.render();
      },
      methods: {
      }
    };
</script>