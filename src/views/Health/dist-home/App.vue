<template>
  <div class="page home-page-dist">
    <div class="group">
      <div class="primary-1" src="./images/img_4.png">
        <img class="picture" :src="user.userImage" />
      </div>
      <span class="title">{{user.nickName}}</span>
    </div>
    <div class="time-wrapper"><span class="time">{{measureTime}}</span><span class="time" style="color: #00b9b3;font-weight: bold;" v-if="measureAllCount != null">（第{{measureAllCount}}次)</span></div>
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
                  <span :class="item.color">{{ item.num }}</span>
                  <span class="bmp">{{ item.unit }}</span>
                <!-- <div class="view-1">
                </div> -->
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
          <line-chart height="150px" :chart-data="lineChartData"/>
        </div>
        <div class="btn-box">
          <div class="btn" @click="getList">全部数据<span></span></div>
        </div>
      </div>
    </div>
    <div class="cover-wrapper">
      <!-- <img class="cover" src="./images/img_9.png" /> -->
      <div class="device-box cover">
        <div class="ad">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
            <van-swipe-item v-for="(item, index) in advertisingList" :key="index" @click="goodsDetail(item.jumpLink)">
              <img v-lazy="item.content"/>
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
import {wxLogin, newestBloodPressureByUserId, newestBloodSugarByUserId, newestBloodOxygenByUserId, newestUricAcidByUserId, newestCholesterolByUserId, newestGlycerinByUserId,
  newestBodyTemperatureByUserId, listBloodPressureByUserId, listBloodSugarByUserId, getAdvertisingList, listBloodOxygenByUserId, listUricAcidByUserId, listCholesterolByUserId,
  listGlycerinByUserId, listBodyTemperatureByUserId, getAllBloodPressureCountByUserId, getAllBloodSugarCountByUserId, getAllBloodOxygenCountByUserId, getAllUricAcidCountByUserId,
  getAllCholesterolCountByUserId, getAllGlycerinCountByUserId, getAllBodyTemperatureCountByUserId} from '@/api/health/api'
const lineChartData = {
  bloodPressure: {
    data1: [],
    data2: [],
    data3: [],
    xAxisData: [],
    dataName1:'高压',
    dataName2:'低压'
  },
  bloodSugar: {
    data1: [],
    data2: [],
    data3: [],
    xAxisData: [],
    dataName1:'血糖值'
  },
  bloodOxygen: {
    data1: [],
    data2: [],
    data3: [],
    xAxisData: [],
    dataName1:'血氧值',
    dataName2:'心率'
  },
  uricAcid: {
    data1: [],
    data2: [],
    data3: [],
    xAxisData: [],
    dataName1:'尿酸值'
  },
  cholesterol: {
    data1: [],
    data2: [],
    data3: [],
    xAxisData: [],
    dataName1:'总胆固醇值'
  },
  triglyceride: {
    data1: [],
    data2: [],
    data3: [],
    xAxisData: [],
    dataName1:'甘油三酯值'
  },
  temperature: {
    data1: [],
    data2: [],
    data3: [],
    xAxisData: [],
    dataName1:'体温值'
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
      unit: '次/分钟',
      color: 'num-1'
    },
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
      unit: '%Sp02',
      color: 'num-1'
    },
    {
      label: '心率',
      num: '0',
      unit: '次/分钟',
      color: 'num-1'
    }
  ],
  cholesterol: [
    {
      label: '总胆固醇',
      num: '0',
      unit: 'umol/L',
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
  electrocardiogram: [
    {
      label: '心电图',
      num: '开发中',
      unit: '',
      color: 'num-1'
    }
  ]
}
const navDataInfo = {
  bloodPressure: '血压目标：高压 < 140，低压 > 90， 心率 60～100次/分',
  bloodSugar: '血糖目标：空腹 ≤ 6.1 mmol/L，餐后 ≤ 10.1mmol/L',
  bloodOxygen: '血氧 ≥ 94SpO2， 心率 60～100次/分',
  uricAcid: '尿酸目标：空腹（男）≤ 420umol/L，女 ≤ 356umol/L',
  cholesterol: '总胆固醇：5.17mmol/L',
  triglyceride: '甘油三酯：1.71mmol/L',
  temperature: '体温 36～37℃',
  electrocardiogram: ''

}
import { Swipe, SwipeItem } from 'vant'
import LineChart from '../components/LineChart/'
import moment from "moment"
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    LineChart
  },
  data() {
    return {
      user: {
        id: '',
        userImage: '',
        nickName: '',
        realName: ''
      },
      startDate: '',
      endDate: '',
      measureAllCount: null,
      measureTime: null,
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
          this.getBloodSugar()
          break
        case 2:
          this.getBloodOxygen()
          break
        case 3:
          this.getUricAcid()
          break
        case 4:
          this.getCholesterol()
          break
        case 5:
          this.getGlycerin()
          break
        case 6:
          this.getBodyTemperature()
          break
        case 7:
          this.getElectrocardiogram()
          break
        default:
          this.getBloodPressure()
          return
      }
    }
  },
  created() {
    if(process.env.NODE_ENV != 'development'){
      this.getCode()
    }
    this.startDate = this.formatDate(new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 90))
    this.endDate = this.formatDate(new Date())
    this.getBloodPressure()
    this.getAdvertisingList()
  },
  methods: {
    getCode () { // 非静默授权，第一次有弹框
      if(localStorage.getItem("user") != null && localStorage.getItem("user") != undefined){
        let json = JSON.parse(localStorage.getItem("user"))
        this.user.id = json.id;
        this.user.userImage = json.userImage;
        this.user.nickName = json.nickName;
        this.user.realName = json.realName;
      }else{
        this.code = ''
        var local = window.location.href // 获取页面url
        var appid = 'wx21bf873790f060a8'
        this.code = this.getUrlCode().code // 截取code
        if (this.code == null || this.code === '') { // 如果没有code，则去请求
          window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
        } else {
          // 你自己的业务逻辑
          const query = {
            code: this.code
          }
          wxLogin(query).then(res => {
            if(res.status == 200){
              this.user.id = res.data.id
              this.user.userImage = res.data.userImage
              this.user.nickName = res.data.nickName
              this.user.realName = res.data.realName
              localStorage.setItem("user", JSON.stringify(this.user));
            }
          }).catch(err => {
            console.log(err)
          })
        }
      }
    },
    getUrlCode() { // 截取url中的code方法
      var url = location.search
      this.winUrl = url
      var theRequest = new Object()
      if (url.indexOf("?") != -1) {
        var str = url.substr(1)
        var strs = str.split("&")
        for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1])
        }
      }
      return theRequest
    },
    formatDate(date) {
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      if (m < 10) {
        m = '0' + m
      }
      let d = date.getDate()
      if (d < 10) {
        d = '0' + d
      }
      return `${y}-${m}-${d}`
    },
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
      if (this.active == 0) {
        this.$router.push('/dist-home-blood-pressure-list')
      } else if(this.active == 2){
        this.$router.push('/dist-home-blood-oxygen-list')
      } else {
        this.$router.push({ path: '/dist-home-other-list' , query: {active : this.active } })
      }

    },
    getBloodPressure() {
      const query = {
        userId: this.user.id
      }
      this.measureTime = null
      this.measureAllCount = null
      newestBloodPressureByUserId(query).then(res => {
        this.measureTime = moment(res.data.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
        this.navData[0].num = res.data.sbp
        this.navData[0].unit = res.data.dataUnit
        this.navData[1].num = res.data.dbp
        this.navData[1].unit = res.data.dataUnit
        this.navData[2].num = res.data.pulse
        this.navData[2].unit = res.data.pulseUnit
      }).catch(err => {
        console.log(err)
      })
      const queryObject = {
        userId: this.user.id,
        startTime: this.startDate,
        endTime: this.endDate
      }
      listBloodPressureByUserId(queryObject).then(res => {
        const arraySbp = []
        const arrayDbp = []
        const arrayPulse = []
        const arrayMeasureTime = []
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            arraySbp.push(item.sbp)
            arrayDbp.push(item.dbp)
            arrayPulse.push(item.pulse)
            arrayMeasureTime.push(moment(item.measureTime).format("MM/DD"))
          })
        }
        this.lineChartData.data1 = arraySbp
        this.lineChartData.data2 = arrayDbp
        this.lineChartData.data3 = arrayPulse
        this.lineChartData.xAxisData = arrayMeasureTime
      }).catch(err => {
        console.log(err)
      })

      getAllBloodPressureCountByUserId(query).then(res => {
        if (res.data != null && res.data > 0) {
          this.measureAllCount = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 血糖
    getBloodSugar() {
      const query = {
        userId: this.user.id
      }
      this.measureTime = null
      this.measureAllCount = null
      newestBloodSugarByUserId(query).then(res => {
        this.measureTime = moment(res.data.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
        this.navData[0].num = res.data.dataValue
        this.navData[0].unit = res.data.dataUnit
      }).catch(err => {
        console.log(err)
      })
      const queryObject = {
        userId: this.user.id,
        startTime: this.startDate,
        endTime: this.endDate
      }
      listBloodSugarByUserId(queryObject).then(res => {
        const arrayDataValue = []
        const arrayMeasureTime = []
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            arrayDataValue.push(item.dataValue)
            arrayMeasureTime.push(moment(item.measureTime).format("MM/DD"))
          })
        }
        this.lineChartData.data1 = arrayDataValue
        this.lineChartData.xAxisData = arrayMeasureTime
      }).catch(err => {
        console.log(err)
      })

      getAllBloodSugarCountByUserId(query).then(res => {
        if (res.data != null && res.data > 0) {
          this.measureAllCount = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    //血氧
    getBloodOxygen() {
      const query = {
        userId: this.user.id
      }
      this.measureTime = null
      this.measureAllCount = null
      newestBloodOxygenByUserId(query).then(res => {
        this.measureTime = moment(res.data.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
        this.navData[0].num = res.data.dataValue
        this.navData[0].unit = res.data.dataUnit
        this.navData[1].num = res.data.heartRate
        this.navData[1].unit = res.data.heartRateUnit
      }).catch(err => {
        console.log(err)
      })
      const queryObject = {
        userId: this.user.id,
        startTime: this.startDate,
        endTime: this.endDate
      }
      listBloodOxygenByUserId(queryObject).then(res => {
        const arrayDataValue = []
        const arrayHeartRate = []
        const arrayMeasureTime = []
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            arrayDataValue.push(item.dataValue)
            arrayHeartRate.push(item.heartRate)
            arrayMeasureTime.push(moment(item.measureTime).format("MM/DD"))
          })
        }
        this.lineChartData.data1 = arrayDataValue
        this.lineChartData.data2 = arrayHeartRate
        this.lineChartData.xAxisData = arrayMeasureTime
      }).catch(err => {
        console.log(err)
      })

      getAllBloodOxygenCountByUserId(query).then(res => {
        if (res.data != null && res.data > 0) {
          this.measureAllCount = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    //尿酸
    getUricAcid() {
      const query = {
        userId: this.user.id
      }
      this.measureTime = null
      this.measureAllCount = null
      newestUricAcidByUserId(query).then(res => {
        this.measureTime = moment(res.data.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
        this.navData[0].num = res.data.dataValue
        this.navData[0].unit = res.data.dataUnit
      }).catch(err => {
        console.log(err)
      })
      const queryObject = {
        userId: this.user.id,
        startTime: this.startDate,
        endTime: this.endDate
      }
      listUricAcidByUserId(queryObject).then(res => {
        const arrayDataValue = []
        const arrayMeasureTime = []
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            arrayDataValue.push(item.dataValue)
            arrayMeasureTime.push(moment(item.measureTime).format("MM/DD"))
          })
        }
        this.lineChartData.data1 = arrayDataValue
        this.lineChartData.xAxisData = arrayMeasureTime
      }).catch(err => {
        console.log(err)
      })

      getAllUricAcidCountByUserId(query).then(res => {
        if (res.data != null && res.data > 0) {
          this.measureAllCount = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    //总胆固醇
    getCholesterol() {
      const query = {
        userId: this.user.id
      }
      this.measureTime = null
      this.measureAllCount = null
      newestCholesterolByUserId(query).then(res => {
        this.measureTime = moment(res.data.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
        this.navData[0].num = res.data.dataValue
        this.navData[0].unit = res.data.dataUnit
      }).catch(err => {
        console.log(err)
      })
      const queryObject = {
        userId: this.user.id,
        startTime: this.startDate,
        endTime: this.endDate
      }
      listCholesterolByUserId(queryObject).then(res => {
        const arrayDataValue = []
        const arrayMeasureTime = []
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            arrayDataValue.push(item.dataValue)
            arrayMeasureTime.push(moment(item.measureTime).format("MM/DD"))
          })
        }
        this.lineChartData.data1 = arrayDataValue
        this.lineChartData.xAxisData = arrayMeasureTime
      }).catch(err => {
        console.log(err)
      })

      getAllCholesterolCountByUserId(query).then(res => {
        if (res.data != null && res.data > 0) {
          this.measureAllCount = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    //甘油三酯
    getGlycerin() {
      const query = {
        userId: this.user.id
      }
      this.measureTime = null
      this.measureAllCount = null
      newestGlycerinByUserId(query).then(res => {
        this.measureTime = moment(res.data.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
        this.navData[0].num = res.data.dataValue
        this.navData[0].unit = res.data.dataUnit
      }).catch(err => {
        console.log(err)
      })
      const queryObject = {
        userId: this.user.id,
        startTime: this.startDate,
        endTime: this.endDate
      }
      listGlycerinByUserId(queryObject).then(res => {
        const arrayDataValue = []
        const arrayMeasureTime = []
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            arrayDataValue.push(item.dataValue)
            arrayMeasureTime.push(moment(item.measureTime).format("MM/DD"))
          })
        }
        this.lineChartData.data1 = arrayDataValue
        this.lineChartData.xAxisData = arrayMeasureTime
      }).catch(err => {
        console.log(err)
      })

      getAllGlycerinCountByUserId(query).then(res => {
        if (res.data != null && res.data > 0) {
          this.measureAllCount = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    //体温
    getBodyTemperature() {
      const query = {
        userId: this.user.id
      }
      this.measureTime = null
      this.measureAllCount = null
      newestBodyTemperatureByUserId(query).then(res => {
        this.measureTime = moment(res.data.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
        this.navData[0].num = res.data.dataValue
        this.navData[0].unit = res.data.dataUnit
      }).catch(err => {
        console.log(err)
      })
      const queryObject = {
        userId: this.user.id,
        startTime: this.startDate,
        endTime: this.endDate
      }
      listBodyTemperatureByUserId(queryObject).then(res => {
        const arrayDataValue = []
        const arrayMeasureTime = []
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            arrayDataValue.push(item.dataValue)
            arrayMeasureTime.push(moment(item.measureTime).format("MM/DD"))
          })
        }
        this.lineChartData.data1 = arrayDataValue
        this.lineChartData.xAxisData = arrayMeasureTime
      }).catch(err => {
        console.log(err)
      })

      getAllBodyTemperatureCountByUserId(query).then(res => {
        if (res.data != null && res.data > 0) {
          this.measureAllCount = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getElectrocardiogram() {
      this.measureTime = null
      this.measureAllCount = null
    },
    // 广告图
    getAdvertisingList() {
      getAdvertisingList().then(res => {
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            this.advertisingList.push(item)
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    goodsDetail(jumpLink) {
      this.$router.push(jumpLink)
    }

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
