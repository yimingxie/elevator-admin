<template>
    <div class="main-wrap">
        <!-- 地图 -->
       <div id="MapContainer" class="panel">
            <!-- <div id="locTip" style="position:fixed;top:85px;z-index:200">点击地图进行区域定位
            </div> -->
            <div class="MapTitle">
                <span v-if="!isEnlargeMap" class="MapTitle_title">本市地图</span>
                <span id="isAllMap" v-if="!isEnlargeMap" class="MapTitle_btn">查看全市电梯分布</span>
                <span v-if="isEnlargeMap" class="MapTitle_title"><span @click="drawMap()"> &gt; 返回全市 / </span>  深圳市{{ region }}</span>
                <div v-if="isEnlargeMap" class="circleType" style="float: right">
                    <i class="circle"></i><span>正常运行</span>
                    <i class="circle" style="background:#6B50D0"></i><span>例行维保</span>
                    <i class="circle" style="background:#FEC101"></i><span>故障检修</span>
                    <i class="circle" style="background:#F56F6F"></i><span>事故救援</span>
                </div>
            </div>
            <div class="circleType" style="position:fixed;top:85px;z-index:200;left:400px;">
                <!-- <i class="circle"></i><span>正常运行</span>
                <i class="circle" style="background:#6B50D0"></i><span>例行维保</span>
                <i class="circle" style="background:#FEC101"></i><span>故障检修</span>
                <i class="circle" style="background:#F56F6F"></i><span>事故救援</span> -->
            </div>
            <div class="row" style="height: 100%;">
                <div class="col-xs-9" style="padding-left:2px;padding-right:2px;height: 100%;">
                    <div id="container" tabindex="0" style="height: 100%;"></div>
                </div>
            </div>
        </div>
        <div class="right">
           <div class="panel">
               <el-row class="">
                    <el-col :span="4">
                        <div class=" summary summary1">
                            <div class="sum-gradient"></div>
                            <div class="summaryItem tab" style="background-image: linear-gradient(90deg, #0DBA7F 0%, rgba(13,186,127,0.40) 100%);">
                                <div class="tabTitle"><span class="info-number" id='time1'>电梯维保统计</span></div>
                                <div class="info-label"><img src="../assets/images/hs/today.png" alt=""/>今天</div>
                                <div class="info-label"><img src="../assets/images/hs/quyu.png" alt=""/>深圳市{{ region }}</div>
                            </div>
                            <div class="summaryItem" style="margin-top:8px;background: #1D1D26;box-shadow: 0 21px 20px -14px rgba(10,23,63,0.15);">
                                <div><span class="info-number" id='time1' style="color: #DF4B4B;">30%</span></div>
                                <div class="info-label">维保超时率</div>
                                <span class="aside-border-line"></span>
                                <el-row>
                                    <el-col :span="12" style="position: relative;">
                                       <div style="position: relative;">
                                          <!-- <div style="position: absolute;right: 10px;top: 8px;background: #18181e;width: 1px;height: 38px;"></div> -->

                                           <span class="info-number fontSize18" style="color: #0DBA7F;" id='time1'>11854</span>
                                           </div>
                                        <div class="info-label fontSize12">已维保数</div>
                                    </el-col>
                                    <el-col :span="12" >
                                       <div><span class="info-number fontSize18" id='time1'>17300</span></div>
                                        <div class="info-label fontSize12">总需维保数</div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" >
                        <div class=" charts">
                            <div class="chart_Total_title chart_Total_title_x">
                                <span class="chart_title">维保及时率统计</span>
                                <div class="chart-x-title">
                                    <span class="chart_title">91582<span class="unit">维保电梯数</span></span>
                                    <span class="chart_title">2356<span class="unit">维保及时数</span></span>
                                    <span class="chart_title">2356<span class="unit">维保及时率</span></span>
                                </div>
                                <!-- <span class="chart_title">91582<span class="unit">维保电梯数</span></span>
                                <span class="chart_title">2356<span class="unit">维保及时数</span></span>
                                <span class="chart_title">2356<span class="unit">维保及时率</span></span> -->
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="month"
                                        placeholder="选择月">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>公司排名</button>
                                </span>
                            </div>
                            <div id="chartbar1"></div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="">
                    <el-col :span="24">
                        <div class="spiltBar"></div>
                    </el-col>
                </el-row>
                <el-row class="">
                    <el-col :span="4">
                        <div class=" summary summary2">
                            <div class="sum-gradient"></div>
                            <div style="border-bottom:2px solid #131319">
                                <span  class="rect" ></span>
                                <span class="iconImg iconImg1"></span>
                                <div class="summaryItem" >
                                    <div><span class="info-number" id='time1'>1854</span></div>
                                    <div class="info-label">维保人员数</div>
                                    <span class="border-line"></span>
                                    <div class="chart_title">2356<span class="unit">梯/天</span></div>
                                </div>
                                <div style="clear:both"></div>
                            </div>
                            <div>
                                <span class="rect"></span>
                                <span class="iconImg iconImg2"></span>
                                <div class="summaryItem" >
                                    <div><span class="info-number" id='time1'>1854</span></div>
                                    <div class="info-label">维保企业数</div>
                                    <span class="border-line"></span>
                                    <div class="chart_title">2356<span class="unit">梯/天</span></div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" >
                        <div class="charts">
                            <div class="chart_Total_title chart_Total_title_x">
                                <span class="chart_title">人均维保梯数统计</span>
                                <div class="chart-x-title">
                                    <span class="chart_title">91582<span class="unit">维保电梯数</span></span>
                                    <span class="chart_title">20梯/月<span class="unit">维保人员</span></span>
                                    <span class="chart_title">60梯/月<span class="unit">维保人员</span></span>
                                </div>
                                <!-- <span class="chart_title">91582<span class="unit">维保电梯数</span></span>
                                <span class="chart_title">20梯/月<span class="unit">维保人员</span></span>
                                <span class="chart_title">60梯/月<span class="unit">维保人员</span></span> -->
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="month"
                                        placeholder="选择月">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>公司排名</button>
                                </span>
                            </div>
                            <el-row class="" >
                                <el-col :span="16" style="border-right: rgba(48,52,72,0.80) 1px solid;">
                                    <div id="chartbar2"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="chart_Total_title" style="padding-left:20px">
                                        <span class="chart_title fontSize14"><span style="display:inline-block;width:4px;height:12px;background:#fff9f9;border-radius: 2px;margin-right:8px"></span>维保人员月均维保梯数</span>
                                    </div>
                                    <div id="chartpie"></div>
                                </el-col>
                            </el-row>
                            
                        </div>
                    </el-col>
                </el-row>
                <el-row class="">
                    <el-col :span="24">
                        <div class="spiltBar"></div>
                    </el-col>
                </el-row>
                 <el-row class="">
                    <el-col :span="4">
                        <div class=" summary summary2">
                            <div class="sum-gradient"></div>
                            <div style="border-bottom:2px solid #131319">
                                <span  class="rect" ></span>
                                <span class="iconImg iconImg3"></span>
                                <div class="summaryItem" style="padding: 51px 0 20px 49px;">
                                    <div><span class="info-number" id='time1'>1854</span></div>
                                    <div class="info-label">维保平均时长</div>
                                </div>
                                <div style="clear:both"></div>
                            </div>
                            <div>
                                <span class="rect"></span>
                                <span class="iconImg iconImg4"></span>
                                <div class="summaryItem" style="padding: 51px 0 20px 49px;">
                                    <div><span class="info-number" id='time1'>1854</span></div>
                                    <div class="info-label">低于40分钟</div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <div class="charts">
                            <div class="chart_Total_title chart_Total_title_x">
                                <span class="chart_title">维保时长<span class="unit">/ 分钟</span></span>
                                <div class="chart-x-title">
                                    <span class="chart_title">3.5h<span class="unit">平均时长</span></span>
                                    <span class="chart_title">20%<span class="unit">低于40分钟</span></span>
                                    <span class="chart_title">20%<span class="unit">低于50分钟</span></span>
                                </div>
                                <!-- <span class="chart_title">3.5h<span class="unit">平均时长</span></span>
                                <span class="chart_title">20%<span class="unit">低于40分钟</span></span>
                                <span class="chart_title">20%<span class="unit">低于50分钟</span></span> -->
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="month"
                                        placeholder="选择月">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>公司排名</button>
                                </span>
                            </div>
                            <el-row class="" >
                                <el-col :span="16" style="border-right: rgba(48,52,72,0.80) 1px solid;">
                                    <div id="chartbar4"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div id="chartpie3"></div>
                                </el-col>
                            </el-row>
                            
                        </div>
                    </el-col>
                </el-row>
           </div>
           <div class="panel">
               <el-row class="">
                    <el-col :span="4">
                        <div class="summary summary3">
                            <div class="sum-gradient"></div>
                            <div class="summaryItem tab" style="background-image: linear-gradient(90deg, #0DBA7F 0%, rgba(13,186,127,0.40) 100%);">
                                <div class="tabTitle"><span class="info-number" id='time1'>电梯运行里程</span></div>
                                <div class="info-label"><img src="../assets/images/hs/today.png" alt=""/>今天</div>
                                <div class="info-label"><img src="../assets/images/hs/quyu.png" alt=""/>深圳市{{ region }}</div>
                            </div>
                            <div class="summaryItem summaryItemList summaryItemList_x" style="padding-bottom: 213px;">
                                <div class=""><span class="info-number" id='time1' style="color: #0DBA7F;">1687</span><span class="unit"> km</span></div>
                                <div class="info-label">2019年累计运行里程</div>
                                <div><span class="info-number fontSize18" id='time1'>300</span><span class="unit"> km/梯</span></div>
                                <div class="info-label">当月累计里程平均值</div>
                                <div><span class="info-number fontSize18" id='time1'>787</span><span class="unit"> km/梯</span></div>
                                <div class="info-label">半年累计里程平均值</div>
                                <div><span class="info-number fontSize18" id='time1'>1600</span><span class="unit"> km/梯</span></div>
                                <div class="info-label">年度累计里程平均值</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" >
                        <div class=" charts">
                            <div class="chart_Total_title">
                                <span class="chart_title">电梯运行里程<span class="unit">/ km</span></span>
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="year"
                                        placeholder="选择年">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>电梯品牌维保公司质量排名</button>
                                </span>
                            </div>
                            <el-row class="" style="border-bottom: 1px solid rgba(48,52,72,0.80);">
                                <el-col :span="16" style="border-right: 1px solid rgba(48, 52, 72, 0.8);">
                                    <div id="chartbar3"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div id="chartpie2"></div>
                                </el-col>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">配件成本<span class="unit">/ 元</span></span>
                                    </div>
                                    <div id="lineChart"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px;">故障数<span class="unit">/ 次</span></span>
                                    </div>
                                    <div id="lineChart2"></div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
           </div>
            <div class="panel">
                <div class="sum-gradient"></div>
               <el-row class="">
                    <el-col :span="4">
                        <div class="summary summary3">
                            <div class="summaryItem tab" style="background-image: linear-gradient(90deg, rgba(254,56,143,0.40) 0%, #F75F5F 100%);">
                                <div class="tabTitle"><span class="info-number" id='time1'>电梯实时故障预测健康管理</span></div>
                                <div class="info-label"><img src="../assets/images/hs/today.png" alt=""/>今天</div>
                                <div class="info-label"><img src="../assets/images/hs/quyu.png" alt=""/>深圳市{{ region }}</div>
                            </div>
                            <div class="summaryItem summaryItemList" >
                                <div class=""><span class="info-number" id='time1'>3687</span></div>
                                <div class="info-label">总预警数</div>
                                <div style="position:relative">
                                    <div class="proportionBar">
                                        <div class="proportionBar_item" v-bind:style="{height:ratio[0]+'%'}"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[1]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[2]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[3]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[4]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[5]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[6]+'%' }"></div>
                                        <div class="proportionBar_item" :style="{ height:ratio[7]+'%' }"></div>
                                    </div>
                                    <canvas id="myCanvas" width="100" height="397" style="position: absolute;"></canvas>
                                    <div class="proportionInfo">
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #5A39D5;"></span>
                                            <i class="circle" style="background: #5A39D5;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[0] }}%</span></div>
                                            <div class="info-label">机房环境</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #8423E2;"></span>
                                            <i class="circle" style="background: #8423E2;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[1] }}%</span></div>
                                            <div class="info-label">控制柜</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #E22340;"></span>
                                            <i class="circle" style="background: #E22340;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[2] }}%</span></div>
                                            <div class="info-label">曳引机</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #F56F6F;"></span>
                                            <i class="circle" style="background: #F56F6F;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[3] }}%</span></div>
                                            <div class="info-label">限速器</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #FEC101;"></span>
                                            <i class="circle" style="background: #FEC101;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[4] }}%</span></div>
                                            <div class="info-label">制动器</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background: #F9D562;"></span>
                                            <i class="circle" style="background: #F9D562;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[5] }}%</span></div>
                                            <div class="info-label">控制轿厢柜</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background:#CB500F;"></span>
                                            <i class="circle" style="background:#CB500F;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[6] }}%</span></div>
                                            <div class="info-label">安全回路</div>
                                        </div>
                                        <div class="proportionInfo_item">
                                            <span class="line" style="background:#FE7D01;"></span>
                                            <i class="circle" style="background:#FE7D01;"></i>
                                            <div><span class="info-number fontSize18" id='time1'>{{ ratio[7] }}%</span></div>
                                            <div class="info-label">门锁回路</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="20" >
                        <div class=" charts" style="padding-bottom: 30px;position: relative;">
                            <div class="chart_Total_title chart_Total_title_x">
                                <span class="chart_title">电梯实时故障预测统计</span>
                                <div class="chart-x-title">
                                    <span class="chart_title">95325<span class="unit">年度预警数</span></span>
                                    <span class="chart_title">31200<span class="unit">月度预警数</span></span>
                                </div>
                                <!-- <span class="chart_title">95325<span class="unit">年度预警数</span></span>
                                <span class="chart_title">31200<span class="unit">月度预警数</span></span> -->
                                <span class="chart_title_right">
                                    <el-date-picker
                                        v-model="value1"
                                        type="month"
                                        placeholder="选择月">
                                    </el-date-picker>
                                    <el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>
                                    <button class="rank btn" disabled>公司排名</button>
                                </span>
                            </div>
                            <el-row class="" style="border-bottom: 1px solid rgba(48,52,72,0.80);">
                                <div id="chartbar5"></div>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">机房环境预警数</span>
                                    </div>
                                    <div id="lineChart3"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px">控制柜预警数</span>
                                    </div>
                                    <div id="lineChart4"></div>
                                </el-col>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">曳引机预警数</span>
                                    </div>
                                    <div id="lineChart5"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px">限速器预警数</span>
                                    </div>
                                    <div id="lineChart6"></div>
                                </el-col>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">制动器预警数</span>
                                    </div>
                                    <div id="lineChart7"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px">轿厢预警数</span>
                                    </div>
                                    <div id="lineChart8"></div>
                                </el-col>
                            </el-row>
                            <el-row class="" style="margin-top:20px">
                                <el-col :span="12" >
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14">安全回路预警数</span>
                                    </div>
                                    <div id="lineChart9"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="chart_Total_title">
                                        <span class="chart_title fontSize14" style="margin-left:12px">门锁回路预警数</span>
                                    </div>
                                    <div id="lineChart10"></div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
           </div>
       </div>
    </div>

</template>
<script>
    import Vue from 'vue'
    import api from 'api'
    import echarts from 'echarts'
    import gcoord from 'gcoord'
    import AMapUI from 'AMapUI'
    var _this = this
    var sel = '<el-select v-model="selectValue" placeholder="请选择"><el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option></el-select>'
    console.log('sel===' + sel)
    // 生成html 和 时间
    var MyComponent = Vue.extend({
        template: `<div class="infoWindows" :class="infoWindowsClass">
            <span class="topImg" ></span>
            <div class="infoWindows_title"><span>电梯概况</span><i>{{typeInfo}}</i></div>
            <div class="infoWindows_info"> 设备名称</div>
            <div class="infoWindows_data">{{ name }}</div>
            <div class="infoWindows_info"> 设备型号：</div>
            <div class="infoWindows_data">{{ name }}</div>
            <div class="infoWindows_info"> 使用单位：</div>
            <div class="infoWindows_data">{{ name }}</div>
            <div class="infoWindows_info"> 使用地点：</div>
            <div class="infoWindows_data">{{ name }}</div>
            <div class="infoWindows_details"><a href="/lift/gov/#/detail">查看详情</a></div>
            <i class="detailIcon"></i>
            <span class="bottomImg"></span>
        </div>`,
        data() {
            return {
                // dataJson:[],
                location:'000，000',
                name:0,
                title:1,
                type:0,
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
                }], 
                // topImgClass: 'topImg1',
                // bottomImgClass: 'bottomImg1',
                typeInfo:'',
                infoWindowsClass:'infoWindowsClass1',
                
            }
        },
        watch:{
            type(){
                if( this.type === 0){
                    this.infoWindowsClass = 'infoWindowsClass1'
                    this.typeInfo = '正常运行'
                } else if(this.type === 1) {
                    this.infoWindowsClass = 'infoWindowsClass2'
                    this.typeInfo = '例行维保'
                } else if(this.type === 2) {
                    this.infoWindowsClass = 'infoWindowsClass3'
                    this.typeInfo = '故障检修'
                } else {
                    this.infoWindowsClass = 'infoWindowsClass4'
                    this.typeInfo = '事故救援'
                }
                console.log('1111111===' + JSON.stringify(this.topImgClass))
            }
        }
    });
    var component= new MyComponent().$mount();
    export default {
        name: 'HelloWorld',
        data () {
            return {
                value1:'2',
                selectValue:'',
                options: [{
                    value: '440303',
                    label: '罗湖区'
                }, {
                    value: '440304',
                    label: '福田区'
                }, {
                    value: '440305',
                    label: '南山区'
                }, {
                    value: '440306',
                    label: '宝安区'
                }, {
                    value: '440307',
                    label: '龙岗区'
                }, {
                    value: '440308',
                    label: '盐田区'
                }, {
                    value: '440309',
                    label: '龙华区'
                }, {
                    value: '440310',
                    label: '坪山区'
                }],
                today:'',
                month:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                day:['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
                ratio:[20,15,15,10,10,10,10,10],
                // isAllMap: false,
                isEnlargeMap:false,
                region:'',
                Xdata: [this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000),this.selectfrom(0, 2000)]
            }
        },
        mounted(){
            let _this = this
            // api.corp.elevator(1,5).then(res => {
            //     console.log(JSON.stringify(res))
            // })

            // 地图缩放适配
            let zoom_x = 10
            let windowWeight = document.body.offsetWidth
            if (windowWeight < 1800) {
                zoom_x = 9
            }

            this.drawMap(zoom_x)
            console.log('result====' + this.data)
            // 维保及时率统计
            this.drawBarChart()
            // 人均维保梯数统计
            this.drawBarChart2()
            this.drawPieChart()
            // 电梯运行里程
            this.drawBarChart3()
            this.drawPieChart2()
            this.drawLineChart()
            this.drawLineChart2()
            // 维保时长
            this.drawBarChart4()
            this.drawPieChart3()
            // 电梯实时故障预测统计
            this.drawBarChart5()
            this.drawLineChart3()
            this.drawLineChart4()
            this.drawLineChart5()
            this.drawLineChart6()
            this.drawLineChart7()
            this.drawLineChart8()
            this.drawLineChart9()
            this.drawLineChart10()
            // 图表 end---
            this.drawLine()
            this.today = this.getCurrentDate(1)

            // 图表自适应
            let chartbar1 = this.$echarts.getInstanceByDom(document.getElementById("chartbar1"));
            let chartbar2 = this.$echarts.getInstanceByDom(document.getElementById("chartbar2"));
            let chartpie = this.$echarts.getInstanceByDom(document.getElementById("chartpie"));
            let chartbar4 = this.$echarts.getInstanceByDom(document.getElementById("chartbar4"));
            let chartpie3 = this.$echarts.getInstanceByDom(document.getElementById("chartpie3"));
            let chartbar3 = this.$echarts.getInstanceByDom(document.getElementById("chartbar3"));
            let chartpie2 = this.$echarts.getInstanceByDom(document.getElementById("chartpie2"));
            let lineChart = this.$echarts.getInstanceByDom(document.getElementById("lineChart"));
            let lineChart2 = this.$echarts.getInstanceByDom(document.getElementById("lineChart2"));
            let chartbar5 = this.$echarts.getInstanceByDom(document.getElementById("chartbar5"));
            let lineChart3 = this.$echarts.getInstanceByDom(document.getElementById("lineChart3"));
            let lineChart4 = this.$echarts.getInstanceByDom(document.getElementById("lineChart4"));
            let lineChart5 = this.$echarts.getInstanceByDom(document.getElementById("lineChart5"));
            let lineChart6 = this.$echarts.getInstanceByDom(document.getElementById("lineChart6"));
            let lineChart7 = this.$echarts.getInstanceByDom(document.getElementById("lineChart7"));
            let lineChart8 = this.$echarts.getInstanceByDom(document.getElementById("lineChart8"));
            let lineChart9 = this.$echarts.getInstanceByDom(document.getElementById("lineChart9"));
            let lineChart10 = this.$echarts.getInstanceByDom(document.getElementById("lineChart10"));


            window.addEventListener("resize", function() {
                chartbar1.resize();
                chartbar2.resize();
                chartpie.resize();
                chartbar4.resize();
                chartpie3.resize();
                chartbar3.resize();
                chartpie2.resize();
                lineChart.resize();
                lineChart2.resize();
                chartbar5.resize();
                lineChart3.resize();
                lineChart4.resize();
                lineChart5.resize();
                lineChart6.resize();
                lineChart7.resize();
                lineChart8.resize();
                lineChart9.resize();
                lineChart10.resize();

                let windowWeight = document.body.offsetWidth
                if (windowWeight < 1800) {
                    zoom_x = 9
                } else {
                    zoom_x = 10
                }

                _this.drawMap(zoom_x)

            });
            
        },


        methods: {
            // goDetail() {
            //     console.log(11)
            // },
            toAmap(location){
                return gcoord.transform(
                    location,    // 经纬度坐标
                    gcoord.WGS84,
                    gcoord.AMap
                );
                // return result
            },
            toWgs(location){
                return gcoord.transform(
                    location,    // 经纬度坐标
                    gcoord.AMap,
                    gcoord.WGS84
                );
                // return result
            },
            drawMap(zoom_x){
                var _this = this
                // _this.isAllMap = false
                _this.isEnlargeMap = false
                //创建地图
                var map = new AMap.Map('container', {
                    cursor: 'default',
                    // zoom: 10,
                    zoom: zoom_x,
                    center: [114.191998,22.641178],
                    mapStyle: "amap://styles/1bfbe59619e6c0b9f07090f826d40521"
                });
                // 搜索地图
                // var autoOptions = {
                //     input: "tipinput"
                // };
                // var auto = new AMap.Autocomplete(autoOptions);
                // var placeSearch = new AMap.PlaceSearch({
                //     map: map
                // });  //构造地点查询类1
                // AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
                // function select(e) {
                //     placeSearch.setCity(e.poi.adcode);
                //     placeSearch.search(e.poi.name);  //关键字查询查询
                // }
                // 搜索地图 end-//
                // var count = 0, clickListener;
                // var _onClick = function(e) {
                //     map.remove(overlays)
                //     new AMap.Marker({
                //         position: e.lnglat,
                //         map: map
                //     })
                //     map.emit('count', {count: count += 1});//触发自定义事件
                // }
                // // map.on("count", _onCount); 
                // clickListener = AMap.event.addListener(map, "click", _onClick);
                // // 画定位图标
                // var mouseTool = new AMap.MouseTool(map);
                // //监听draw事件可获取画好的覆盖物
                // var overlays = [];
                // mouseTool.on('draw',function(e) {
                //     // 清除所有标点
                //     // 设置缩放级别和中心点
                    
                //     map.remove(overlays)
                //     overlays = [];
                //     overlays.push(e.obj);
                // })
                // function draw(type){
                //     switch(type){
                //         case 'marker':{
                //             mouseTool.marker({
                //             //同Marker的Option设置
                //         });
                //     break;
                // }}}
                // draw('marker')
                AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function(DistrictExplorer, $){
                    initPage(DistrictExplorer);
                });
                AMapUI.loadUI(['overlay/SvgMarker'], function(SvgMarker) {
                if (!SvgMarker.supportSvg) {
                    //当前环境并不支持SVG，此时SvgMarker会回退到父类，即SimpleMarker
                    alert('当前环境不支持SVG');
                }
                
            
                
               
                // map.on("zoomchange", function() {
                   
                // })

                
                });


                //**************控制地图行政区划显示开始***********************
                function getAllRings(feature) {


                    var coords = feature.geometry.coordinates,
                        rings = [];


                    for (var i = 0, len = coords.length; i < len; i++) {
                        rings.push(coords[i][0]);
                    }


                    return rings;
                }
                function getLongestRing(feature) {
                    var rings = getAllRings(feature);
                    rings.sort(function(a, b) {
                        return b.length - a.length;
                    });
                    return rings[0];
                }
                //just some colors
                var colors = [
                    "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(13,186,127,0.80)"
                ];
                var locationMaker = [];
                function initPage(DistrictExplorer) {
                //创建一个实例
                var districtExplorer = new DistrictExplorer({
                    map: map
                });
                /////////////////////////////////

                function listenMouseEvents() {

                    var isLocating = false;
                    map.on('mousemove', function(e) {

                        if (isLocating) {
                            return;
                        }

                        isLocating = true;
                        
                        // $('#locTip').html('定位中......');
    
                        districtExplorer.locatePosition(e.lnglat, function(err, features) {

                            isLocating = false;

                            if (err) {
                                console.error(err);
                                return;
                            }

                            renderFeatures(features);
                          
                            // 地理位置信息
                            // refreshLocTip(e.lnglat, features);
                            

                            // locMarker.setPosition(e.lnglat);
                            // locMarker.setMap(map);
                        }, {
                            levelLimit: 4
                        });

                    });
                    
                    var markers = []; //markers数组，用于接多个图标点
                            
                    var infoWindow = new AMap.InfoWindow({
                        isCustom: true,  //使用自定义窗体
                        content: component.$el,
                        offset: new AMap.Pixel(162, 284),
                        closeWhenClickMap:true, //点击地图关闭
                        autoMove: false // 自动适配地图
                    });

                    // 地图缩小到zoom<12 时 去掉所有图标点
                    map.on("zoomchange", function() {
                        if(map.getZoom() < 11) {
                            map.remove(markers);
                            infoWindow.close()
                        }
                    })
                     //创建地图图标方法
                    function funcreateMakers() {
                        //创建地图图标方法
                        // 添加makers
                        map.remove(markers);
                        infoWindow.close()
                        // map.clearMap();
                        var lnglats = [
                        //     {
                        //     id:0,
                        //     position:_this.toAmap(_this.toWgs([114.053067,22.520914])),
                        //     name: '新天世纪商务中心',
                        //     type: 0
                        // }, 
                        {
                            id: 1,
                            position:[114.053267,22.520914],
                            name: '新天世纪商务中心',
                            type: 1
                        }, {
                            id: 2,
                            position:[114.052867,22.520914],
                            name: '新天世纪商务中心',
                            type: 2
                        }, {
                            id: 2,
                            position:[114.053167,22.521084],
                            name: '新天世纪商务中心',
                            type: 3
                        }, {
                            id: 2,
                            position:[114.052967,22.521084],
                            name: '新天世纪商务中心',
                            type: 0
                        }, {
                            id: 2,
                            position:[114.053167,22.520744],
                            name: '新天世纪商务中心',
                            type: 3
                        }, {
                            id: 2,
                            position:[114.052967,22.520744],
                            name: '新天世纪商务中心',
                            type: 1
                        }]
                        for (var i = 0, marker; i < lnglats.length; i++) { // 故障检修
                            if(lnglats[i].type === 2){
                                marker = new AMap.Marker({
                                    map: map,
                                    position: lnglats[i].position,
                                //  position: new AMap.LngLat(116.38,39.92),
                                    // 将一张图片的地址设置为 icon
                                    // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                                    icon: require('../assets/images/hs/guzhang.png'),
                                    size: new AMap.Size(25, 34),
                                });
                                
                            } else if(lnglats[i].type === 3){ // 事故救援
                                marker = new AMap.Marker({
                                    map: map,
                                    position: lnglats[i].position,
                                //  position: new AMap.LngLat(116.38,39.92),
                                    // 将一张图片的地址设置为 icon
                                    // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                                    icon: require('../assets/images/hs/shigu.png'),
                                    size: new AMap.Size(25, 34),
                                });
                                
                            } else if(lnglats[i].type === 0){ // 正常运行
                                // marker = new AMap.CircleMarker({
                                //     center:lnglats[i].position,
                                //     radius:7,//3D视图下，CircleMarker半径不要超过64px
                                //     strokeColor:'#0DBA7F',
                                //     strokeWeight:3,
                                //     strokeOpacity:0.8,
                                //     fillColor:'#0BDD95',
                                //     fillOpacity:1,
                                //     zIndex:10,
                                //     // bubble:true,
                                //     cursor:'pointer',
                                //     clickable: true,
                                // })
                                 marker = new AMap.Marker({
                                    map: map,
                                    position: lnglats[i].position,
                                //  position: new AMap.LngLat(116.38,39.92),
                                    // 将一张图片的地址设置为 icon
                                    // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                                    icon: require('../assets/images/hs/greenDot.png'),
                                    size: new AMap.Size(25, 34),
                                });
                            } else if(lnglats[i].type === 1){ // 例行维保
                                // marker = new AMap.CircleMarker({
                                //     center:lnglats[i].position,
                                //     radius:7,//3D视图下，CircleMarker半径不要超过64px
                                //     strokeColor:'#6B50D0',
                                //     strokeWeight:3,
                                //     strokeOpacity:0.8,
                                //     fillColor:'#947AF6',
                                //     fillOpacity:1,
                                //     zIndex:10,
                                //     bubble:true,
                                //     cursor:'pointer',
                                //     clickable: true,
                                // })
                                 marker = new AMap.Marker({
                                    map: map,
                                    position: lnglats[i].position,
                                //  position: new AMap.LngLat(116.38,39.92),
                                    // 将一张图片的地址设置为 icon
                                    // icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png',
                                    icon: require('../assets/images/hs/purpleDot.png'),
                                    size: new AMap.Size(25, 34),
                                });
                            }
                            // 赋值，传值
                            marker.name = lnglats[i].name
                            marker.type = lnglats[i].type
                            console.log('JSON====' + JSON.stringify(lnglats[i]))
                            // marker.options = lnglats[i].eleOptions
                            // console.log(lnglats[i].eleOptions)
                            // infoWindow.setContent(this.createInfoWindow(title, content.join("<br/>")));
                            marker.on('click', markerClick);
                            marker.emit('click', {target: marker});
                            map.add(marker);
                            markers.push(marker);
                            
                        }
                        function markerClick(e) {
                            component.$data.type = e.target.type
                            component.$data.name = e.target.name
                            // component.$data.options = e.target.options
                            // component.$data.selectValue = e.target.options[0].label
                            if(e.target.getPosition){
                                infoWindow.open(map, e.target.getPosition());
                            } else {
                                console.log(e.target.getCenter())
                                infoWindow.open(map, e.target.getCenter());
                                
                            }
                        }
                    }
                    // 查看全市电梯分布按钮，显示全市分布点
                    var $node = $('#isAllMap');
                    $node.on('click', function(e) {
                        funcreateMakers()
                    })
                    map.on('click', function(e) {

                            districtExplorer.locatePosition(e.lnglat, function(err, features) {
                                var i, len = features.length
                                // 只处理深圳市的绘图等
                                if( features[len-2].properties.adcode === 440300){
                                        isLocating = false;

                                        if (err) {
                                            console.error(err);
                                            return;
                                        }
                                       
                                        // 当zoom小于11 点击地图放大 并添加图标点
                                        if(map.getZoom() < 11) {
                                             // 鼠标点击处为地图中心 放大
                                            map.setZoomAndCenter(14, e.lnglat);
                                            // 每个区域中心处为地图中心
                                            // map.setZoomAndCenter(14, features[len-1].properties.centroid);

                                            // 放大后添加图标点
                                            if ( map.getZoom() > 10 ) {
                                                _this.isEnlargeMap = true
                                                _this.region = features[features.length-1].properties.name
                                                funcreateMakers()
                                            }
                                            else {
                                                map.remove(markers);
                                                infoWindow.close()
                                            }
                                        }
                                        
                                        console.log('aaaaaaaa==' + JSON.stringify(features[features.length-1].properties))

                                        // locMarker.setPosition(e.lnglat);
                                        // locMarker.setMap(map);
                                }
                            }, {
                                levelLimit: 4
                            });
                    });
                    
                }

                listenMouseEvents();

                function renderFeatures(features) {

                    //清除已有的绘制内容
                    districtExplorer.clearFeaturePolygons();
                    map.remove(locationMaker)
                    if (!features.length) {
                        // renderCountry(false);
                        return;
                    }
                    var i, len = features.length
                    // 只在深圳市绘制图形
                    if( features[len-2].properties.adcode === 440300 && map.getZoom() < 11){
    
                        for (var i = 0, len; i < len; i++) {
                            // 添加南山区等各个区标识
                            var zoomStyleMapping1 = {
                                1:0,
                                2:0,
                                3:0,
                                4:0,
                                5:0,
                                6:0,
                                7:0,
                                8:0,
                                9:0,
                                10:0,
                                11:0,
                                12:0,
                                13:0,
                                14:0,
                                15:0,
                                16:0,
                                17:0,
                                18:0,
                                19:0,
                                20:0    
                            }
                            console.log(JSON.stringify(features[features.length-1].properties))
                            var regionName = features[features.length-1].properties.name
                            console.log('regionName==' + regionName)
                            var startMarker = new AMap.ElasticMarker({
                                position:features[features.length-1].properties.centroid,
                                // zooms:[8,12],// 在哪些层级中显示
                                offset:[-30,-120],
                                zoomStyleMapping:zoomStyleMapping1,
                                map: map,
                                styles:[{
                                    icon:{
                                        img:require('../assets/images/hs/locationTip.png'),
                                        size:[25,118],//可见区域的大小
                                        ancher:[0,100],//锚点
                                        fitZoom:11,//最合适的级别
                                        scaleFactor:2,//地图放大一级的缩放比例系数
                                        maxScale:1.4,//最大放大比例
                                        minScale:0.8,//最小放大比例
                                        // imageOffset:[0,-10],
                                    },
                                    label:{
                                        content:regionName,//文本内容
                                        position:'BM',//文本位置相对于图标的基准点，
                                        //BL、BM、BR、ML、MR、TL、TM、TR分别代表左下角、底部中央、右下角、
                                        //左侧中央、右侧中央、左上角、顶部中央、右上角。 
                                        //缺省时代表相对图标的锚点位置
                                        offset:[-30,-120],//相对position的偏移量
                                        minZoom:5//label的最小显示级别
                                    }
                                },{
                                    icon:{
                                        img:require('../assets/images/hs/locationTip.png'),
                                        size:[0,0],//可见区域的大小
                                        ancher:[8,16],//锚点
                                        fitZoom:14,//最合适的级别
                                        scaleFactor:2,//地图放大一级的缩放比例系数
                                        maxScale:1.4,//最大放大比例
                                        minScale:0.8,//最小放大比例
                                        imageOffset:[0,-10],
                                    },
                                    label:{
                                        content:'',//文本内容
                                        position:'BM',//文本位置相对于图标的基准点，
                                        //BL、BM、BR、ML、MR、TL、TM、TR分别代表左下角、底部中央、右下角、
                                        //左侧中央、右侧中央、左上角、顶部中央、右上角。 
                                        //缺省时代表相对图标的锚点位置
                                        offset:[-30,-120],//相对position的偏移量
                                        minZoom:5//label的最小显示级别
                                    }
                                }],
                            
                            })
                            

                            locationMaker.push(startMarker)
                            map.add(startMarker)
                            // 添加南山区等各个区标识 end--

                            var strokeColor = colors[i % colors.length];
                            var fillColor = colors[i % colors.length];

                            districtExplorer.renderFeature(features[i], {
                                cursor: 'default',
                                bubble: true,
                                strokeColor: strokeColor, //线颜色
                                strokeOpacity: 1, //线透明度
                                strokeWeight: 1, //线宽
                                fillColor: fillColor, //填充色
                                fillOpacity: 0.2, //填充透明度
                            });
                        }
                    }
                    
                }

                // //更新位置头部的提示内容
                function refreshLocTip(lngLat, features) {

                    var i, len = features.length,
                        $node = $('#locTip');

                    if (!len) {
                        $node.html(lngLat.toString() + '：未知区域');
                        return;
                    }

                    var routes = [];

                    for (i = 0; i < len; i++) {

                        routes.push('<span style="color:' + colors[i] + '">' + features[i].properties.name + '</span>');
                    }
                    // console.log('aaaaaaaa==' + JSON.stringify(features[len-1].properties))
                    $node.html(lngLat.toString() + '：' + routes.join(' &gt; '));
                }

                // function renderCountry(setBounds) {

                //     districtExplorer.loadCountryNode(function(err, countryNode) {

                //         if (setBounds) {
                //             map.setBounds(countryNode.getBounds());
                //         }

                //         districtExplorer.renderParentFeature(countryNode, {
                //             cursor: 'default',
                //             bubble: true,
                //             strokeColor: 'red', //线颜色
                //             strokeOpacity: 0, //线透明度
                //             strokeWeight: 2, //线宽
                //             fillColor: colors[0], //填充色
                //             fillOpacity: 0.2, //填充透明度
                //         });
                //     });
                // }

                // renderCountry(true);    

                //////////////////////////////////


                var countryCode = 100000, //全国
                    provCodes = [
                        //110000, //北京
                        //510000 //四川
                        // 440300
                    ],
                    cityCodes = [
                        // 320800,
                        440300 // 深圳
                    ];
                districtExplorer.loadMultiAreaNodes(
                    //只需加载全国和市，全国的节点包含省级
                    [countryCode].concat(cityCodes),
                    function(error, areaNodes) {
                        var countryNode = areaNodes[0],
                            cityNodes = areaNodes.slice(1);
                        var path = [];
                        //首先放置背景区域，这里是大陆的边界11111111
                        // path.push(getLongestRing(countryNode.getParentFeature()));
                        for (var i = 0, len = provCodes.length; i < len; i++) {
                            //逐个放置需要镂空的省级区域
                            path.push.apply(path, getAllRings(countryNode.getSubFeatureByAdcode(provCodes[i])));
                        }

                        for (var i = 0, len = cityNodes.length; i < len; i++) {
                            //逐个放置需要镂空的市级区域
                            path.push.apply(path, getAllRings(cityNodes[i].getParentFeature()));
                        }

                        //绘制带环多边形
                        //http://lbs.amap.com/api/javascript-api/reference/overlay#Polygon
                        var polygon = new AMap.Polygon({
                            bubble: true,
                            lineJoin: 'round',
                            strokeColor: '#66667F', //线颜色
                            strokeOpacity: 1, //线透明度
                            strokeWeight: 1, //线宽
                            fillColor: '#fff', //填充色
                            fillOpacity: 0.08, //填充透明度
                            map: map,
                            path: path
                        });
                    });
                }
                //**************控制地图行政区划显示结束***********************
            },
            drawLine(){
                // 画线
                var c = document.getElementById("myCanvas");//初始化
                var ctx = c.getContext("2d");
                //第一条线
                var y1 = this.ratio[0] / 2 * 3.97
                ctx.strokeStyle = '#5A39D5';
                ctx.beginPath();
                ctx.moveTo(0, y1);//起始位置
                ctx.lineTo(42, 18);//停止位置
                ctx.stroke();
                //第二条线
                var y2 = ( this.ratio[0] + this.ratio[1] / 2 ) * 3.97
                ctx.strokeStyle = '#8423E2';
                ctx.beginPath();
                ctx.moveTo(0, y2);//起始位置
                ctx.lineTo(42, 71);//停止位置
                ctx.stroke();
                //第三条线
                var y3 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] / 2 ) * 3.97
                ctx.strokeStyle = '#E22340';
                ctx.beginPath();
                ctx.moveTo(0, y3);//起始位置
                ctx.lineTo(42, 121);//停止位置
                ctx.stroke();
                //第四条线
                var y4 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] / 2 ) * 3.97
                ctx.strokeStyle = '#F56F6F';
                ctx.beginPath();
                ctx.moveTo(0, y4);//起始位置
                ctx.lineTo(42, 171);//停止位置
                ctx.stroke();
                //第五条线
                var y5 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] + this.ratio[4] / 2 ) * 3.97
                // ctx.strokeStyle = '#CB500F';
                ctx.strokeStyle = '#FEC101';
                ctx.beginPath();
                ctx.moveTo(0, y5);//起始位置
                ctx.lineTo(42, 221);//停止位置
                ctx.stroke();
                //第六条线
                var y6 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] + this.ratio[4] + this.ratio[5] / 2 ) * 3.97
                // ctx.strokeStyle = '#FB7027';
                ctx.strokeStyle = '#F9D562';
                ctx.beginPath();
                ctx.moveTo(0, y6);//起始位置
                ctx.lineTo(42, 273);//停止位置
                ctx.stroke();
                //第七条线
                var y7 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] + this.ratio[4] + this.ratio[5] + this.ratio[6] / 2 ) * 3.97
                // ctx.strokeStyle = '#FEC101';
                ctx.strokeStyle = '#CB500F';
                ctx.beginPath();
                ctx.moveTo(0, y7);//起始位置
                ctx.lineTo(42, 324);//停止位置
                ctx.stroke();
                //第八条线
                var y8 = ( this.ratio[0] + this.ratio[1] + this.ratio[2] + this.ratio[3] + this.ratio[4] + this.ratio[5] + this.ratio[6] + this.ratio[7] / 2 ) * 3.97
                // ctx.strokeStyle = '#F9D562';
                ctx.strokeStyle = '#FE7D01';
                ctx.beginPath();
                ctx.moveTo(0, y8);//起始位置
                ctx.lineTo(42, 374);//停止位置
                ctx.stroke();
            },
            getCurrentDate(format) {
                var now = new Date();
                var year = now.getFullYear(); //得到年份
                var month = now.getMonth();//得到月份
                var date = now.getDate();//得到日期
                var day = now.getDay();//得到周几
                var hour = now.getHours();//得到小时
                var minu = now.getMinutes();//得到分钟
                var sec = now.getSeconds();//得到秒
                month = month + 1;
                if (month < 10) month = "0" + month;
                if (date < 10) date = "0" + date;
                if (hour < 10) hour = "0" + hour;
                if (minu < 10) minu = "0" + minu;
                if (sec < 10) sec = "0" + sec;
                var time = "";
                //精确到天
                if(format==1){
                    time = year + "." + month + "." + date;
                }
                //精确到分
                else if(format==2){
                    time = year + "-" + month + "-" + date+ " " + hour + ":" + minu + ":" + sec;
                }
                return time;
            },
            // JS获取n至m随机整数
            selectfrom (lowValue,highValue){
                var choice=highValue-lowValue+1;
                return Math.floor(Math.random()*choice+lowValue);
                
            },
            getDaysBeforeAfterInStringFormat(nDays) {
                var dd = new Date();
                dd.setDate(dd.getDate()+nDays);//获取AddDayCount天后的日期
                var y = dd.getFullYear();
                var m = dd.getMonth()+1;//获取当前月份的日期
                var d = dd.getDate();

                var yy = y;
                var mm = m<10 ? ('0'+m) : (''+m);
                var dd = d<10 ? ('0'+d) : (''+d);

                return mm + "-" + dd;
            },
            // 柱状图1
            drawBarChart() {
                
                var option = {
                    // color: ['#59B785', '#F3C242', '#4cabce', '#e5323e'],
                    color: ['#DF4B4B', '#0DBA7F', '#4cabce', '#e5323e'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['直接访问','及时','超时','视频广告','搜索引擎','百度','谷歌','必应','其他'],
                        show: true,
                        itemGap: 90,
                        // x : '90',
                        bottom : '0',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '2%',
                        bottom: '11%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.day,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                } 
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'超时',
                            type:'bar',
                            stack: '广告',
                            data: this.Xdata,
                        },
                        {
                            name:'及时',
                            type:'bar',
                            stack: '广告',
                            data: this.Xdata,
                            barWidth:'45%'
                        },
                        
                    ]
                }
                var trendChart = echarts.init(document.getElementById('chartbar1'))
                
                trendChart.setOption(option)
            },
             // 柱状图2
            drawBarChart2() {
                var xData = function() {
                    var data = ['六月','七月','八月','九月','十月'];
                    // for (var i = 0; i < 5; i++) {
                    //     data.push(data[i]);
                    // }
                    // console.log('data:' + data)
                    return data;
                }();
                var data = [this.selectfrom(13, 30),this.selectfrom(13, 30), this.selectfrom(18, 40), this.selectfrom(30, 70), this.selectfrom(15, 40)]
                var option = {
                    color: ['#738BD6', '#6B50D0', '#0DBA7F','#e5323e'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['维保电梯数','维保企业数','维保人员数','视频广告','搜索引擎','百度','谷歌','必应','其他'],
                        show: true,
                        itemGap: 30,
                        // x : '90',
                        bottom : '0',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '5%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.day,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'维保人员数',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                            barWidth:'50%'
                        },
                        {
                            name:'维保企业数',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },
                        {
                            name:'维保电梯数',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },
                    ]
                }
                var trendChart = echarts.init(document.getElementById('chartbar2'))
                trendChart.setOption(option)
            },
             // 饼状图
            drawPieChart() {
                var data = [13.7, 13.4, 13.5, 36.1, 17.4]
                    var option = {
                    title : {
                        text: '',
                        subtext: '',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    grid: {
                        // top:'6%',
                        // left: '0%',
                        right: '0%',
                        // bottom: '11%',
                        // containLabel: true
                    },
                    legend: {
                        show: true,
                        x2 : '0',
                        y : 'center',
                        // right:'-50',
                        // top: '100',
                        orient: 'vertical',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            rich : {
                                white: {
                                    color: "#fff",
                                    fontSize: 12,
                                    align:'right'
                                },
                            },
                        },
                        // itemGap:'10%',
                        // height :'10',
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        formatter: function(name) {
                            var index = 0;
                            var clientlabels = ['30以上','25-30','20-25','15-20','15以下'];
                            var clientcounts = [40,21,17,13,9];
                            clientlabels.forEach(function(value,i){
                                if(value == name){
                                    index = i;
                                }
                            });
                            return name + "   " + "{white|" + clientcounts[index] + '%}';
                        }

                    },
                    
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'维保人员维保梯数',
                            type:'pie',
                            radius : [45, 65],
                            center : ['30%', '50%'],
                            // roseType : 'radius',
                            label: {
                                normal: {
                                    show: false,
                                    color:'red'
                                },
                                // emphasis: {
                                //     show: false,
                                //     formatter: '{a}{c}{b}: {d}',
                                //     position: 'inside', 
                                // }
                            },
                            lableLine: {
                                normal: {
                                    // show: false
                                },
                                // emphasis: {
                                //     show: true
                                // }
                            },
                            // itemStyle: {
                            //     normal: {
                            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{


                            //         // 0% 处的颜色   
                            //         offset: 0, color: 'green'  },
                            //     {
                                    
                            //         // 100% 处的颜色
                            //     offset: 1, color: 'yellow' 
                            //     }], false)
                            //     }
                            // },
                            // data:this.chartpie3Data,
                            data:[{
                                value:40,
                                name:'30以上',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [//{
                                        //     offset: 0, color: 'red' // 0% 处的颜色
                                        // }, 
                                        {
                                            offset: 0.2, color: '#0CB77D' // 0% 处的颜色
                                        }, 
                                        //  {offset: 0.5, color: 'green' // 0% 处的颜色
                                        //  }, 
                                        {
                                            offset: 1, color: '#1A5F4F' // 100% 处的颜色
                                        }],
                                        globalCoord: true // 缺省为 false
                                    }
                                },
                            }, {
                                value:21, 
                                name:'25-30',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: '#7188D2'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#3C4360' 
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:17, 
                                name:'20-25',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(109,81,212,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: 'rgba(109,81,212,1)' 
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:13, 
                                name:'15-20',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, 
                                        // color: 'rgba(254,168,56,0.3)'},
                                        color: 'rgba(254,125,1,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, 
                                        // color: '#FEC101',
                                        color: 'rgba(254,125,1,1)',
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:9, 
                                name:'15以下',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(254,56,143,0.4)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#F75F5F' 
                                        }], false)
                                    },

                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }],
                            // color: ['red','#24505D','#5FD1B7','#3787B7','#7b91bf','#b068b1','#6b68ad','#c02c3a']
                        },
                        
                    ]
                }

                var trendChart = echarts.init(document.getElementById('chartpie'))
                trendChart.setOption(option)
            },
             // 柱状图3
            drawBarChart3() {
              
                var data = [this.selectfrom(13, 30),this.selectfrom(13, 30), this.selectfrom(18, 40), this.selectfrom(30, 70), this.selectfrom(15, 40)]
                var option = {
                    color: ['#0DBA7F', '#F3C242', '#4cabce', '#e5323e'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['直接访问','及时','超时','视频广告','搜索引擎','百度','谷歌','必应','其他'],
                        show: true,
                        itemGap: 90,
                        // x : '90',
                        bottom : '0',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '5%',
                        bottom: '11%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.month,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'电梯运行里程',
                            type:'bar',
                            data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230],
                            barWidth:25.4
                        },
                        
                    ]
                }
                var trendChart = echarts.init(document.getElementById('chartbar3'))
                trendChart.setOption(option)
            },
             // 饼状图2
            drawPieChart2() {
                var option = {
                    title : {
                        text: '',
                        subtext: '',
                        x:'center'
                    },
                    // grid: {
                    //     left: '20%'
                    // },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        x2 : '0',
                        y : 'center',
                        // right:'-50',
                        // top: '100',
                        orient: 'vertical',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            rich : {
                                white: {
                                    color: "#fff",
                                    fontSize: 12,
                                   
                                },
                            },
                        },
                        // itemGap:'10%',
                        padding: [20, 0],
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        formatter: function(name) {
                            var index = 0;
                            var clientlabels = ['A类(75-100%)','B类（50%-75%）','C类（25%-50%）','D类（0-25%）'];
                            var clientcounts = [41,27,19,13];
                            clientlabels.forEach(function(value,i){
                                if(value == name){
                                    index = i;
                                }
                            });
                            return name + "  " + "{white|" + clientcounts[index] + '%}';
                        }

                    },
                    
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'电梯运行里程',
                            type:'pie',
                            // radius : [28, 75],
                            // radius : [40, 60],
                            // center : ['19%', '50%'],
                            radius : [45, 65],
                            center : ['27%', '50%'],
                            // roseType : 'radius',
                            label: {
                                normal: {
                                    show: false,
                                    color:'red'
                                },
                            },
                            data:[{
                                value:41,
                                name:'A类(75%以上)',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [//{
                                        //     offset: 0, color: 'red' // 0% 处的颜色
                                        // }, 
                                        {
                                            offset: 0.2, color: '#0DBA7F' // 0% 处的颜色
                                        }, 
                                        //  {offset: 0.5, color: 'green' // 0% 处的颜色
                                        //  }, 
                                        {
                                            offset: 1, color: 'rgba(13,186,127,0.4)' // 100% 处的颜色
                                        }],
                                        globalCoord: true // 缺省为 false
                                    }
                                },
                            }, {
                                value:27, 
                                name:'B类(50-75%)',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(2,126,115,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#027E73' 
                                        }], false)
                                    },
                                },
                            }, {
                                value:19, 
                                name:'C类(25-50%)',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(115,139,214,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#738BD6' 
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:13, 
                                name:'D类(0-25%)',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(109,81,212,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#6D51D4'
                                        }], false)
                                    },

                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }],
                            // color: ['red','#24505D','#5FD1B7','#3787B7','#7b91bf','#b068b1','#6b68ad','#c02c3a']
                        },
                        
                    ]
                }

                var trendChart = echarts.init(document.getElementById('chartpie2'))
                trendChart.setOption(option)
            },
             // 柱状图4
            drawBarChart4() {
                var xData = function() {
                    var data = ['六月','七月','八月','九月','十月'];
                    // for (var i = 0; i < 5; i++) {
                    //     data.push(data[i]);
                    // }
                    // console.log('data:' + data)
                    return data;
                }();
                var data = [this.selectfrom(13, 30),this.selectfrom(13, 30), this.selectfrom(18, 40), this.selectfrom(30, 70), this.selectfrom(15, 40)]
                var option = {
                    // color: ['#F56F6F', '#FEC101', '#6B50D0', '#0DBA7F','#e5323e'],
                    color: ['#BC3535', '#FE7D01', '#6B50D0', '#0DBA7F','#e5323e'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['40分钟以上','30-40分钟','20-30分钟','20分钟以下','搜索引擎','百度','谷歌','必应','其他'],
                        show: true,
                        // itemGap: 30,
                        // x : '90',
                        bottom : '0',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '5%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.day,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'20分钟以下',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },{
                            name:'20-30分钟',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        }, {
                            name:'30-40分钟',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },{
                            name:'40分钟以上',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                            barWidth:'50%'
                        },
                    ]
                }

 
                var trendChart = echarts.init(document.getElementById('chartbar4'))
                trendChart.setOption(option)
            },
             // 饼状图3
            drawPieChart3() {
                var data = [13.7, 13.4, 13.5, 36.1, 17.4]
                    var option = {
                    title : {
                        text: '',
                        subtext: '',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        x2 : '0',
                        y : 'center',
                        // right:'-50',
                        // top: '100',
                        orient: 'vertical',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            rich : {
                                white: {
                                    color: "#fff",
                                    fontSize: 12,
                                   
                                },
                            },
                        },
                        // itemGap:'10%',
                        padding: [20, 0],
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        formatter: function(name) {
                            var index = 0;
                            var clientlabels = ['40分钟以上','30-40分钟','20-30分钟','20分钟以下'];
                            var clientcounts = [41,27,13,19];
                            clientlabels.forEach(function(value,i){
                                if(value == name){
                                    index = i;
                                }
                            });
                            return name + "  " + "{white|" + clientcounts[index] + '%}';
                        }

                    },
                    
                    toolbox: {
                        show : false,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true,
                                type: ['pie', 'funnel']
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'维保人员维保梯数',
                            type:'pie',
                            // radius : [36, 85],
                            radius : [45, 65],
                            center : ['27%', '50%'],
                          
                            // roseType : 'radius',
                            label: {
                                normal: {
                                    show: false,
                                    color:'red'
                                },
                                // emphasis: {
                                //     show: false,
                                //     formatter: '{a}{c}{b}: {d}',
                                //     position: 'inside', 
                                // }
                            },
                            lableLine: {
                                normal: {
                                    // show: false
                                },
                                // emphasis: {
                                //     show: true
                                // }
                            },
                            // itemStyle: {
                            //     normal: {
                            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{


                            //         // 0% 处的颜色   
                            //         offset: 0, color: 'green'  },
                            //     {
                                    
                            //         // 100% 处的颜色
                            //     offset: 1, color: 'yellow' 
                            //     }], false)
                            //     }
                            // },
                            // data:this.chartpie3Data,
                            data:[{
                                value:41,
                                name:'40分钟以上',
                                itemStyle:{
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [//{
                                        //     offset: 0, color: 'red' // 0% 处的颜色
                                        // }, 
                                        {
                                            offset: 0.2, color: '#0CB77D' // 0% 处的颜色
                                        }, 
                                        //  {offset: 0.5, color: 'green' // 0% 处的颜色
                                        //  }, 
                                        {
                                            offset: 1, color: '#1A5F4F' // 100% 处的颜色
                                        }],
                                        globalCoord: true // 缺省为 false
                                    }
                                },
                            }, {
                                value:27, 
                                name:'30-40分钟',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(109,81,212,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: 'rgba(109,81,212,1)' 
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:13, 
                                name:'20-30分钟',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, 
                                        // color: 'rgba(254,168,56,0.3)'},
                                        color: 'rgba(254,125,1,0.3)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, 
                                        // color: '#FEC101',
                                        color: 'rgba(254,125,1,1)',
                                        }], false)
                                    },
                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }, {
                                value:19, 
                                name:'20分钟以下',
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            // 0% 处的颜色
                                        offset: 0, color: 'rgba(254,56,143,0.4)'},
                                        {
                                            // 100% 处的颜色
                                        offset: 1, color: '#F75F5F' 
                                        }], false)
                                    },

                                    // emphasis:{
                                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    //         // 0% 处的颜色
                                    //     offset: 0, color: '#000'},
                                    //     {
                                    //         // 100% 处的颜色
                                    //     offset: 1, color: 'yellow' 
                                    //     }], false)
                                    // }
                                },
                            }],
                            // color: ['red','#24505D','#5FD1B7','#3787B7','#7b91bf','#b068b1','#6b68ad','#c02c3a']
                        },
                        
                    ]
                }

                var trendChart = echarts.init(document.getElementById('chartpie3'))
                trendChart.setOption(option)
            },
            // 渐变折线图1
            drawLineChart(){
                var chart = document.getElementById("lineChart");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['A类','B类','C类','D类'],
                    itemGap: 20,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',

                    // backgroundColor:'red'
                },
                color:['#6B50D0','#738BD5','#027E73','#0DBA7F'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left:'3%',
                    // y: '30%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.month,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'D类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(107,80,208,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [200, 135, 22, 105, 120, 143,116, 20, 126, 108, 87, 108, 87, 105, 142],
                    },
                    {
                        name:'C类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(115,139,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [200, 126, 108, 87, 15, 22, 105,120, 116, 25, 143, 108, 87, 105, 202],
                    },
                    {
                        name:'B类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(2,126,115,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [12, 116, 200, 126, 108, 87, 25, 143, 108, 87, 15, 15, 22, 105,22],
                    },
                    {
                        name:'A类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(13,186,127,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [12, 116, 200, 87, 105, 202, 105,126, 108, 25, 143, 108, 87, 150, 22],
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图2
            drawLineChart2(){
                var chart = document.getElementById("lineChart2");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['A类','B类','C类','D类'],
                    itemGap: 20,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 20,
                    show:true,
                    icon:'circle',
                    itemWidth:8,
                    // backgroundColor:'red'
                },
                color:['#6B50D0','#738BD5','#027E73','#0DBA7F'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%',
                    // y: '30%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.month,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'D类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(107,80,208,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [200, 135, 22, 105, 120, 143,116, 20, 126, 108, 87, 108, 87, 105, 142],
                    },
                    {
                        name:'C类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(115,139,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [200, 126, 108, 87, 15, 22, 105,120, 116, 25, 143, 108, 87, 105, 202],
                    },
                    {
                        name:'B类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(2,126,115,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [12, 116, 200, 126, 108, 87, 25, 143, 108, 87, 15, 15, 22, 105,22],
                    },
                    {
                        name:'A类',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(13,186,127,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: [12, 116, 200, 87, 105, 202, 105,126, 108, 25, 143, 108, 87, 150, 22],
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 柱状图4
            drawBarChart5() {
                var xData = function() {
                    var data = ['六月','七月','八月','九月','十月'];
                    // for (var i = 0; i < 5; i++) {
                    //     data.push(data[i]);
                    // }
                    // console.log('data:' + data)
                    return data;
                }();
                var data = [this.selectfrom(13, 30),this.selectfrom(13, 30), this.selectfrom(18, 40), this.selectfrom(30, 70), this.selectfrom(15, 40)]
                var option = {
                    color: ['#F9D562','#FEC101','#FB7027','#CB500F','#F56F6F','#E22340','#8423E2','#5A39D5'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['机房环境','控制柜','曳引机','限速器','制动器','轿厢','安全回路','门锁回路'],
                        show: true,
                        itemGap: 10,
                        // x : '90',
                        bottom : '10',
                        // right:'-50',
                        // top: '100',
                        orient: 'horizontal',
                        // data:[{name:'鸡',icon:'circle'},{name:'猪',icon:'circle'},,{name:'牛',icon:'circle'}],
                        align: 'left',
                        textStyle: {
                            color: '#66667F',
                            fontSize: 12
                        },
                        icon: 'circle',
                        itemWidth:8,
                        // 使用回调函数
                        // formatter: function (value, key) {
                        //     return 'Legend ' + value + key;
                        // }
                        // data:['30以上','25-30','cc'],
                        // formatter: function(name) {
                        //     var index = 0;
                        //     var clientlabels = ['aa','bb','cc'];
                        //     var clientcounts = [9,1,10];
                        //     clientlabels.forEach(function(value,i){
                        //         if(value == name){
                        //             index = i;
                        //         }
                        //     });
                        //     return name + "  " + clientcounts[index];
                        // }
                    },
                    grid: {
                        top:'6%',
                        left: '0%',
                        right: '5%',
                        bottom: '15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.day,
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            // splitLine:{
                            //     show:true,
                            // },
                            //X轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize : 12,  
                                    // fontFamily : '微软雅黑',  
                                    color:'#66667F'
                                }
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            nameTextStyle: {  
                                color: ['red']  
                            },  
                            axisLine:{  
                                lineStyle:{  
                                    color:'#24242f',  
                                    width:1,//这里是为了突出显示加上的  
                                }  
                            },
                            //分割线
                            splitLine:{
                                show:true,
                                lineStyle: {
                                // 使用深浅的间隔色
                                    color: '#3F3F49',
                                    type:'dashed',
                                    // width:3,
                                }
                            },
                            //Y轴文字
                            axisLabel: {
                                show: true,
                                textStyle: {
                                fontSize : 12,  
                                // fontFamily : '微软雅黑',  
                                color:'#66667F'
                                }
                            },
                            splitNumber :7
                        }
                    ],
                    series : [
                        {
                            name:'门锁回路',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },{
                            name:'安全回路',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        }, {
                            name:'轿厢',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        }, {
                            name:'制动器',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                        }, {
                            name:'限速器',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                        }, {
                            name:'曳引机',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        }, {
                            name:'控制柜',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata
                        },{
                            name:'机房环境',
                            type:'bar',
                            stack: '广告',
                            data:this.Xdata,
                            barWidth:'50%'
                        },
                    ]
                }
                var trendChart = echarts.init(document.getElementById('chartbar5'))
                trendChart.setOption(option)
            },
             // 渐变折线图3
            drawLineChart3(){
                var chart = document.getElementById("lineChart3");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['异常入侵','风速','温湿度','门窗','排气扇','空调'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    show:true,
                    icon:'circle',
                    itemWidth:8,
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#FB7027','#CB500F',' #F56F6F','#E22340','#5A39D5'],
                color:['#FE7D01','#CB500F','#FEC101',' #F56F6F','#E22340','#5A39D5'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable: true,
                xAxis: [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine: {
                        lineStyle: {
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'异常入侵',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'风速',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(251,112,39,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'温湿度',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(203,80,15,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'门窗',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(245,111,111,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },{
                        name:'排气扇',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(226,35,64,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'空调',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图4
            drawLineChart4(){
                var chart = document.getElementById("lineChart4");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['双联维保开关','故障代码','接触器','平层状态'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    show:true,
                    icon:'circle',
                    itemWidth: 8,
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#FB7027','#E22340','#6B50D0'],
                color:['#FE7D01','#FEC101','#E22340','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'双联维保开关',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)' 
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'故障代码',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(251,112,39,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'接触器',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(226,35,64,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'平层状态',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图5
            drawLineChart5(){
                var chart = document.getElementById("lineChart5");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['电压/电流','外壳温度','轴承振动'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#E22340','#6B50D0'],
                color:['#FE7D01','#E22340','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'电压/电流',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)'    
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'外壳温度',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                             color:'rgba(226,35,64,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'轴承振动',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图6
            drawLineChart6(){
                var chart = document.getElementById("lineChart6");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['限速器'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#F9D562'],
                color:['#FE7D01'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'限速器',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)' 
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图7
            drawLineChart7(){
                var chart = document.getElementById("lineChart7");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['线圈温度','刹车片温度','电压/电流','制动力'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#FB7027','#E22340','#6B50D0'],
                color:['#FE7D01','#FEC101','#E22340','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'线圈温度',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)' 
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'刹车片温度',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(251,112,39,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'电压/电流',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(226,35,64,0.3)'

                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'制动力',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图8
            drawLineChart8(){
                var chart = document.getElementById("lineChart8");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['轿门','振动','位置','载荷'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#F9D562','#FB7027','#E22340','#6B50D0'],
                color:['#FE7D01','#FEC101','#E22340','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    bottom: '15%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'轿门',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)' 
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'振动',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(251,112,39,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'位置',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(226,35,64,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'载荷',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图9
            drawLineChart9(){
                var chart = document.getElementById("lineChart9");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['机房安全回路','轿顶安全回路','轿门安全回路','层门安全回路','底坑安全回路'],
                    itemGap: 10,
                    itemWidth:8,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#FEC101','#FB7027','#CB500F','#E22340','#6B50D0'],
                color:['#FE7D01','#CB500F','#FEC101','#E22340','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    // bottom: '15%',
                    bottom: '20%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'机房安全回路',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)' 
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'轿顶安全回路',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(251,112,39,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'轿门安全回路',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(245,111,111,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                    {
                        name:'层门安全回路',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(226,35,64,0.3)'

                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },{
                        name:'底坑安全回路',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
            // 渐变折线图10
            drawLineChart10(){
                var chart = document.getElementById("lineChart10");
                var echart = echarts.init(chart);
                var option = {
                tooltip : {
                    trigger: 'axis',
                },
                legend: {
                    data:['层门门锁回路','轿门门锁回路'],
                    itemGap: 10,
                    // orient: 'vertical',  //垂直显示
                    y: 'bottom',    //延Y轴居中
                    x: 'center', //居右显示
                    textStyle:{
                        fontSize : 12,  
                        fontFamily : 'Microsoft YaHei',  
                        color:'#66667F'  
                    },
                    itemWidth: 8,
                    show:true,
                    icon:'circle',
                    // backgroundColor:'red'
                },
                // color:['#FEC101','#6B50D0'],
                color:['#FE7D01','#6B50D0'],
                //工具栏
                toolbox: {
                    show : false ,
                    feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                    }
                },
                grid: {
                    right: '3%', //相当于距离左边效果:padding-left
                    left: '3%', //相当于距离上边效果:padding-top
                    // bottom: '15%',
                    bottom: '20%',
                    top: '10%',
                    containLabel: true
                },
                calculable : true,
                xAxis : [{
                    type : 'category',
                    boundaryGap : false,
                    data : this.day,
                    axisLine:{
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize : 12,  
                            // fontFamily : '微软雅黑',  
                            color:'#66667F'
                        }
                    }
                }],
                yAxis : [
                    {
                    type : 'value',
                    // min:0,
                    // max:150,
                    axisLine:{  
                        lineStyle:{  
                            color:'#24242f',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    //分割线
                    splitLine:{
                        show:true,
                        lineStyle: {
                        // 使用深浅的间隔色
                            color: '#3F3F49',
                            type:'dashed',
                            // width:3,
                        }
                    },
                    //Y轴文字
                    axisLabel: {
                        show: true,
                        textStyle: {
                        fontSize : 12,  
                        color:'#66667F'
                        }
                    },
                    }
                ],
                series : [
                    {
                        name:'层门门锁回路',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(249,213,98,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                   
                    {
                        name:'轿门门锁回路',
                        type:'line',
                        smooth:true,
                        areaStyle: {
                            color:'rgba(90,57,213,0.3)'
                        },
                        showSymbol: false,
                        stack: '总量5',
                        data: this.Xdata,
                    },
                ]
                };
                        
                echart.setOption(option);
            },
        }
    };
</script>

<style lang="stylus" scoped>
// 配置
@import '../assets/stylus/base'
@import '../assets/stylus/panel'

// 修改适配
// .main-wrap {
//     min-width 1830px
// }
// .right {
//     width 1260px
// }

// @media screen and (max-width: 1910px) {
//     #MapContainer{
//         width: 100%!important
//         position relative !important
//         top auto !important
//         left auto !important
//         bottom auto!important
//         box-sizing: border-box;
//         padding-top 0!important
//     }
//     #container{
//         height 500px!important
//     }
//     .right{
//         width: 100%!important
//         position relative !important
//         top auto !important
//         left auto !important
//         bottom auto!important
//     }
// }
.main-wrap
    #MapContainer {
        width: 642px;
        margin: 0px;
        absolute left 0 top 0 bottom 0
        padding-top 80px
        box-sizing: border-box;
        
        // background #1B1B26

        
        .MapTitle{
            size 100% 62px
            line-height 62px
            background: rgba(29,29,37,0.90);
            padding 0 22px
            box-sizing: border-box;
            position: absolute;
            z-index: 999;
            .MapTitle_title{
                font-size: 14px;
                color: #fff;
                letter-spacing: 0.03px;
                span {
                    color: #66667F;
                    margin-right: 5px;
                    cursor pointer
                }
            }
            .MapTitle_btn{
                // size 117px 24px
                line-height 24px
                display inline-block
                position absolute
                right 20px
                // top 20px
                margin-top 15px
                background: #0DBA7F;
                border-radius: 16.5px;
                padding 4px 10px 3px 10px
                font-size 12px
                cursor pointer
            }
        }
    }
    .right
        absolute left 643px top 80px bottom 0 right 0
        // background #1B1B23
        overflow: auto;
        padding 30px 10px 0 10px
        box-sizing: border-box;
        #chartbar1
            // size 100% 220px
            width 100%
            height 220px
        #chartbar2
            size 100% 235px
        #chartpie
            size: 100% 198px
        #chartbar3
            size 100% 230px
        #chartpie2
            size: 100% 235px
        #lineChart
            size: 100% 235px
        #lineChart2
            size: 100% 235px  
        #chartbar4
            size 100% 230px
        #chartpie3
            size: 100% 235px
        #chartbar5
            size 100% 246px
        #lineChart3,#lineChart4,#lineChart5,#lineChart6,#lineChart7,#lineChart8,#lineChart9,#lineChart10
            size: 100% 235px
    // 第一个summary1
    .summary1
        .summaryItem
            .aside-border-line {
                display: inline-block;
                width: 100%;
                height: 2px;
                border-bottom: 2px solid #18181E;
                float: left;
                margin: 12px 0
            }
    // 第二个summary
    .summary2{
        height 327px
        padding 0!important
        .rect{
            size 43px 162px
            float left
            display inline-block
            background: rgba(102,102,127,0.17);
            box-shadow: 0 21px 20px -14px rgba(10,23,63,0.15);
        }
        .summaryItem{
            float left
            margin 0
            padding: 30px 0 20px 49px
            width 160px
            box-sizing border-box
        }
        .border-line{
            display: inline-block;
            size : 65% 2px;
            border-bottom: 1px solid rgba(102,102,127,0.45);
            // float: left;
            margin: 10px 0
        }
        .iconImg{
            size 47px
            border-radius 50%
            display: inline-block;
            
        }
        .iconImg1{
            background: url('../assets/images/hs/1d.png')
            absolute top 56px left 21px
        }
        .iconImg2{
            background: url('../assets/images/hs/c70.png')
            absolute top 223px left 21px
        }
        .iconImg3{
            background: url('../assets/images/hs/b63.png')
            absolute top 60px left 21px
        }
        .iconImg4{
            background: url('../assets/images/hs/60e.png')
            absolute top 224px left 21px
        }
    }
    .summaryItemList
        .info-label
            margin-bottom 10px

    .spiltBar{
        height 12px;
        background: rgba(27,27,35,0.60);
        // display inline-block
    }
    .proportionBar
        size 16px 397px
        display inline-block
        background #5A39D5
        .proportionBar_item
            width 100%
            padding 0
            margin 0
        :nth-child(1)
            background: #5A39D5!important;
        :nth-child(2)
            background: #8423E2!important;
        :nth-child(3)
            background: #E22340;
        :nth-child(4)
            background: #F56F6F;
        :nth-child(5)
            // background: #CB500F;
            background: #FEC101;
        :nth-child(6)
            // background: #FB7027;
            background: #F9D562;
        :nth-child(7)
            // background: #FEC101;
            background: #CB500F;
        :nth-child(8)
            // background: #F9D562;
            background: #FE7D01;
    .proportionInfo
        size 78px 397px
        display inline-block
        absolute top 0 right -42px
        .proportionInfo_item
            position relative
            height 12.8%
            vertical-align middle
            line-height 20px
            .info-number
                line-height 20px!important
            .info-label
                font-size 12px
            .line
                size 28px 1px
                display inline-block
                background: #5A39D5;
                absolute top 18px left -46px
            .circle
                size 8px
                display inline-block
                background: #FEC101;
                border-radius 50%
                absolute top 15px left -25px
            .circle:nth-child(1)
                background: red;
    .infoWindows
        background: rgba(36,36,47,0.90);
        border: 1px solid #fff;
        padding 20px 17px 0 17px
        width 207px
        box-sizing border-box
        .topImg
            size 263px 45px
            display inline-block
            absolute top -35px left -36px
        .bottomImg
            size 263px 45px
            display inline-block
            absolute bottom -18px left -20px
        .infoWindows_title
            font-size: 18px;
            color: #FFFFFF;
            letter-spacing: 0.03px;
            margin-bottom 10px
            i 
                border: 1px solid #F56F6F;
                border-radius: 4px;
                font-size: 10px;
                color: #F56F6F;
                letter-spacing: 0.02px;
                margin-left 20px
                padding 3px 7px
        .infoWindows_info
            font-size: 10px;
            color: #66667F;
            letter-spacing: 0.02px;
        .infoWindows_data
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: 0.03px;
            margin-bottom 6px
            word-wrap : break-word 
        .infoWindows_details
            
            width 100%
            text-align right
            margin-top 13px
            padding: 8px 22px;
            box-sizing: border-box;
            border-top 1px solid #fff
            
            a
                position relative
                z-index 1111
                display inline-block
                color white
            a:hover
                text-decoration none
        .detailIcon
            background url("../assets/images/hs/detailsIcon.png") no-repeat
            size 20px
            display inline-block
            absolute bottom 7px right 12px
    .infoWindowsClass1
        border: 1px solid #0BDD95;
        .topImg
            background url("../assets/images/hs/greenTop.png") no-repeat
        .bottomImg
            background url("../assets/images/hs/greenBottom.png") no-repeat
        .infoWindows_title
            i 
                border: 1px solid #0BDD95;
                color: #0BDD95;
            
    .infoWindowsClass2
        border: 1px solid #6B50D0;
        .topImg
            background url("../assets/images/hs/purpleTop.png") no-repeat
        .bottomImg
            background url("../assets/images/hs/purpleBottom.png") no-repeat
        .infoWindows_title
            i 
                border: 1px solid #6B50D0;
                color: #6B50D0;
    .infoWindowsClass3
        border: 1px solid #EAB50F;
        .topImg
            background url("../assets/images/hs/yellowTop.png") no-repeat
        .bottomImg
            background url("../assets/images/hs/yellowBottom.png") no-repeat
        .infoWindows_title
            i 
                border: 1px solid #EAB50F;
                color: #EAB50F;
    .infoWindowsClass4
        border: 1px solid #F56F6F;
        .topImg
            background url("../assets/images/hs/redTop.png") no-repeat
        .bottomImg
            background url("../assets/images/hs/redBottom.png") no-repeat
        .infoWindows_title
            i 
                border: 1px solid #F56F6F;
                color: #F56F6F;
    .amap-marker-label {
        width: 60px;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        height: 18px;
        color: green;
        font-size: 14px;
        color: #0DBA7F;
        text-align: center;
        background: rgba(36,36,47,0.80);
        border: 1px solid #0DBA7F;
        border-radius: 4px;
    }
    .circleType
        .circle
            size 10px
            display inline-block
            border-radius 50%
            background: #0DBA7F 
            margin-right 5px
        span 
            margin-right 10px
</style>