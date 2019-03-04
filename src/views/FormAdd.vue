<template>
<div class="main-wrap" style="margin-top:100px">
  <div class="building">
    <div><p><i>建筑ID</i>(buildingId): </p><input type="text" name="buildingId" v-model="building.buildingId"/></div>
    <div><p><i>建筑名称</i>(buildingName): </p><input type="text" name="buildingName" v-model="building.buildingName"/></div>
    <div><p><i>建筑楼层</i>(buildingFloor): </p><input type="text" name="buildingFloor" v-model="building.buildingFloor"/></div>
    <div><p><i>国家</i>(country): </p><input type="text" name="country" v-model="building.country"/></div>
    <div><p><i>省市</i>(province): </p><input type="text" name="province" v-model="building.province"/></div>
    <div><p><i>城市</i>(city): </p><input type="text" name="city" v-model="building.city"/></div>
    <div><p><i>物业管理公司</i>(propertyManagementCorpId): </p><input type="text" name="propertyManagementCorpId" v-model="building.propertyManagementCorpId"/></div>
    <div><p><i>电梯总数</i>(totalNumberOfLift): </p><input type="text" name="totalNumberOfLift" v-model="building.totalNumberOfLift"/></div>
    <div><p><i>维度</i>(latitude): </p><input type="text" name="latitude" v-model="building.latitude"/></div>
    <div><p><i>经度</i>(longitude): </p><input type="text" name="longitude" v-model="building.longitude"/></div>
    <div><p><i>海拔高度</i>(altitude): </p><input type="text" name="altitude" v-model="building.altitude"/></div>
    <div><p><i>状态</i>(status): </p><input type="text" name="status" v-model="building.status"/></div>
    <button @click="addBuilding(building)">创建建筑</button>
  </div>
  
  <div class="corp">
    <div><p><i>公司id</i>(corpId): </p><input type="text" name="corpId" v-model="corp.corpId"/></div>
    <div><p><i>公司名称</i>(corpName): </p><input type="text" name="corpName" v-model="corp.corpName"/></div>
    <div><p><i>公司类型</i>(typeSelf): </p><input type="text" name="typeSelf" v-model="corp.typeSelf"/></div>
    <button @click="addCorp(corp)">创建物业维保公司</button>
  </div>
  <div class="lift">
    <div><p><i>电梯制造商ID</i>(manufacturerId): </p><input type="text" name="manufacturerId" v-model="lift.manufacturerId"/></div>
    <div><p><i>所属物业管理公司id</i>(propertyManagementCorpId): </p><input type="text" name="propertyManagementCorpId" v-model="lift.propertyManagementCorpId"/></div>
    <div><p><i>区域id</i>(areaId): </p><input type="text" name="areaId" v-model="lift.areaId"/></div>
    <div><p><i>安装对应的建筑</i>(buildingId): </p><input type="text" name="buildingId" v-model="lift.buildingId"/></div>
    <div><p><i>电梯编号id</i>(liftId): </p><input type="text" name="liftId" v-model="lift.liftId"/></div>
    <div><p><i>电梯类型</i>(typeOfLift): </p><input type="text" name="typeOfLift" v-model="lift.typeOfLift"/></div>
    <div><p><i>电梯井</i>(liftWell): </p><input type="text" name="liftWell" v-model="lift.liftWell"/></div>
    <div><p><i>经纬度</i>(buildingCoordinate): </p><input type="text" name="buildingCoordinate" v-model="lift.buildingCoordinate"/></div>
    <div><p><i>此电梯对应的楼层平均高度 单位：米</i>(floorHeightAvg): </p><input type="text" name="floorHeightAvg" v-model="lift.floorHeightAvg"/></div>
    <div><p><i>此电梯的高度 单位：米</i>(liftHeight): </p><input type="text" name="liftHeight" v-model="lift.liftHeight"/></div>
    <div><p><i>离地间隙，单位：米</i>(bottomMargin): </p><input type="text" name="bottomMargin" v-model="lift.bottomMargin"/></div>
    <div><p><i>楼顶间隙，单位：米</i>(topMargin): </p><input type="text" name="topMargin" v-model="lift.topMargin"/></div>
    <div><p><i>电梯井总高度：单位： 米</i>(totalWellHeight): </p><input type="text" name="totalWellHeight" v-model="lift.totalWellHeight"/></div>
    <div><p><i>最底层</i>(bottomFloor): </p><input type="text" name="bottomFloor" v-model="lift.bottomFloor"/></div>
    <div><p><i>最高层</i>(topFloor): </p><input type="text" name="topFloor" v-model="lift.topFloor"/></div>
    <div><p><i>状态</i>(status): </p><input type="text" name="status" v-model="lift.status"/></div>

    <button @click="addLift(lift)">创建电梯</button>
  </div>
  <div class="alarm">
    <div><p><i>报警编号id</i>(alarmId): </p><input type="text" name="alarmId" v-model="alarm.alarmId"/></div>
    <div><p><i>所关联设备编号id</i>(deviceId): </p><input type="text" name="deviceId" v-model="alarm.deviceId"/></div>
    <div><p><i>报警消息</i>(alarmMessage): </p><input type="text" name="alarmMessage" v-model="alarm.alarmMessage"/></div>
    <button @click="addAlarm(alarm)">创建报警</button>
  </div>
  <div class='tableRow'>
    <table class="table table-bordered table-stripe">
      <thead>
        <tr>
          <th>建筑ID</th>
          <th>建筑名称</th>
          <th>建筑楼层</th>
          <th>国家</th>
          <th>省市</th>
          <th>城市</th>
          <th>物业管理公司</th>
          <th>电梯总数</th>
          <th>维度</th>
          <th>经度</th>
          <th>海拔高度</th>
          <th>状态</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="(building,index) in getBuildings" :key="index">
          <td>{{ building.buildingId }}</td>
          <td>{{ building.buildingName }}</td>
          <td>{{ building.buildingFloor }}</td>
          <td>{{ building.country }}</td>
          <td>{{ building.province }}</td>
          <td>{{ building.city }}</td>
          <td>{{ building.propertyManagementCorpId }}</td>
          <td>{{ building.totalNumberOfLift }}</td>
          <td>{{ building.latitude }}</td>
          <td>{{ building.longitude }}</td>
          <td>{{ building.altitude }}</td>
          <td>{{ building.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class='tableRow'>
    <table class="table table-bordered table-stripe">
      <thead>
        <tr>
          <th>公司id</th>
          <th>公司名称</th>
          <th>公司类型</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="(Corp,index) in getCorps" :key="index">
          <td>{{ Corp.corpId }}</td>
          <td>{{ Corp.corpName }}</td>
          <td>{{ Corp.typeSelf }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class='tableRow'> 
    <table class="table table-bordered table-stripe">
      <thead>
        <tr>
          <th>报警编号id</th>
          <th>所关联设备编号id</th>
          <th>报警消息</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="(alarm,index) in getAlarms" :key="index">
          <td>{{ alarm.alarmId }}</td>
          <td>{{ alarm.deviceId }}</td>
          <td>{{ alarm.alarmMessage }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class='tableRow'>
    <table class="table table-bordered table-stripe">
      <thead>
        <tr>
          <th>电梯制造商ID</th>
          <th>所属物业管理公司id</th>
          <th>区域id</th>
          <th>安装对应的建筑</th>
          <th>电梯编号id</th>
          <th>电梯类型</th>
          <th>电梯井</th>
          <th>经纬度</th>
          <th>此电梯对应的楼层平均高度 </th>
          <th>此电梯的高度</th>
          <th>离地间隙</th>
          <th>楼顶间隙</th>
          <th>电梯井总高度 </th>
          <th>最底层</th>
          <th>最高层</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lift,index) in getLifts" :key="index">
          <td>{{ lift.manufacturerId }}</td>
          <td>{{ lift.propertyManagementCorpId }}</td>
          <td>{{ lift.areaId }}</td>
          <td>{{ lift.buildingId }}</td>
          <td>{{ lift.liftId }}</td>
          <td>{{ lift.typeOfLift }}</td>
          <td>{{ lift.liftWell }}</td>
          <td>{{ lift.buildingCoordinate }}</td>
          <td>{{ lift.floorHeightAvg }}</td>
          <td>{{ lift.liftHeight }}</td>
          <td>{{ lift.bottomMargin }}</td>
          <td>{{ lift.topMargin }}</td>
          <td>{{ lift.totalWellHeight }}</td>
          <td>{{ lift.bottomFloor }}</td>
          <td>{{ lift.topFloor }}</td>
          <td>{{ lift.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</template>
<script>
  import api from 'api'
  export default {
    name: 'LoginForm',

    data () {
      return {
        building: {
          buildingId : "",
          buildingName : "1324",
          buildingFloor : "123123",
          country : "中国",
          province : "广东",
          city : "深圳",
          propertyManagementCorpId : "12343",
          totalNumberOfLift : "1434",
          latitude : 0,
          longitude : 0,
          altitude : 0,
          status : "enable"
        },
        corp:{
          corpId : "1",
          corpName : "test",
          typeSelf : "test"
        },
        lift:{
          manufacturerId : "",
          propertyManagementCorpId : "",
          areaId : "",
          buildingId : "",
          liftId : "",
          typeOfLift : "",
          liftWell : "",
          buildingCoordinate : "",
          floorHeightAvg : 0,
          liftHeight : 0,
          bottomMargin : 0,
          topMargin : 0,
          totalWellHeight : 0,
          bottomFloor : 0,
          topFloor : 0,
          status : ""
        },
        alarm: {
          alarmId : "",
          deviceId : "",
          alarmMessage : ""
        },
        getBuildings:[],
        getCorps:[],
        getLifts:[],
        getAlarms:[],
      }
    },
    mounted() {
      api.corp.getBuildings(0,10).then(res => {
        this.getBuildings = res.data.data.content
        console.log('aaaa===' + JSON.stringify(this.getBuildings))
      })
      api.corp.getCorps(0,10).then(res => {
        this.getCorps = res.data.data.content
        console.log('aaaa===' + JSON.stringify(this.getCorps))
      })
      api.corp.getLifts(0,10).then(res => {
        this.getLifts = res.data.data.content
        console.log('aaaa===' + JSON.stringify(this.getLifts))
      })
      api.corp.getAlarms(0,10).then(res => {
        this.getAlarms = res.data.data.content
        console.log('报警列表===' + JSON.stringify(this.getAlarms))
      })
    },
    methods: {
      addBuilding(params){
        api.corp.createBuilding(params).then(res => {
          console.log(JSON.stringify(res))
          api.corp.getBuildings(0,10).then(res => {
            this.getBuildings = res.data.data.content
            console.log('aaaa===' + JSON.stringify(this.getBuildings))
          })
        })
        
      },
      addCorp(params){
        console.log(JSON.stringify(params))
        api.corp.createCorp(params).then(res => {
          console.log(JSON.stringify(res))
          api.corp.getCorps(0,10).then(res => {
            this.getCorps = res.data.data.content
            console.log('aaaa===' + JSON.stringify(this.getCorps))
          })
        })
      },
      addLift(params){
        console.log(JSON.stringify(params))
        api.corp.createLift(params).then(res => {
          console.log(JSON.stringify(res))
          api.corp.getLifts(0,10).then(res => {
            this.getLifts = res.data.data.content
            console.log('aaaa===' + JSON.stringify(this.getLifts))
          })
        })
      },
      addAlarm(params){
        console.log(JSON.stringify(params))
        api.corp.createAlarm(params).then(res => {
          console.log(JSON.stringify(res))
          api.corp.getAlarms(0,10).then(res => {
            this.getAlarms = res.data.data.content
            console.log('aaaa===' + JSON.stringify(this.getAlarms))
          })
        })
        
      },
      
    }
  }
</script>

<style lang="stylus" scoped>
  table{
    float:left;
    margin 30px
    th,td {
      padding 5px 
      border 1px solid #677092
    }
  }
  .building,.corp,.lift,.alarm{
    float:left;
    margin 30px
    border 1px dashed #677092
    div{
      margin 15px
    }
  }
  p{
    width:200px;
    display:inline-block;
    margin-bottom 10px
    color: #ccc;
  }
  input{
    height 28px
    font-size 14px
    color #8da1eb
    background: #2f353c;
    padding 0 5px
    vertical-align top
  }
  button{
    line-height: 21px;
    display: inline-block;
    margin: 18px 22px 0 0;
    background: #0dba7f;
    border-radius: 16.5px;
    padding: 4px 10px 3px 10px;
    font-size: 16px;
    cursor: pointer;
  }
  i{
    color #8da1eb 
    margin-right 10px
    white-space nowrap
    display block
  }
</style>

