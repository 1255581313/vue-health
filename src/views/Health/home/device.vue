<template>
  <div class="home">
<!-- <van-tabs> -->
  <!-- <van-tab v-for="(item,index) in healthTabList" :key="index" :title="item.title"> -->
    <div class="header">
      多功能测试仪
    </div>
  <van-empty  >
   <div slot="description">"这里空空如也 </br>快去添加1台设备吧"</div>
    <van-button round type="danger" plain class="bottom-button" @click="addDevice">去添加</van-button>
  </van-empty>
  <!-- </van-tab> -->
</van-tabs>

  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem, Grid, GridItem } from 'vant'

export default {
  name: 'GoodList',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem

  },

  data() {
    return {
      constants: {},
      active: 1,
      healthTabList: [
        { title: '血糖' },
        { title: '血压' },
        { title: '血氧' },
        { title: '胆固醇' },
        { title: '甘油三酯' },
        { title: '尿酸' }
        // { title: '血脂' },
        // { title: '运动' },
        // { title: '饮食' },
        // { title: '体重' },
        // { title: '用药' },
      ],
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    addDevice() {
      this.$router.push('./addDevice')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  background-color: #f2f2f5;
    height: 100vh;

}
.header{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding:10px;
  background-color: #fff;
}

</style>
