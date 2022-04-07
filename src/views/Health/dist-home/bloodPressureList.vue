<template>
  <div class="list-page">
    <div class="header" @click="onShow">
      <span>{{ startDate }}</span>
      <span>&nbsp;至&nbsp;</span>
      <span>{{ endDate }}</span>
      <span></span>
    </div>
    <van-calendar v-model="show" type="range" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
    <div class="panel">
      <div class="list">
        <div v-for="item in bloodPressureList" :key="index" class="item" @click="toAdd">
          <div class="time">{{item.measureTime}}</div>
          <div class="des">
            <div>高压 <span class="num">{{item.sbp}}</span> <span class="numpoint">{{item.dataUnit}} </span></div>
            <div class="status">
              <span>{{item.sbpStatus}}</span>
              <span></span>
            </div>
          </div>
          <div class="des">
            <div>低压 <span class="num">{{item.dbp}}</span> <span class="numpoint">{{item.dataUnit}} </span></div>
            <div class="status">
              <span>{{item.dbpStatus}}</span>
              <span></span>
            </div>
          </div>
          <div class="des">
            <div>心率 <span class="num">{{item.pulse}}</span> <span class="numpoint">{{item.pulseUnit}} </span></div>
            <div class="status">
              <span>{{item.pulseStatus}}</span>
              <span></span>
            </div>
          </div>
          <div class="remark">{{item.remark}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { listBloodPressureByUserId} from '@/api/health/api'
  import moment from "moment"
import { Calendar } from 'vant'

export default {
  name: 'HomeList',

  components: {
    [Calendar.name]: Calendar
  },

  data() {
    return {
      bloodPressureList:[],
      show: false,
      startDate: '',
      endDate: '',
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2099, 0, 31)
    }
  },
  created() {
    this.startDate = this.formatDate(new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 90))
    this.endDate = this.formatDate(new Date())
    this.getBloodPressureList();
  },

  methods: {
    getBloodPressureList() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b',
        startTime: this.startDate,
        endTime: this.endDate
      }
      listBloodPressureByUserId(query).then(res => {
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            item.measureTime = moment(item.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
          })
          this.bloodPressureList = res.data

        }
      }).catch(err => {
        console.log(err)
      })
    },
    onShow() {
      this.show = true
    },
    toAdd() {
      // this.$router.push('/health/home/add')
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
    onConfirm(date) {
      const [start, end] = date
      this.show = false
      this.startDate = `${this.formatDate(start)}`
      this.endDate = `${this.formatDate(end)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.list-page {
  height: 100%;
  padding: 16px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  min-height: 100vh;
  font-size: 16px;
  .panel {
    height: auto;
    width: auto;
    margin-top: 16px;
    padding: 20px 18px;
    overflow: hidden;
    border-radius: 8px;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list {
    .item {
      border-top: 1px solid #f8f8f8;
      position: relative;

      margin-top: 16px;

      .des {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        .num {
          font-size: 24px;
          font-weight: 600;
          color: #333;
        }
        .numpoint {
          color: #999;
        }

        .status {
          color: #37c2b0;
        }
      }

      .remark {
        padding: 16px;
        background-color: red;
        font-size: 14px;
        background-color: #f8f8f8;
      }
    }
  }
}
</style>
