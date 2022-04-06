<template>
  <div class="list-page">
    <div class="header" @click="onShow">
      <span>2022-02-12</span>
      <span>至</span>
      <span>2022-03-13</span>
      <span>图标</span>
    </div>
    <van-calendar v-model="show" type="range" @confirm="onConfirm" />

    <div class="panel">
      <div class="time">2022年03月11日</div>
      <div class="list">
        <div v-for="index in 2" :key="index" class="item" @click="toAdd">
          <div class="des">
              <div><span class="num">180</span> <span class="numpoint">umol/L </span></div>
              <div class="status">
                <span>正常</span>
                <span>标签</span>
              </div>
          </div>
          <div class="remark">11111</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar } from 'vant'

export default {
  name: 'HomeList',

  components: {
    [Calendar.name]: Calendar
  },

  data() {
    return {
      show: false
    }
  },

  methods: {
    onShow() {
      this.show = true
    },
    toAdd() {
      this.$router.push('/health/home/add')
    },
    onConfirm() {

    }
  }

}
</script>

<style lang="scss" scoped>
</style>
