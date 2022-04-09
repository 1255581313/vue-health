  <template>
  <div class="add-device">
    <div class="header">
      <span>请输入设备IMEI号</span>
    </div>
    <div class="main">
      <input v-model="imei" class="ipt" placeholder="请输入IMEI号" />
    </div>

    <van-button type="danger" size="momal" block @click="bind">绑定</van-button>
  </div>
</template>

<script>
import { getDeviceRegisterByImei, getUserDeviceByImeiAndUserId, addUserDevice } from '@/api/health/deviceList'
import { Dialog } from 'vant'
export default {
  name: 'HomeList',
  components: {},

  data() {
    return {
      imei: null
    }
  },
  methods: {
    bind() {
      if (this.imei == null) {
        this.$toast('请输入IMEI号')
        return
      }
      const query = {
        imei: this.imei
      }
      const query2 = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b',
        imei: this.imei
      }
      getDeviceRegisterByImei(query).then(res => {
        if (res.status == 200 && res.data != null) {
          getUserDeviceByImeiAndUserId(query2).then(res => {
            if (res.status == 200) {
              addUserDevice(query2).then(res => {
                if (res.status == 200) {
                  Dialog.alert({
                    message: '绑定成功'
                  }).then(() => {
                    this.$router.go(-1)
                  })
                } else {
                  Dialog.alert({
                    message: '绑定失败'
                  }).then(() => {
                    this.$router.go(-1)
                  })
                }
              })
            } else {
              Dialog.alert({
                title: '绑定失败',
                message: '你已绑定过该设备，请确认'
              }).then(() => {
                // on close
              })
            }
          })
        } else {
          Dialog.alert({
            title: '绑定失败',
            message: '请确认仪器是否为睿博设备'
          }).then(() => {
            // on close
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-device {
  background-color: #f2f2f5;
  height: 100vh;
}
.header {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  padding: 0.18rem;
  line-height: 0.18rem;
  white-space: nowrap;
  padding: 0.37rem;
  span {
    color: rgb(83, 83, 83);
    font-family: 'PingFang SC';
    font-size: 16px;
    font-weight: 400;
  }
}

.main {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  margin-top: 0.6rem;
  background-color: white;
  width: 100%;
  height: 1rem;
  position: relative;
  .ipt {
    height: 100%;
    border: none;
    width: 100%;
    // padding-right: 1.2rem;
    // padding-left: 0.4rem;
    // padding-top: 0.2rem;
    // padding-bottom: 0.2rem;
    // line-height: 0.2rem;
    padding: 0.2rem;
    font-size: 16px;

    box-sizing: border-box;
  }
  .btn {
    position: absolute;
    right: 18px;
    font-size: 16px;
    font-weight: 500;
    border: none;
  }
}

.des {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 50px;
  padding: 18px;
  line-height: 26px;
  .title {
    position: relative;
    height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(83, 83, 83);
    font-family: 'PingFang SC';
    font-size: 16px;
    font-weight: 400;
  }
  .text {
    -webkit-box-orient: vertical;
    display: -webkit-inline-box;
    -webkit-line-clamp: 4;
    position: relative;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(83, 83, 83);
    font-family: 'PingFang SC';
    font-size: 16px;
    font-weight: 400;
  }
}

.link {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;

  .text {
    position: relative;
    line-height: 26px;
    white-space: pre;
    color: rgb(176, 0, 24);
    font-family: 'PingFang SC';
    font-size: 16px;
    font-weight: 400;
  }
}

//  /deep/
.van-button {
  position: absolute;
  bottom: 0;
}

input:-ms-input-placeholder {
  font-size: 16px;
} /* Internet Explorer 10+ */

input::-webkit-input-placeholder {
  font-size: 16px;
} /* WebKit browsers */

input::-moz-placeholder {
  font-size: 16px;
} /* Mozilla Firefox 4 to 18 */

input:-moz-placeholder {
  font-size: 16px;
} /* Mozilla Firefox 19+ */
</style>
