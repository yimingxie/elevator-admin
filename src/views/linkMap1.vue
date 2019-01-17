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
        // 创建地图实例
    var map = new AMap.Map("container", {
        zoom: 13,
        center: [116.4,39.92],
        resizeEnable: true,
      mapStyle: 'amap://styles/twilight',
    });

    // 以 icon URL 的形式创建一个途经点
    var viaMarker = new AMap.Marker({
        position: new AMap.LngLat(116.38,39.92),
        // 将一张图片的地址设置为 icon
        icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
        // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
        offset: new AMap.Pixel(-13, -30)
    });

    // 创建一个 Icon
    var startIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(25, 34),
        // 图标的取图地址
        image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
        // 图标所用图片大小
        imageSize: new AMap.Size(135, 40),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3)
    });

    // 将 icon 传入 marker
    var startMarker = new AMap.Marker({
        position: new AMap.LngLat(116.35,39.89),
        icon: startIcon,
        offset: new AMap.Pixel(-13, -30)
    });

    // 创建一个 icon
    var endIcon = new AMap.Icon({
        size: new AMap.Size(25, 34),
        image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
        imageSize: new AMap.Size(135, 40),
        imageOffset: new AMap.Pixel(-95, -3)
    });

    // 将 icon 传入 marker
    var endMarker = new AMap.Marker({
        position: new AMap.LngLat(116.45,39.93),
        icon: endIcon,
        offset: new AMap.Pixel(-13, -30)
    });

    // 将 markers 添加到地图
    map.add([viaMarker, startMarker, endMarker]);
    // map.add([viaMarker]);

      },
      methods: {
      }
    };
</script>