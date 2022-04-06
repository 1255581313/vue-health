<template>
  <div class="page home-page-dist">
    <div class="group">
      <div class="primary-1" src="./images/img_4.png">
        <img class="picture" src="./images/img_5.png" />
      </div>
      <span class="title">梁国辉</span>
    </div>
    <div class="time-wrapper"><span class="time">6月17日 23:32</span></div>
    <div class="list">
      <div class="primary-2">
        <div class="block-1">
          <img class="action-bg" src="./images/img_6.png" />
          <div class="container-1">
            <div class="wrapper">
              <!-- <div class="group-1"> <span class="word-1">高压</span> <span class="num">96</span> </div> -->
              <!-- <div class="group-item-2">
                <span class="tag-3">高压</span>
                <div class="view"> <span class="num-3">32</span> <span class="mmhg">mmHg</span> </div>
              </div> -->
              <!-- <div class="group-item-0">
                <span class="tag-2">低压</span>
                <div class="view"> <span class="num-1">32</span> <span class="mmhg">mmHg</span> </div>
              </div> -->
              <div v-for="(item, index) in navData" :key="index" class="group-item-1">
                <span class="label-2">{{ item.label }}</span>
                <div class="view-1">
                  <span :class="item.color">{{ item.num }}</span> <span class="bmp">{{ item.unit }}</span>
                </div>
              </div>
            </div>
            <!-- <span class="mmhg-1">mmHg</span> -->
            <span class="info">{{ navDataInfo }}</span>
          </div>
        </div>
      </div>
      <!-- <span class="caption">血压</span>
      <span class="title-1">血糖</span>
      <span class="caption-1">尿酸</span>
      <span class="title-2">血脂</span>
      <span class="caption-2">血氧</span>
      <span class="title-3">心电</span> -->
    </div>
    <div v-if="1" class="tabs-wrap">
      <div class="tabs-nav">
        <div
          v-for="(item, index) in healthTabList"
          :key="index"
          class="tab"
          :class="active === index ? ' tab-active' : ''"
          @click="checkTab(index, item)"
        >
        <!-- {{ item.label }} -->
          <span class="tab-text">{{ item.label }}</span>
        </div>
      </div>
    </div>
    <div class="group-2">
      <div class="main"><span class="button">历史记录</span></div>
      <!-- <img class="banner" src="./images/img_8.png" /> -->
      <div class="chart-box banner">
        <div class="chart">
          <line-chart height="300px" :chart-data="lineChartData" />
        </div>
        <div class="btn-box">
          <div class="btn" @click="getList">全部数据{{ active }}<span></span></div>
        </div>
      </div>
    </div>
    <div class="cover-wrapper">
      <!-- <img class="cover" src="./images/img_9.png" /> -->
      <div class="device-box cover">
        <div class="ad">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in advertisingList" :key="index">
              <img v-lazy="image"/>
              <!--<van-image
                :src="image"
              />-->
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { newestBloodPressureByUserId, newestBloodSugarByUserId, newestBloodOxygenByUserId, newestUricAcidByUserId, newestCholesterolByUserId, newestGlycerinByUserId, newestBodyTemperatureByUserId, listBloodPressureByUserId, getAdvertisingList } from '@/api/health/api'
const lineChartData = {
  bloodPressure: {
    sbpData: [],
    dbpData: [],
    pulseData: [],
    xAxisData: []
  },
  bloodSugar: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  bloodOxygen: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  uricAcid: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  },
  cholesterol: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  },
  triglyceride: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  },
  temperature: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  },
  heartRate: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  },
  electrocardiogram: {
    // expectedData: [130, 140, 141, 142, 145, 150, 160],
    // actualData: [120, 82, 91, 154, 162, 140, 130]
  }

}
const navData = {
  bloodPressure: [
    {
      label: '高压',
      num: '0',
      unit: 'mmHg',
      color: 'num-3'
    },
    {
      label: '低压',
      num: '0',
      unit: 'mmHg',
      color: 'num-2'
    },
    {
      label: '心率',
      num: '0',
      unit: 'bmp',
      color: 'num-1'
    }
  ],
  bloodSugar: [
    {
      label: '血糖',
      num: '0',
      unit: 'mmol/L',
      color: 'num-1'
    }
  ],
  bloodOxygen: [
    {
      label: '血氧',
      num: '0',
      unit: 'mmol/L',
      color: 'num-1'
    }
  ],
  cholesterol: [
    {
      label: '胆固醇',
      num: '0',
      unit: 'mmol/L',

      color: 'num-1'
    }
  ],
  triglyceride: [
    {
      label: '甘油三酯',
      num: '0',
      unit: 'mmol/L',

      color: 'num-1'
    }
  ],
  uricAcid: [
    {
      label: '尿酸',
      num: '0',
      unit: 'mmol/L',

      color: 'num-1'
    }
  ],
  temperature: [
    {
      label: '体温',
      num: '0',
      unit: 'mmol/L',

      color: 'num-1'
    }
  ],
  heartRate: [
    {
      label: '心率',
      num: '0',
      unit: 'mmol/L',
      color: 'num-1'
    }
  ],
  electrocardiogram: [
    {
      label: '待开发',
      num: '',
      unit: '',
      color: ''
    }
  ]
}
const navDataInfo = {
  bloodPressure: '血压目标：高压 < 140，低压 > 90',
  bloodSugar: '血糖目标：空腹 ≤ 6.1 mmol/L，餐后 ≤ 10.1mmol/L',
  bloodOxygen: '血氧 ≥ 94SpO2',
  uricAcid: '尿酸目标：空腹（男）≤ 420mmol/L，女 ≤ 356mmol/L',
  cholesterol: '总胆固醇：5.17mmol/L',
  triglyceride: '甘油三酯：1.71mmol/L',
  temperature: '体温 36～37℃',
  heartRate: '60～100次/分',
  electrocardiogram: ''

}
import { Swipe, SwipeItem } from 'vant'
import LineChart from '../components/LineChart'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    LineChart
  },
  data() {
    return {
      active: 0,
      lineChartData: lineChartData.bloodPressure,
      navData: navData.bloodPressure,
      navDataInfo: navDataInfo.bloodPressure,
      constants: {},
      healthTabList: [
        { label: '血压', type: 'bloodPressure' },
        { label: '血糖', type: 'bloodSugar' },
        { label: '血氧', type: 'bloodOxygen' },
        { label: '尿酸', type: 'uricAcid' },
        { label: '总胆固醇', type: 'cholesterol' },
        { label: '甘油三酯', type: 'triglyceride' },
        { label: '体温', type: 'temperature' },
        { label: '心率', type: 'heartRate' },
        { label: '心电图', type: 'electrocardiogram' }
      ],
      advertisingList: []
      // , 'https://img01.yzcdn.cn/vant/apple-1.jpg', 'https://img01.yzcdn.cn/vant/apple-2.jpg'
    }
  },
  watch: {
    active(val) {
      switch (val) {
        case 0:
          this.getBloodPressure()
          break
        case 1:
          this.newestBloodSugarByUserId()
          break
        case 2:
          this.newestBloodOxygenByUserId()
          break
        case 3:
          this.newestUricAcidByUserId()
          break
        case 4:
          this.newestCholesterolByUserId()
          break
        case 5:
          this.newestGlycerinByUserId()
          break
        case 6:
          this.newestBodyTemperatureByUserId()
          break
        default:
          this.getBloodPressure()
          return
      }
    }
  },
  created() {
    this.getBloodPressure();
    this.getAdvertisingList();
  },
  methods: {
    checkTab(index, item) {
      this.active = index
      this.handleSetLineChartData(item.type)
      this.handleSetNavData(item.type)
      this.handleSetNavDataInfo(item.type)
    },
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    handleSetNavData(type) {
      this.navData = navData[type]
    },
    handleSetNavDataInfo(type) {
      this.navDataInfo = navDataInfo[type]
    },
    getList() {
      this.$router.push('/health/home/list')
    },
    getBloodPressure() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      newestBloodPressureByUserId(query).then(res => {
        this.navData[0].num = res.data.sbp
        this.navData[1].num = res.data.dbp
        this.navData[2].num = res.data.pulse
      }).catch(err => {
        console.log(err)
      })

      listBloodPressureByUserId(query).then(res => {
        let arraySbp = []
        let arrayDbp = []
        let arrayPulse = []
        let arrayMeasureTime = []
        if(res.data != null && res.data.length > 0){
          res.data.forEach(item => {
            arraySbp.push(item.sbp)
            arrayDbp.push(item.dbp)
            arrayPulse.push(item.pulse)
            arrayMeasureTime.push(item.measureTime)
          })
        }
        this.lineChartData.sbpData = arraySbp
        this.lineChartData.dbpData= arrayDbp
        this.lineChartData.pulseData = arrayPulse
        this.lineChartData.xAxisData = arrayMeasureTime
      }).catch(err => {
        console.log(err)
      })
    },
    //血糖
    newestBloodSugarByUserId() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      newestBloodSugarByUserId(query).then(res => {
        console.log(res.data.dataValue)
        this.navData[0].num = res.data.dataValue
      }).catch(err => {
        console.log(err)
      })
    },
    newestBloodOxygenByUserId() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      newestBloodOxygenByUserId(query).then(res => {
        console.log(res.data.dataValue)
        this.navData[0].num = res.data.dataValue
      }).catch(err => {
        console.log(err)
      })
    },
    newestUricAcidByUserId() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      newestUricAcidByUserId(query).then(res => {
        console.log(res.data.dataValue)
        this.navData[0].num = res.data.dataValue
      }).catch(err => {
        console.log(err)
      })
    },
    newestCholesterolByUserId() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      newestCholesterolByUserId(query).then(res => {
        console.log(res.data.dataValue)
        this.navData[0].num = res.data.dataValue
      }).catch(err => {
        console.log(err)
      })
    },
    newestGlycerinByUserId() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      newestGlycerinByUserId(query).then(res => {
        console.log(res.data.dataValue)
        this.navData[0].num = res.data.dataValue
      }).catch(err => {
        console.log(err)
      })
    },
    newestBodyTemperatureByUserId() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      newestBodyTemperatureByUserId(query).then(res => {
        console.log(res.data.dataValue)
        this.navData[0].num = res.data.dataValue
      }).catch(err => {
        console.log(err)
      })
    },
    getAdvertisingList() {
      getAdvertisingList().then(res => {
        if(res.data != null && res.data.length > 0){
          res.data.forEach(item => {
            this.advertisingList.push(item.content)
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import './App.scss';
.tabs-wrap {
  width: 6.76rem;
  height: 0.42rem;
  overflow: auto;
  .tabs-nav {
    font-size: 0.34rem;
    overflow: scroll;
    display: flex;
    white-space: nowrap;
    // .tab-active {
    //   color: #00938d;
    // }
    .tab {
      font-family: PingFangSC-Regular;
      color: #000;
      font-size: 0.34rem;
      line-height: 0.48rem;
      font-weight: 400;
       margin: 0 0.1rem;
      &-active,
      &:hover {
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: #00938d;
      }
      .tab-text {
        display: block;
        // width: 1.4rem;
      }
    }
  }
}

.chart-box {
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.3rem;
    .text {
      font-size: 0.18rem;
    }
    .num {
      font-size: 0.22rem;
      font-weight: 600;
      color: black;
    }
    .dtext {
      font-size: 0.12rem;
    }
    .btn {
      // border-radius:50%
    }
  }

  .chart {
    height: 3rem;
  }

  .btn-box {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .btn {
      width: 1.2rem;
      height: 0.34rem;
      border-radius: 0.12rem;
      font-size: 0.16rem;
      color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      box-sizing: border-box;
    }
  }
}

.device-box {
  .ad {
    height: 100%;
  }
  .device {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
  }

  .add-data {
    width: 100%;
    height: 0.88rem;
    background-color: #f8f8f8;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.24rem 0;
    border-radius: 0.12rem;

    .logo {
      padding: 0.3rem;
    }

    .text {
      font-size: 0.18rem;
      color: #333;
    }
  }

  .van-swipe-item {
    height: 2.86rem;
  }
}

  .van-swipe {
    border-radius: 12px;
  }

  .van-swipe-item {
    line-height: 150px;
    height: 150px;
  }

  .van-swipe-item img {
    height: 100%;
    width: 100%;
  }

</style>
