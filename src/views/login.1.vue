<template>
  <div class="main-wrap">
    <form @submit.prevent="onSubmit" hook="loginFormHook" class="form-cont" autocomplete="off">
        <div class="form-body">
          <div class="form-row row">
            <div class="welcome">Welcome</div>
            <div style="padding-left:7px"><span class="rec"></span></div>
            <div class="loginInfo" style="padding-left:7px">GI Domino 物联云平台</div>
          </div>
          <div style="padding-left:7px">
            <div class="form-row row">
              <div class="inputLabel">User name</div>
              <div class="input-text-wrap login_input">
                <input autocomplete="off" type="text" v-model="model.account" name="account" class="input-text" />
                <!-- <div v-if="showWrong1" class="form-tips form-tips-error login-form-tips-error">
                  <span >
                    <i class="iconfont icon-prompt" aria-hidden="true"></i>{{ $t('validation.required', {field: $t('auth.fields.account')}) }}
                  </span>
                </div> -->
              </div>
              
            </div>
            <div class="form-row row">
              <div class="inputLabel">Password</div>
              <div class="input-text-wrap login_input">
                <input autocomplete="off" type="password" v-model="model.password" name="password" class="input-text focus-input" />
                <!-- <div v-if="showWrong2" class="form-tips form-tips-error login-form-tips-error">
                  <span>
                    <i class="iconfont icon-prompt" aria-hidden="true"></i>{{ $t('validation.required', {field: $t('auth.fields.password')}) }}
                  </span>
                </div> -->
              </div>
              
            </div>
            <div class="operations">
            <!-- <a v-link="{ path: '/fetch-password-bymail' }" class="fetch-password">{{ $t("auth.forget") }}</a> -->
              <label class="remember-password">
                <!-- <radio-moni-radio class="radio_input"> -->
                  <input type="checkbox" v-model="rememberPwd" slot='radio_original'/>
                <!-- </radio-moni-radio> -->
                <span>{{ $t("auth.remember") }}</span>
              </label>
              <!-- 用户名或密码错误 -->
              <!-- <span class="form-tips form-tips-error" v-show="showWrong"><i class="iconfont icon-prompt" aria-hidden="true"></i>{{ $t('validation.wrong') }}</span> -->
            </div>
          </div>
          
          <div class="form-actions">
            <button @keyup.enter="onSubmit" :disabled="logining" :class="{'disabled':logining}" v-text="logining ? $t('auth.login_submiting') : $t('auth.login_submit')" class="btn btn-primary btn-block focus-input">{{ $t("auth.login_submit") }}</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',

    // layout: 'auth',

    // mixins: [globalMixins],

    // store,

    // vuex: {
    //   getters: {
    //     logining: ({ system }) => system.loading
    //   },
    //   actions: {
    //     setLoadingStatus,
    //     showError
    //   }
    // },
    components: {
      // 'radio-moni-radio': RadioMoniRadio
    },
    computed: {
      // ...mapState({
      //   logining: state => state.system.loading
      // })
    },
    data () {
      return {
        logining:false,
        // screenHeight: document.getElementById('app').scrollHeight,
        validation: {},
        model: {
          account: '',
          password: ''
        },
        isLoginSuccess: false,
        rememberPwd: Boolean(this.getCookie('rememberPwd')) || false,
      }
    },
    watch: {
     
    },
    mounted () {
      
    },
    created () {
      
    },
    methods: {
      onSubmit () {
        this.$router.push('/mapGI')
      },
      // 设置 Cookies
      setCookie (name, value) {
        var Days = 30
        var exp = new Date()
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
      },

      // 读取 Cookies
      getCookie (name) {
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        var arr = document.cookie.match(reg) || {}
        if (arr.length) {
          return unescape(arr[2])
        } else {
          return null
        }
      },

      // 删除 Cookies
      delCookie (name) {
        console.log('name===' + name)
        var exp = new Date()
        exp.setTime(exp.getTime() - 1)
        var cval = this.getCookie(name)
        if (cval != null) {
          document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
        }
      },
    }
  }
</script>

<style lang="stylus">
  @import '../assets/stylus/base'

  // @import '../assets/stylus/common'

  .form-login
    .operations
      clearfix()
      margin 3% 0
      position relative

      .form-tips
        top 0

      .fetch-password
        float right
        color red

      .remember-password
        position relative
        input
          margin-right 12px
          // 模拟radio样式
        .radio_inner
          size 19px
          top -1px
        input:checked+i:after
          size: 9px;
          top: 5px;
          left: 5px;


  .loading-resource
    .form-auth
      .form-actions
        .btn
          cursor wait
  .welcome
    color #536EDE
    font-size 64px
    font-weight: 600;
  .rec
    height 10px
    width 82px
    display inline-block
    background #536EDE
    border-radius 10px
    margin: 1% 0 3%
  .loginInfo
    color gray-dark
    font-size 24px
    hide-text()
    clearfix()
    // margin: 20px 0 10px
    font-weight: 600;
  .inputLabel
    color #536EDE 
    font-size 18px
    margin 5% 0 1%
  .logo_login
    border none
    top: auto;
    bottom 0
    background-size 100%
    float left
    position: static!important;
    background-position: left;
    height 32px
  .fa-exclamation-circle
    color #EE775F 
  .login-form-tips-error
    top 0!important
  .versionNumber
    float left
    // bottom: 39px
    // left: 318px
    color: #fff
    // padding-top 10px
    height: 32px;
    line-height 42px
    background-color: blue;
    box-sizing: border-box;
    margin-left 4px
  @media screen and (max-width: 1600px)
    .form-auth .form-cont
      padding: 13% 152px 0
  @media screen and (max-width: 1366px)
    .form-auth .form-cont
      padding: 10.5% 16% 0
    .form-auth .form-actions .btn
      width: 130px;
      height: 50px;
      line-height: 44px;
  @media screen and (max-width: 1359px)
    .form-auth .form-cont
      padding: 8% 16% 0
    .form .form-row
      margin-bottom: 9px;
</style>

