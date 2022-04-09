<template>
  <div>
    <van-address-list v-model="chosenAddressId" :list="addressList" default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="onSelect"/>

  </div>
</template>

<script>
import { addressList, wxLogin } from '@/api/health/api'
import { AddressList, NavBar } from 'vant'
import { setLocalStorage } from '@/utils/local-storage'

export default {

  components: {
    [NavBar.name]: NavBar,
    [AddressList.name]: AddressList
  },
  data() {
    return {
      user: {
        id: '',
        userImage: '',
        nickName: '',
        realName: ''
      },
      chosenAddressId: '',
      addressList: []
    }
  },

  created() {
    this.getCode()
    this.loadAddress()
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
    onAdd() {
      this.$router.push({ name: 'address-edit', query: { addressId: -1 }})
    },
    onEdit(item, index) {
      this.$router.push({ name: 'address-edit', query: { addressId: item.id }})
    },
    onSelect(item, index) {
      setLocalStorage({ AddressId: item.id })
    },
    goback() {
      this.$router.go(-1)
    },
    loadAddress() {
      const query = {
        userId: this.user.id
      }
      addressList(query).then(res => {
        var list = res.data
        for (var i = 0; i < list.length; i++) {
          var item = list[i]
          if(item.defaultAddress == 1){
            this.addressList.push({
              id: item.id,
              name: item.consignee,
              tel: item.mobile,
              address: item.province + item.city + item.county + ' ' + item.address,
              isDefault: true
            })
          }else{
            this.addressList.push({
              id: item.id,
              name: item.consignee,
              tel: item.mobile,
              address: item.province + item.city + item.county + ' ' + item.address
            })
          }

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.addressGroup {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}

.bottom_btn {
  position: fixed;
  bottom: 0;
}

.van-address-list__bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    box-sizing: border-box;
    width: 100%;
    padding: 0 16px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #fff;
}
</style>
