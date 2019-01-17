<template>
  <div id="page-container">
    <div id="header">
      电梯行业监管战情室 
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        
      }
    },
    
    mounted () {
    },

    methods: {
      quit(){
        this.$router.push('/')
      },

    }
  }
</script>

<style lang="stylus">
// 配置
@import 'assets/stylus/base'
#page-container{

  #header{
    height 80px
    line-height 80px
    background: #24242F;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.21);
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0.04px;
    text-align: center;
  }
}
</style>

