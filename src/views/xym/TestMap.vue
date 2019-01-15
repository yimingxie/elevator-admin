<template>
  <div id="test">
    <h1>地图测试</h1>
    <div id="container"></div>
  </div>
</template>

<script>
import AMap from "AMap"
import Loca from "Loca"
export default {

  data() {
    return {

    }
  },
  mounted() {
    let map = new AMap.Map('container', {
      // mapStyle: 'amap://styles/darkblue',
      // zoom:11,//级别
      center: [116.397428, 39.90923], //中心点坐标
      // zooms: [4,18],//设置地图级别范围
      // pitch:75,
      viewMode: "3D" //使用3D视图
    });
    var marker = new AMap.Marker({
      position: new AMap.LngLat(116.39,39.9),
      offset: new AMap.Pixel(-20, -20),
      icon: require('../../assets/images/160109.png'), // 添加 Icon 图标 URL
      title: '北京'
    });

    map.add(marker)

    //鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
    });


    // 实例化窗口信息
    var content = [];
    content.push("地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
    content.push("电话：010-64733333");
    content.push("<a class='info-title' href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");

    // 创建 infoWindow 实例 
    var infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: createInfoWindow(content.join("<br/>")),
        offset: new AMap.Pixel(16, -45)
    });

    // 实现自定义窗体内容，返回拼接后的字符串
    function createInfoWindow (content){
        // 内容拼接 ...
      var info = document.createElement("div");
      info.className = "info-box";
      info.innerHTML = content;
      return info;
    }


  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="stylus">
#test{
  color: #000 !important;

  #container{
    width: 800px;
    height: 600px;
  }
  .info-box{
    background: rgba(0,0,0,0.8);
    color: #fff;
    padding: 20px;
    width: 300px
  }
}

</style>
