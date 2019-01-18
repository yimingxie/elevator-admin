<template>
    <div class="main-wrap">
        <button type="" @click="aaa()">aaa</button>
        <div id="container"></div>
        <table>
            <tr>
                <td>
                    <label>请输入关键字：</label>
                </td>
            </tr>
            <tr>
                <td>
                    <input id="tipinput"/>
                </td>
            </tr>
        </table>
        <div class="info">
            点击地图上的点标记，打开所添加的自定义信息窗体
        </div>
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
        width: 34px;
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
    import Vue from 'vue';
    
    var _this = this    // 当前组件对象
    // 生成html 和 时间
    var MyComponent = Vue.extend({
        template: '<a style="color:#07bb49;" v-on:click="world()">add Shop</a>',
        methods:{
                world:function() {
                    console.log(_this)
                    //点击事件 使用 组件对象
                }
        }
    });
    var component= new MyComponent().$mount();
    //  infowindow 内容定义   
    var infoWindow = new AMap.InfoWindow({
        content : component.$el
    });
  export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'hello',
                center: [117.368904, 39.923423],
                content:'111111111111'
            }
        },
        mounted() {
            this.initMap()
            document.createElement("ssaa").addEventListener("change", function(){
                // alert(closeX.selectedIndex)
                alert(111)
                // this.content = closeX.selectedIndex;
                // var infoWindow = new AMap.InfoWindow({
                // // isCustom: true,  //使用自定义窗体
                //     // content: this.createInfoWindow('123'),
                //     offset: new AMap.Pixel(16, -45)
                // });
                // console.log(etByClass(custom-info,"info-middle"))
                // this.content()
            });
            // var dsd = document.getElementById('lnglat').innerHTML
            // console.log(document.getElementById(lnglat))
            // console.log(this.$refs.mydom);
            
        },
        methods: {
            initMap(){
                var map = new AMap.Map("container", {
                    resizeEnable: true,
                    center: this.center,
                    zoom: 16
                });
                //输入提示
                var autoOptions = {
                    input: "tipinput"
                };
                var auto = new AMap.Autocomplete(autoOptions);
                var placeSearch = new AMap.PlaceSearch({
                    map: map
                });  //构造地点查询类1
                AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
                function select(e) {
                    placeSearch.setCity(e.poi.adcode);
                    placeSearch.search(e.poi.name);  //关键字查询查询
                }
                // addMarker();
                //实例化信息窗体
                var title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
                    content = [];
                content.push(this.content);
                // content.push("电话：010-64733333");
                // content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
                var infoWindow = new AMap.InfoWindow({
                    // isCustom: true,  //使用自定义窗体
                    content: this.createInfoWindow(title, content.join("<br/>")),
                    offset: new AMap.Pixel(16, -45)
                });
                //添加marker标记
                // function addMarker() {
                    map.clearMap();
                    var lnglats = [
                        [116.368904, 39.923423],
                        [116.382122, 39.921176],
                        [116.387271, 39.922501],
                        [116.398258, 39.914600]
                    ];
                    // var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
                    // for (var i = 0, marker; i < lnglats.length; i++) {
                    //     var marker = new AMap.Marker({
                    //         position: lnglats[i],
                    //         map: map
                    //     });
                    //     marker.content = '我是第' + (i + 1) + '个Marker';
                    //     marker.on('click', markerClick);
                    //     marker.emit('click', {target: marker});
                    // }
                    for (var i = 0, marker; i < lnglats.length; i++) {
                        var marker = new AMap.Marker({
                            map: map,
                            position: lnglats[i],
                        //  position: new AMap.LngLat(116.38,39.92),
                            // 将一张图片的地址设置为 icon
                            // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                            icon: require('../assets/images/160109.png'),
                            size: new AMap.Size(25, 34),
                            // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
                            // offset: new AMap.Pixel(-13, -30)
                            
                        });
                        title = i;
                        content = [];
                        content.push(this.content);
                        // content.push("电话：" + i + i + i);
                        // content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
                        // infoWindow = new AMap.InfoWindow({
                        //     isCustom: true,  //使用自定义窗体
                        //     content: this.createInfoWindow(title, content.join("<br/>")),
                        //     offset: new AMap.Pixel(16, -45)
                        // });
                        marker.content = this.createInfoWindow(title, content.join("<br/>"))
                        // infoWindow.setContent(this.createInfoWindow(title, content.join("<br/>")));
                        marker.on('click', markerClick);
                        marker.emit('click', {target: marker});
                        // marker.on('click', markerClick);
                        // marker.emit('click', {target: marker});
                        // AMap.event.addListener(marker, 'click', function () {
                        //     infoWindow.open(map, marker.getPosition());
                        // });
                        
                    }
                    
                    // marker.on('click', markerClick);
                    // marker.emit('click', {target: marker});
                    //鼠标点击marker弹出自定义的信息窗体
                    // AMap.event.addListener(marker, 'click', function () {
                    //     infoWindow.open(map, marker.getPosition());
                    // });
                // }
                function markerClick(e) {
                    infoWindow.setContent(e.target.content);
                    console.log(infoWindow.getContent())
                    // infoWindow.setContent('gfdh');
                    // alert(e.target.getPosition())
                    // infoWindow = new AMap.InfoWindow({
                    //     isCustom: true,  //使用自定义窗体
                    //     content: this.createInfoWindow(title, content.join("<br/>")),
                    //     offset: new AMap.Pixel(16, -45)
                    // });
                    infoWindow.open(map, e.target.getPosition());
                }
                // //实例化信息窗体
                // var title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
                //     content = [];
                // content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
                // content.push("电话：010-64733333");
                // content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
                // var infoWindow = new AMap.InfoWindow({
                //     isCustom: true,  //使用自定义窗体
                //     content: createInfoWindow(title, content.join("<br/>")),
                //     offset: new AMap.Pixel(16, -45)
                // });
                // function markerClick(e) {
                //     // infoWindow.setContent(e.target.content);
                //     infoWindow.open(map, e.target.getPosition());
                // }
                

                
                // map.setFitView();
            },
            aaa(){
                alert(67)
                this.center = [116.398258, 39.914600]
            },
            //关闭信息窗体
            closeInfoWindow() {
                alert(123)
                // this.map.clearInfoWindow();
            },
            
            //构建自定义信息窗体
            createInfoWindow(title, content) {
                var infoWindowContent =
                    '<div className="custom-infowindow input-card">' +
                        '<label style="color:grey">故宫博物院</label>' +
                        '<div class="input-item">' +
                            '<div class="input-item-prepend">' +
                                '<span class="input-item-text" >经纬度</span>' +
                            '</div>' +
                            '<input id="lnglat" type="text" value="22222222"/>' +
                        '</div>' +
                        // 为 infowindow 添加自定义事件
                        '<select id="ssaa"><option value="">111</option><option value="">222</option></select>' +
                    '</div>';
                
                return infoWindowContent;
                // var info = document.createElement("div");
                // info.className = "custom-info input-card content-window-card";

                // //可以通过下面的方式修改自定义窗体的宽高
                // //info.style.width = "400px";
                // // 定义顶部标题
                // var top = document.createElement("div");
                // var titleD = document.createElement("div");
                // var closeX = document.createElement("select");
                // closeX.innerHTML = "<option value = ''>11</option><option value = ''>23</option>";
                // // var opt = new Option("1","2");
                // // var closeX = '<select><option>111</option><option>111</option></select>'
                // // closeX.options.add(opt);
                // top.className = "info-top";
                // titleD.innerHTML = title;
                // // closeX.src = "https://webapi.amap.com/images/close2.gif";
                // closeX.addEventListener("change", function(){
                //     // alert(closeX.selectedIndex)
                //     this.content = closeX.selectedIndex;
                //     var infoWindow = new AMap.InfoWindow({
                //     // isCustom: true,  //使用自定义窗体
                //         // content: this.createInfoWindow('123'),
                //         offset: new AMap.Pixel(16, -45)
                //     });
                //     console.log(etByClass(custom-info,"info-middle"))
                //     // this.content()
                // });
                // // closeX.onclick = this.closeInfoWindow();
                // // closeX.on('click', this.closeInfoWindow());

                // top.appendChild(titleD);
                // top.appendChild(closeX);
                // info.appendChild(top);

                // // 定义中部内容
                // var middle = document.createElement("div");
                // middle.className = "info-middle";
                // middle.style.backgroundColor = 'white';
                // middle.innerHTML = content;
                // info.appendChild(middle);

                // // 定义底部内容
                // var bottom = document.createElement("div");
                // bottom.className = "info-bottom";
                // bottom.style.position = 'relative';
                // bottom.style.top = '0px';
                // bottom.style.margin = '0 auto';
                // var sharp = document.createElement("img");
                // sharp.src = "https://webapi.amap.com/images/sharp.png";
                // bottom.appendChild(sharp);
                // info.appendChild(bottom);
                // return info;
            },
            getClass(oParent,clsName){
        　　    var oParent = document.getElementById(oParent);
                var boxArr = new Array();
            oElements  = oParent.getElementsByTagName('*');
            for(var i=0;i<oElements.length;i++){
                if(oElements[i].className == clsName){
                    boxArr.push(oElements[i]);
                }
                }
                return boxArr;
            }
        }
    };
</script>