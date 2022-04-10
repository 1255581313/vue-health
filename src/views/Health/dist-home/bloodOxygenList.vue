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
        <div v-for="item in bloodOxygenList" :key="index" class="item" @click="toAdd">
          <div class="time">{{item.measureTime}}</div>
          <div class="des">
            <div>血氧 <span class="num">{{item.dataValue}}</span> <span class="numpoint">{{item.dataUnit}} </span></div>
            <div class="status">
              <span>{{item.dataStatus}}</span>
              <span></span>
            </div>
          </div>
          <div class="des">
            <div>心率 <span class="num">{{item.heartRate}}</span> <span class="numpoint">{{item.heartRateUnit}} </span></div>
            <div class="status">
              <span>{{item.heartRateStatus}}</span>
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
  import { listBloodOxygenByUserId, wxLogin} from '@/api/health/api'
  import moment from "moment"
import { Calendar } from 'vant'

export default {
  name: 'HomeList',

  components: {
    [Calendar.name]: Calendar
  },

  data() {
    return {
      user: {
        id: '',
        userImage: '',
        nickName: '',
        realName: ''
      },
      bloodOxygenList:[],
      show: false,
      startDate: '',
      endDate: '',
      minDate: new Date(2010, 0, 1),
      maxDate: new Date(2099, 0, 31)
    }
  },
  created() {
    if(process.env.NODE_ENV != 'development'){
      this.getCode()
    }
    this.startDate = this.formatDate(new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 90))
    this.endDate = this.formatDate(new Date())
    this.getBloodOxygenList();
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
    getBloodOxygenList() {
      const query = {
        userId: this.user.id,
        startTime: this.startDate,
        endTime: this.endDate
      }
      listBloodOxygenByUserId(query).then(res => {
        if (res.data != null && res.data.length > 0) {
          res.data.forEach(item => {
            item.measureTime = moment(item.measureTime).format("yyyy年MM月DD日 HH:mm:ss")
          })
          this.bloodOxygenList = res.data

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
