<template>
  <div class="page user-page-dist">
    <div class="banner-wrapper">
    <img
      class="banner"
      src="./images/img_0.png"
    />
  </div>
  <div class="statusbar-list-1-v-4">
    <span class="title"></span>
    <div class="body">
      <div class="block-2">
        <div class="container-1">
          <img
            class="picture"
            src="./images/img_5.png"
          />
        </div>
        <!-- <div class="container-2">
          <div class="wrapper-item-0">
            <div class="group-1">
              <div class="icon-wallet-wrapper">
                <img
                  class="icon-wallet"
                  src="./images/img_6.png"
                />
              </div>
            </div>
            <span class="word">钱包</span>
          </div>
          <div class="wrapper-item-1">
            <div class="group-2">
              <div class="icon-money-wrapper">
                <img
                  class="icon-money"
                  src="./images/img_7.png"
                />
                <img
                  class="icon-circle"
                  src="./images/img_8.png"
                />
              </div>
            </div>
            <span class="tag-1">卡劵</span>
          </div>
          <div class="wrapper-item-2">
            <div class="group-3">
              <div class="view">
                <img
                  class="icon-scan"
                  src="./images/img_9.png"
                />
                <img
                  class="icon-piece"
                  src="./images/img_10.png"
                />
              </div>
            </div>
            <span class="label-2">订单</span>
          </div>
          <div class="wrapper-item-3">
            <img
              class="large-icon"
              src="./images/img_11.png"
            />
            <span class="word-1">地址</span>
          </div>
        </div> -->
      </div>
      <div class="block-3">
        <img
          class="image"
          src="./images/img_12.png"
        />
      </div>
      <span class="caption">温柔小绵羊</span>
    </div>
  </div>
  <!-- <div class="list-1-v-4">
    <div class="body-1">
      <div class="icon-data-wrapper-item-0">
        <img
          class="icon-data"
          src="./images/img_17.png"
        />
      </div>
      <div class="icon-data-wrapper-item-1">
        <img
          class="icon-file"
          src="./images/img_18.png"
        />
      </div>
      <div class="icon-data-wrapper-item-2">
        <img
          class="icon-star"
          src="./images/img_19.png"
        />
      </div>
      <div class="icon-data-wrapper-item-3">
        <img
          class="icon-calendar"
          src="./images/img_20.png"
        />
      </div>
    </div>
    <div class="footer">
      <div class="block-4">
        <span class="num">0</span> <span class="tag-2">积分</span>
      </div>
      <span class="label-3">卡册</span> <span class="favor">收藏</span>
      <div class="block-5">
        <span class="word-2">周报</span> <span class="tag-3">/</span>
        <span class="label-4">月报</span>
      </div>
    </div>
  </div> -->
  <div class="list-2-v-1">
    <div class="primary" />
    <div class="side">
      <div v-for="(item,index) in cellsList" :key="index" class="block-6" @click="toLink(item.url)">
        <div class="container-3">
          <div class="wrapper">
            <img
              class="icon-list"
                :src="require('./images/img_'+item.img+'.png')"
            />
            <span class="title-1">{{item.label}}</span>
          </div>
          <img
            class="icon-right"
            src="./images/img_22.png"
          />
        </div>
      </div>
      <!-- <div class="block-7">
        <div class="empty" />
        <div class="empty-1" />
        <div class="container-4">
          <div class="wrapper-item-0-1">
            <div class="group-4">
              <img
                class="icon-package"
                            src="./images/img_21.png"

              />
              <span class="caption-1">病例管理</span>
            </div>
            <img
              class="icon-right-1"
              src="./images/img_24.png"
            />
          </div>
          <div class="wrapper-item-1-1">
            <div class="group-5">
              <img
                class="icon-logout"
                src="./images/img_25.png"
              />
              <span class="title-2">控糖方案</span>
            </div>
            <img
              class="icon-right-2"
              src="./images/img_26.png"
            />
          </div>
        </div>
      </div>
      <div class="block-item-0">
        <img
          class="divider"
          src="./images/img_27.png"
        />
        <div class="container-5">
          <div class="wrapper-1">
            <img
              class="icon-male"
              src="./images/img_28.png"
            />
            <span class="caption-2">用药管理</span>
          </div>
          <img
            class="icon-right-3"
            src="./images/img_29.png"
          />
        </div>
      </div>
      <div class="block-item-1">
        <img
          class="divider-1"
          src="./images/img_30.png"
        />
        <div class="container-6">
          <div class="wrapper-2">
            <img
              class="icon-list-1"
              src="./images/img_31.png"
            />
            <span class="title-3">数据通知</span>
          </div>
          <img
            class="icon-right-4"
            src="./images/img_32.png"
          />
        </div>
      </div> -->
    </div>
  </div>

  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      constants: {},
      cellsList: [
        { icon: 'location-o', img: '21', label: '我的设备', des: '', url: '/dist-user/device' },
        { icon: 'location-o', img: '23', label: '健康档案', des: '完善信息获取积分', url: '/dist-user/healthRecords' },
        { icon: 'location-o', img: '25', label: '订单管理', des: '', url: '/dist-user/order-list' },
        { icon: 'location-o', img: '28', label: '我的亲友', des: '', url: '/dist-user/relatives' },
        { icon: 'location-o', img: '31', label: '地址管理', des: '', url: '/dist-user/address' }
        // { icon: 'location-o', label: '病历管理', des: '' },
        // { icon: 'location-o', label: '控糖方案', des: '' },
        // { icon: 'location-o', label: '用药管理', des: '' },
        // { icon: 'location-o', label: '数据通知', des: '' }
      ]
    }
  },
  methods: {
    toLink(url) {
      this.$router.push(url)
    }
  }

}
</script>
<style lang="scss" scoped>
@import './App.scss';
</style>
