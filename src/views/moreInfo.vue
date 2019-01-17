<template>
    <div class="main-wrap">
        <div id="container"></div>
    </div>
  </template>

  <style lang="stylus">
    html,
    body,
    #container
        margin: 0;
        padding: 0;
        width: 100%;

    #container
      height:500px

    .amap-icon img
      width: 25px;
      height: 34px;
    .content-window-card {
            position: relative;
            box-shadow: none;
            bottom: 0;
            left: 0;
            width: auto;
            padding: 0;
        }

        .content-window-card p {
            height: 2rem;
        }

        .custom-info {
            border: solid 1px silver;
        }

        div.info-top {
            position: relative;
            background: none repeat scroll 0 0 #F9F9F9;
            border-bottom: 1px solid #CCC;
            border-radius: 5px 5px 0 0;
        }

        div.info-top div {
            display: inline-block;
            color: #333333;
            font-size: 14px;
            font-weight: bold;
            line-height: 31px;
            padding: 0 10px;
        }

        div.info-top img {
            position: absolute;
            top: 10px;
            right: 10px;
            transition-duration: 0.25s;
        }

        div.info-top img:hover {
            box-shadow: 0px 0px 5px #000;
        }

        div.info-middle {
            font-size: 12px;
            padding: 10px 6px;
            line-height: 20px;
            color #000000
        }

        div.info-bottom {
            height: 0px;
            width: 100%;
            clear: both;
            text-align: center;
        }

        div.info-bottom img {
            position: relative;
            z-index: 104;
        }

        span {
            margin-left: 5px;
            font-size: 11px;
        }

        .info-middle img {
            float: left;
            margin-right: 6px;
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
        //初始化地图对象，加载地图
        var map = new AMap.Map("container", {resizeEnable: true});
        var lnglats = [
            [116.368904, 39.923423],
            [116.382122, 39.921176],
            [116.387271, 39.922501],
            [116.398258, 39.914600]
        ];
        var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
        for (var i = 0, marker; i < lnglats.length; i++) {
            var marker = new AMap.Marker({
                position: lnglats[i],
                map: map
            });
            marker.content = '我是第' + (i + 1) + '个Marker';
            marker.on('click', markerClick);
            marker.emit('click', {target: marker});
        }
        function markerClick(e) {
            infoWindow.setContent(e.target.content);
            infoWindow.open(map, e.target.getPosition());
        }
        map.setFitView();

      },
      methods: {
      }
    };
</script>