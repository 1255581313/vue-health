<template>
  <div class="home-page">
    <div class="name">田国辉</div>
    <div class="logo">logo</div>
    <div class="time">2022年03月 12:00</div>
    <div class="num">
      <div class="type">血压</div>
      <div class="value">高压120mmHg</div>
      <div class="value">低压900mmHg</div>
      <div class="value">心率90bpm</div>
    </div>
    <div>
      <span>血压指标:</span>
      <span>高压 小于等于 140</span>
      <span>高压 小于等于 90</span>
    </div>

    <div class="tabs-wrap">
      <div  class="tabs-nav">
        <div
          v-for="(item, index) in healthTabList"
          :key="index"
          :title="item.title"
          role="tab"
          aria-selected="true"
          class="tab"
          :class="active === index ? ' tab-active' : ''"
          @click="checkTab(index,item)"
        >
          <span class="tab-text">{{ item.title }}</span>
        </div>
        <div class="tabs-line" style="transform: translateX(38px) translateX(-50%)"></div>
      </div>
    </div>

    <div class="panel panel-list">
      <div class="chart-box">
        <div class="chart">
         <line-chart  :chart-data="lineChartData" />
        </div>
        <div class="btn-box">
          <div class="btn" @click="getList">全部数据{{active}}<span></span></div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="device-box">
        <div class="ad">
          <van-swipe class="my-swipe" :autoplay="3000" :height="286"  indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index" :height="286">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem, Grid, GridItem } from 'vant'
import LineChart from './components/LineChart'
const lineChartData = {
  bloodSugar: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  bloodPressure: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  bloodOxygen: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  cholesterol: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
export default {
  name: 'GoodList',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    LineChart
  },
  data() {
    return {
      lineChartData: lineChartData.bloodSugar,

      active: 0,
      healthTabList: [
        { title: '血糖', type: 'bloodSugar' },
        { title: '血压', type: 'bloodPressure' },
        { title: '血氧', type: 'bloodOxygen' },
        { title: '胆固醇', type: 'cholesterol' },
        { title: '甘油三酯', type: 'triglyceride' },
        { title: '尿酸', type: 'uricAcid' },
        { title: '体温', type: 'bloodSugar' },
        { title: '心率', type: 'bloodSugar' }
      ],
      images: ['https://img01.yzcdn.cn/vant/apple-1.jpg', 'https://img01.yzcdn.cn/vant/apple-2.jpg']
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    checkTab(index, item) {
      this.active = index
      this.handleSetLineChartData(item.type)
    },
    getList() {
      this.$router.push('/health/home/list')
    },
    addDevice() {
      this.$router.push('/health/home/addDevice')
    },
    add(type) {
      this.$router.push({
        path: '/health/home/add',
        query: { type: type }
      })
    },
    heathrRecord() {
      this.$router.push('/health/home/heathrRecord')
    },
    contrlTarget() {
      this.$router.push('/health/home/contrlTarget')
    },
    test() {
      this.$toast({
        message: '开发中',
        duration: 1500
      })
    },
    device() {
      this.$router.push('/health/home/device')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
