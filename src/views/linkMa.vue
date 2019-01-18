<template>
    <div class="main-wrap">
        <!-- <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select> -->
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
<script>
    import Vue from 'vue'
    var _this = this
    export default {
        name: 'HelloWorld',
        data () {
            return {
            }
        },
        mounted() {
            this.initMap()
            // this.initPro()
            document.createElement("ssaa").addEventListener("change", function(){
            });
        },
        methods: {
            initMap(){
                var sel = '<el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>'
                console.log('sel===' + sel)
                // 生成html 和 时间
                var MyComponent = Vue.extend({
                    template: `<div><div>id:::{{id}}</div>name:::{{name}}<div>${sel}</div></div>`,
                    data() {
                        return {
                            id:'000',
                            name:0,
                            title:1,
                            selectValue :'12楼A区',
                            options : [{
                                value: '12A',
                                label: '12楼A区'
                            }, {
                                value: '12B',
                                label: '12楼B区'
                            }, {
                                value: '12C',
                                label: '12楼C区'
                            }]
                        }
                    },
                    watch:{

                    },
                    mounted(){

                    },
                    methods:{
                     
                    }
                });
                var component= new MyComponent().$mount();
                var map = new AMap.Map("container", {
                    resizeEnable: true,
                    center: this.center,
                    zoom: 12,
                    // mapStyle: "amap://styles/grey", //设置地图的显示样式
                });
                map.setFeatures(['point','building']);
                // var disProvince
                // disProvince && disProvince.setMap(null);

                var disProvince = new AMap.DistrictLayer.Province({
                    zIndex: 12,
                    adcode: [440300],
                    depth: 2,
                    styles: {
                        'fill': function (properties) {
                            // properties为可用于做样式映射的字段，包含
                            // NAME_CHN:中文名称
                            // adcode_pro
                            // adcode_cit
                            // adcode
                            console.log('properties--' + JSON.stringify(properties))
                            var adcode = properties.adcode;
                            console.log('this--' + this)
                            var gb = Math.random() * 155 + 50;
                            // colors[adcode] = 'rgb(' + gb + ',0,0)';
                            return 'rgb(' + gb + ',' + gb + ',255)'
                        },
                        'province-stroke': 'cornflowerblue',
                        'city-stroke': 'white', // 中国地级市边界
                        'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
                    }
                });

                disProvince.setMap(map);
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
                //实例化信息窗体
                var title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
                    content = [];
                content.push(this.content);
                var infoWindow = new AMap.InfoWindow({
                    // isCustom: true,  //使用自定义窗体
                    content: component.$el,
                    offset: new AMap.Pixel(16, -45)
                });
                //添加marker标记
                // function addMarker() {
                    map.clearMap();
                    var lnglats = [{
                        id:0,
                        position:[114.09217,22.54727],
                        name: '花园数码大厦',
                        eleOptions: [{
                            value: '12A',
                            label: '12楼A区'
                        }, {
                            value: '12B',
                            label: '12楼B区'
                        }, {
                            value: '12C',
                            label: '12楼C区'
                        }]
                    }, {
                        id: 1,
                        position:[114.091998,22.531178],
                        name: '京山花园酒店',
                        eleOptions: [{
                            value: '1',
                            label: '11111111'
                        }, {
                            value: '2',
                            label: '2222222222'
                        }, {
                            value: '3',
                            label: '3333333'
                        }]
                    }, {
                        id: 2,
                        position:[114.074832,22.544258],
                        name: '12C',
                        eleOptions: [{
                            value: '12A',
                            label: '12楼AAAA区'
                        }, {
                            value: '12B',
                            label: '12楼BBBB区'
                        }, {
                            value: '12C',
                            label: '12楼CCCC区'
                        }, {
                            value: '12CC',
                            label: '12楼CCCC区'
                        }]
                    }]
                    for (var i = 0, marker; i < lnglats.length; i++) {
                        var marker = new AMap.Marker({
                            map: map,
                            position: lnglats[i].position,
                        //  position: new AMap.LngLat(116.38,39.92),
                            // 将一张图片的地址设置为 icon
                            // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                            icon: require('../assets/images/160109.png'),
                            size: new AMap.Size(25, 34),
                            // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
                            
                        });
                        marker.id = lnglats[i].id
                        marker.name = lnglats[i].name
                        marker.options = lnglats[i].eleOptions
                        console.log(lnglats[i].eleOptions)
                        // infoWindow.setContent(this.createInfoWindow(title, content.join("<br/>")));
                        marker.on('click', markerClick);
                        marker.emit('click', {target: marker});
                    }
                function markerClick(e) {
                    component.$data.id = e.target.id
                    component.$data.name = e.target.name
                    component.$data.options = e.target.options
                    component.$data.selectValue = e.target.options[0].label
                    infoWindow.open(map, e.target.getPosition());
                }
            },
            aaa(){
                alert(67)
                this.center = [116.398258, 39.914600]
            },
             // 创建省份图层
            initPro(code, dep) {
                // dep = typeof dep == 'undefined' ? 2 : dep;
                // adCode = code;
                // depth = dep;

                disProvince && disProvince.setMap(null);

                disProvince = new AMap.DistrictLayer.Province({
                    zIndex: 12,
                    adcode: [440300],
                    depth: 2,
                    styles: {
                        'fill': function (properties) {
                            // properties为可用于做样式映射的字段，包含
                            // NAME_CHN:中文名称
                            // adcode_pro
                            // adcode_cit
                            // adcode
                            var adcode = properties.adcode;
                            return getColorByAdcode(adcode);
                        },
                        'province-stroke': 'cornflowerblue',
                        'city-stroke': 'white', // 中国地级市边界
                        'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
                    }
                });

                disProvince.setMap(map);
            },
            // 颜色辅助方法
            getColorByAdcode (adcode) {
                if (!colors[adcode]) {
                    var gb = Math.random() * 155 + 50;
                    colors[adcode] = 'rgb(' + gb + ',0,0)';
                }
                return colors[adcode];
            }
        }
    };
</script>

<style lang="stylus">
    html,
    body,
    #container
        margin: 0;
        padding: 0;
        width: 100%;

    #container
        height:500px
    .amap-info-content {
        background: #b96868;}
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