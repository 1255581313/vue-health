<template>
  <div class="home">
    <div class="header">我的设备</div>
    <div v-for="item,index in deviceList" :key="index" class="list">
      <div class="item">
        <div class="icon"> <img class="icon-list" :src="item.image" /> </div>
        <div class="content">
          <div class="name">{{item.name}}</div>
          <div class="name">{{item.imei}}</div>
          <div class="type">{{item.type}}</div>
        </div>
        <div style="float: right;"><van-button type="danger" round size="large" @click="deleteDevice(item.id)">删除</van-button></div>
      </div>
    </div>
    <div class="van-address-list__bottom">
      <van-button type="danger" round size="large" @click="addDevice">新增设备</van-button>
    </div>
  </div>
</template>

<script>
  import { deviceList, deleteUserDevice } from '@/api/health/deviceList'
import { Tab, Tabs, Swipe, SwipeItem, Grid, GridItem, Button, Dialog } from 'vant'

export default {
  name: 'GoodList',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Button.name]: Button
  },

  data() {
    return {
      deviceList:[]
    }
  },
  created() {
    this.loadDevice()
  },
  methods: {
    loadDevice() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      deviceList(query).then(res => {
        if(res.data != null && res.data.length > 0){
         this.deviceList = res.data
        }
      })
    },
    addDevice() {
      this.$router.push('./addDevice')
    },
    deleteDevice(id) {
      Dialog.confirm({
        title: '提示',
        message: '此操作将永久删除设备, 是否继续?',
      })
        .then(() => {
          const query = {
            id: id
          }
          deleteUserDevice(query).then(res => {
            if(res.status == 200 ){
              this.$router.go(0)
            }
          })
        })
        .catch(() => {
          // on cancel
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  background-color: #f2f2f5;
  height: 100vh;
  font-size: 16px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.16rem;
  padding: 0.1rem;
  background-color: #fff;
}
.add-btn {
  padding: 0.2rem;
}
.list{
  width: 100%;
  padding: 0.3rem;
  box-sizing: border-box;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .icon{
    width: 2rem;
    height: 1.5rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .content {
       display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 0.2rem;
    height: 1rem;
  }
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
