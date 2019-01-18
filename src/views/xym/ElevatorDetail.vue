<template>
  <div id="elevator-detail">
    <h1 style="color: white">电梯详情 -- 电梯id:{{id}}</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  mounted() {
    this.id = this.$route.query.id
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
#elevator-detail{

}

</style>
