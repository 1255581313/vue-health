
<template>
  <div>
    <div class="info">
      <div class="name">{{user.realName}}</div>
      <div class="sex" v-if="user.sex == 1">男</div>
      <div class="sex" v-else-if="user.sex == 2">女</div>
      <div class="sex" v-else>未知</div>
    </div>
    <van-cell-group inset>
      <van-cell title="手机号" value="" label="16599938668" />
      <van-cell title="姓名/性别/出生日期" value="" label="" is-link to="/dist-user/healthRecords/base" />
      <van-cell title="居住地址" value="" label="" is-link to="/dist-user/healthRecords/address"/>
      <van-cell title="身体指标" value="" label="" is-link to="/dist-user/healthRecords/size"/>
      <van-cell title="糖尿病类型" value="" label="" is-link to="/dist-user/healthRecords/type"/>
      <van-cell title="血糖管理情况" value="" label="" is-link to="/dist-user/healthRecords/manage"/>
    </van-cell-group>

  </div>
</template>

<script>
import { CellGroup, Cell } from 'vant'
import { userInFo} from '@/api/health/user'

export default {
  name: 'HealthRecords',

  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },
  data() {
    return {
      user: {
        id: '73cdcf1c485c4416ab7741f3a23caf5b',
        userImage: '',
        nickName: '',
        realName: ''
      }
    }
  },
  created() {
    if(process.env.NODE_ENV != 'development'){
      this.getCode()
    }
    this.loadUser()
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
    loadUser() {
      const query = {
        id: this.user.id
      }
      userInFo(query).then(res => {
        if(res.data != null && res.data.length > 0){
          this.user.nickName = res.data.nickName
          this.user.realName = res.data.realName
          this.user.mobile = res.data.mobile
        }
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.info{
  padding: 0.8rem 0.37rem;
  .name{
    font-size: 18px;

  }
  .sex{
    font-size: 12px;
    margin-top: 0.4rem;
  }

}
</style>
