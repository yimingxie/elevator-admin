<template>
  <div class="page-container">
    <div class="bg" v-if="layout === 'admin'">
      <div id="header">
        <i class="headPic"></i>
        <span class="left_header">
          <!-- <i></i> -->
          <!-- <span>酒店检修云平台</span> -->
        </span>
        <span class="title"></span>
        <span class="right_header">
          <i class="pic"></i>
          <span @click="quit()">退出</span>
          <span style="margin-left:100px">Whung</span>
          
          <!-- <Dropdown trigger="click" @on-click="changeMenu" style="margin-left:45px">
            <a href="javascript:void(0)">
              <span  v-text='menuText'>酒店经理</span>
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name='aaa'> 酒店经理</DropdownItem>
              <DropdownItem name='bbb'> 平台管理员</DropdownItem>
              <DropdownItem name='ccc'>工程部管理</DropdownItem>
            </DropdownMenu>
          </Dropdown> -->
          <el-dropdown @command="changeMenu" style="margin-left:45px">
              <span class="el-dropdown-link">
                <span v-text="menuText"></span><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">饲养管理员</el-dropdown-item>
                <!-- <el-dropdown-item command="b">平台管理员</el-dropdown-item>
                <el-dropdown-item command="c">工程部管理</el-dropdown-item> -->
              </el-dropdown-menu>
            </el-dropdown>
        </span>

      </div>
    </div>

    <!-- Start: 侧栏 -->
    <div class="nav_wrap" v-if="layout === 'admin'">
      <!-- <transition name="sidebar1" mode="out-in"> -->
        <section class="sidebar" >
          <!-- <a to="{ path: '/' }" class="logo"></a> -->
          <div class="nav-aside">
            <div class="nav-aside-wrap" id="nav-aside-wrap1" ref="demo">
              <ul>
                <li class="nav-aside-group">
                  <h3 @click="open1=!open1" :class="open1 === true? 'statis_icon_on' : 'statis_icon'">统计
                    <i v-if='open1' class="iconfont icon-fold"></i>
                    <i v-else class="iconfont icon-unfold"></i>
                  </h3>
                  <ul class="nav-aside-subtitle " v-show="open1">
                    <li class="nav-aside-item product-item" ><router-link to='/a'>{{ $t("nav_aside.statistic_users") }}</router-link></li>
                    <li class="nav-aside-item product-item" ><router-link to='/b'>{{ $t("nav_aside.statistic_products") }}</router-link></li>
                    <li class="nav-aside-item product-item" ><router-link to='/mapGI'>{{ $t("nav_aside.statistic_alerts") }}</router-link></li>
                  </ul>
                  <span class="aside-border-line"></span>
                </li>
                <li class="nav-aside-group" >
                  <h3 @click="open2=!open2" :class="open2 === true? 'manage_icon_on' : 'manage_icon'">管理
                    <i v-if='open2' class="iconfont icon-fold"></i>
                    <i v-else class="iconfont icon-unfold"></i>
                  </h3>
                  <ul class="nav-aside-subtitle" v-show="open2">
                    <li class="nav-aside-item product-item" ><router-link to='/management/users'>{{ $t("nav_aside.users") }}</router-link></li>
                    <li class="nav-aside-item product-item" ><router-link to='/management/apps'>{{ $t("nav_aside.apps") }}</router-link></li>
                  </ul>
                  <span class="aside-border-line"></span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      <!-- </transition> -->
    </div>
    <!-- End: 侧栏 -->
    <router-view></router-view>
    <div class="footer" v-if="layout === 'admin'"></div>
  </div>
</template>

<script>
  import api from './api'
  import './assets/fonts/iconfont.css'
  // import Select1 from './components/Select1'
  
  export default {
    name: 'App',
    // components: {
    //   'v-select': Select1
    // },
    data () {
      return {
        layout:'login',
        menuText:'饲养管理员',
        queryTypeOptions: [
          { label: '酒店经理', value: 'mac' },
          { label: '平台管理员', value: 'id' },
          { label: '工程部管理', value: 'aa' }
        ],
        queryType: {
          label: '酒店经理',
          value: 'mac'
        },
        menuText: '饲养管理员',
        open1: true,
        open2: true,
        open3: true,
      }
    },
    watch: {
      $route(to, from) {
        console.log(this.$route.path);
        if(this.$route.path === '/' ){
          this.layout = 'login'
        } else {
          this.layout = 'admin'
        }
        console.log(this.layout);
      }
      
    },
    
    mounted () {
      console.log('qqqqqqq---' + this.$route.path);
      if(this.$route.path === '/' ){
        this.layout = 'login'
      } else {
        this.layout = 'admin'
      }
    },

    methods: {
      quit(){
        this.$router.push('/')
      },
      changeMenu(name) {
        // alert(name)
        if (name == 'a') {
        this.menuText = '饲养管理员'
        this.$router.push('/')
        } else if (name == 'b') {
          this.menuText = '平台管理员'
          this.$router.push('/login1')
        } else {
          this.menuText = '工程部管理'
          this.$router.push('/login2')
        }
      },

    }
  }
</script>


<style lang="stylus">
// 配置
@import 'assets/stylus/base'
@import 'assets/stylus/panel'
@font-face{
  font-family: myFirstFont;
  src: url('./assets/fonts/FX-LED002.ttf');
      // url('aa.eot'); /* IE9+,可以是具体的实际链接 */
}
// ul
//   reset-list()
.page-container
  // size 100%
div.bg
  /*方法一*/
  // width: 100%;
  // height:100vh
  background:url("./assets/images/bgTop.png") no-repeat
  // background-size:100% 100%; /*随着原始比例缩放*/
#header
  height 30px
  position relative
  margin: 0 7px
  padding 69px 0 0 32px
  overflow visibility 
  .left_header
    absolute top 20px left 32px
    font-size 18px
    display inline-block
    size 1316px 50px
    line-height 50px
    padding-left 20px
    background:url("./assets/images/left_header.svg") no-repeat
    
    span 
      margin-left 140px
  .title
    absolute top 6px left 718px
    display inline-block
    size 650px 50px
    background:url("./assets/images/title.png") no-repeat 0
  .right_header
    absolute top 20px right -32px
    display inline-block
    size 688px 52px
    line-height 52px
    background:url("./assets/images/right_header.svg") no-repeat
    i.pic
      display inline-block
      size 180px 50px
      background:url("./assets/images/right_header_icon.png") no-repeat  150px center
      vertical-align: middle;
    span 
      display inline-block
      // margin-left 140px
  i.headPic
    z-index 999
    display inline-block
    size 60px
    background:url("./assets/images/headPic.png") no-repeat 0 0 
    position absolute
    top: 9px;
    right: 300px;

.main-wrap
  // width 100%
  absolute top 82px right bottom 29px left 263px
  overflow-y auto
  overflow-x hidden
  // min-width 1017px
  // background -webkit-linear-gradient(top, transparent 59px, #183330 60px), -webkit-linear-gradient(left, transparent 59px, #1C2E46 60px)
  // // background -moz-linear-gradient(top, transparent 59px, #1C2E46 60px), -moz-linear-gradient(left, transparent 59px, #1C2E46 60px)
  // // background -o-linear-gradient(top, transparent 59px, #1C2E46 60px), -o-linear-gradient(left, transparent 59px, #1C2E46 60px)
  // // background -ms-linear-gradient(top, transparent 59px, #1C2E46 60px), -ms-linear-gradient(left, transparent 59px, #1C2E46 60px)
  // // // background linear-gradient(top, transparent 59px, #1C2E46 60px),linear-gradient(left, transparent 59px, #1C2E46 60px)
  // -webkit-background-size: 60px 60px;
  // -moz-background-size: 60px 60px;
  // background-size: 60px 60px;

  .main
    // padding 0 46px 30px
    // min-width 1920px
.footer
  background:url("./assets/images/背景框（下）.png") no-repeat 0 0
  absolute bottom 0 left -0
  size 100% 68px

.nav_wrap
  // height: 100%;
  width: 256px;
  overflow: hidden;
  absolute left 0
  // 侧栏
  .sidebar
    size 263px 100%
    min-width 230px
    background #3D5EBD
    box-sizing: border-box
    padding-bottom: 107px
    opacity 1

  // 侧栏导航
  .nav-aside
    height 100%
    box-sizing border-box

  .nav-aside-wrap
    height 100%
    overflow-y auto

  .nav-aside-item
    a
      display block
      color #DDDDDD
      height 45px
      line-height 45px
      padding-right 14px
      padding-left 20px
      // background #E0E0E0
      transition height .3s ease-in-out, line-height .3s ease-in-out, background .3s ease-in-out
      overflow hidden
      white-space nowrap
      text-overflow "…"
      .fa
        font-size 16px
        width 20px
        margin-right 12px

      &:hover
        color white!important
        background #536EDE
        text-decoration none

    .router-link-active
      background blue
      padding-right 0
      // border-right 4px solid red
      color #fff
      height 67px
      line-height 67px
      

      &:hover
        color #fff

  .product-item
    a
      padding-left 74px

  .nav-aside-group
    margin-top 25px
    .aside-border-line
      display inline-block
      width 185px
      height 1px
      margin-left 28px
      border-bottom 1px solid blue
      float: left
      // box-shadow: 0 1px 0 default-border-color inset,0 -1px 0 default-border-color inset; 
      margin-top 12px
    h3
      margin 0
      padding-left 37px
      font-size 14px
      line-height 67px
      color #fff
      margin-left: 37px
      i 
        margin-left 90px

  .nav-aside-actions
    margin 5px 20px 45px

    a
      display block
      height 34px
      line-height 34px
      border 1px dashed #525252
      border-radius 2px
      text-align center
      color #525252

      .fa
        margin-right 10px

      &:hover
        color red
        border-color red
        text-decoration none
</style>

