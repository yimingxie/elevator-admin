<template>
  <div data-toggle="buttons" class="btn-group">
    <slot name="label"></slot>
    <label v-for="item in items" :class="{'active': item.value === value}" class="btn btn-default">
      <input type="radio" autocomplete="off" @click="onSelect(item.value)"/>{{ item.label }}
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        twoWay: true
      },
      items: {
        type: Array,
        default: []
      }
    },

    methods: {
      onSelect (value) {
        this.value = value
        this.$emit('update:value', value)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/stylus/base'
  .btn-group
    .btn
      position relative
      height 24px
      line-height 22px
      text-align: center;
      cursor pointer
      width 60px
      display: inline-block;
      transition: background .3s;
      font-size: 16px;
      color: #535960;
      letter-spacing: 0.02px;
      white-space: nowrap;
      // border: 1px solid #527186;
      border-radius: 10px;
      margin 35px 17px 0 0
      &.active
        background: #6AE7C7;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
        border-radius: 20px;
      input[type="radio"]
        absolute left top
        appearance none
        opacity 0
    .label
      display inline-block
      margin-right 5px
</style>
