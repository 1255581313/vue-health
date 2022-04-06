  <template>
    <div class="add-device">
    <div class="header">
      <span>请扫码或输入设备SN号</span>
    </div>
    <div class="main">
      <input placeholder="请输入SN号">
      <div class="btn" @click="scan">去扫码</div>
    </div>
    <div class="des">
      <span  class="title">支持扫码：</span>
      <span class="text">1、产品说明书上的设备二维码(适用于老包装)</br>2、仪器背面的二维码(适用于新包装)</br>3、仪器背面的条形码</br>4、三高套装外包装上的二维码 </span>
    </div>
    <div class="link" @click="link">
      <span class="text">点击查看，支持数据自动上报的仪器 ></span>
    </div>

    <van-button type="danger" size="large" @click="bind">绑定</van-button>

  </div>
</template>

<script>
export default {
  name: 'HomeList',
  components: {},

  data() {
    return {}
  },
  methods: {
    scan() {
      this.$toast({
        message: '开发中',
        duration: 1500
      })
    },
    bind() {
      this.$toast({
        message: '开发中',
        duration: 1500
      })
    },
    link() {
      this.$toast({
        message: '开发中',
        duration: 1500
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
  padding: 18px;
  line-height: 19px;
  white-space: nowrap;
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
  margin-top: 30px;
  background-color: white;
  width: 100%;
  height: 50px;
  position: relative;
  input {
    height: 100%;
    border: none;
    width: 100%;
    padding-right: 60px;
    padding-left: 18px;
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
</style>
