<template>
  <div class="home">
<van-tabs>
  <van-tab v-for="(item,index) in healthTabList" :key="index" :title="item.title">
     {{ item.title }}
  </van-tab>
</van-tabs>

<!-- 血糖趋势
  持续记录血糖后可查看您的血糖趋势 -->

   <div class="mod">
    <div class="group">
      <div class="primary">
        <div class="container">
          <div class="wrapper">
            <div class="group1">
              <div class="view">
                <img
                  class="logo"
                  src="http://imgcook-autoui.oss-cn-hangzhou.aliyuncs.com/local%2Fai_image%2F60e351643bc0ff9c887bc4bd70a55979.png?OSSAccessKeyId=LTAITRRSqzaFMbxR&Expires=1647048986&Signature=%2B7ExC98RCarSnFDOR0dj%2FS%2BJaJY%3D"
                />
                <img
                  class="bg"
                  src="http://imgcook-autoui.oss-cn-hangzhou.aliyuncs.com/local%2Fai_image%2Fa091c94096e9539647ade8e7d802a852.png?OSSAccessKeyId=LTAITRRSqzaFMbxR&Expires=1647048986&Signature=%2F6HWRQSXUlRzG%2Fn3kdfcsViFIQM%3D"
                />
              </div>
              <img
                class="entryPic"
                src="http://imgcook-autoui.oss-cn-hangzhou.aliyuncs.com/local%2Fai_image%2F90863a8d00e233e40629bf66b1db3eaa.png?OSSAccessKeyId=LTAITRRSqzaFMbxR&Expires=1647048986&Signature=kK%2FCU8o%2FArpQ2QnH%2FTjPa8yJXC4%3D"
              />
            </div>
            <div class="group2">
              <span class="title">血糖值</span>
              <span class="input0">请输入血糖值</span>
              <span class="mmoll">mmol/L</span>
            </div>
          </div>
          <div class="wrapperItem0">
            <div class="horizontalLine" />
            <div class="group3">
              <span class="title1">检测时段</span>
              <span class="caption1">空腹</span>
              <img
                class="iconRight"
                src="http://imgcook-autoui.oss-cn-hangzhou.aliyuncs.com/local%2Fai_image%2Fd39cccaac62b717b95961446a9067579.png?OSSAccessKeyId=LTAITRRSqzaFMbxR&Expires=1647048986&Signature=Fn1F0jjM%2BSR%2BotrWVIpRZ%2FwemQw%3D"
              />
            </div>
          </div>
          <div class="wrapperItem1">
            <div class="horizontalLine1" />
            <div class="group4">
              <span class="title2">检测时间</span>
              <span class="caption2">2022年03月12日07：33</span>
              <img
                class="iconRight1"
                src="http://imgcook-autoui.oss-cn-hangzhou.aliyuncs.com/local%2Fai_image%2Fab32b38bf916092c3cc0459c8b38c36d.png?OSSAccessKeyId=LTAITRRSqzaFMbxR&Expires=1647048986&Signature=sbgsEaAIlaTChHv30bz%2FwEN0How%3D"
              />
            </div>
          </div>
          <div class="wrapperItem2">
            <div class="horizontalLine2" />
            <div class="group5">
              <span class="title3">备注</span>
              <span class="caption3">添加备注(选填)</span>
              <img
                class="iconRight2"
                src="http://imgcook-autoui.oss-cn-hangzhou.aliyuncs.com/local%2Fai_image%2F535d44ec8b8127a29c676877a0e9b45d.png?OSSAccessKeyId=LTAITRRSqzaFMbxR&Expires=1647048986&Signature=78pALlvkCGuhV8BXzJ42sC6toEc%3D"
              />
            </div>
          </div>
          <div class="wrapper1">
            <div class="horizontalLine3" />
            <div class="badgeWrapper">
              <img
                class="badge"
                src="http://imgcook-autoui.oss-cn-hangzhou.aliyuncs.com/local%2Fai_image%2F57a4396f628ec7cd14ff1017dd275c22.png?OSSAccessKeyId=LTAITRRSqzaFMbxR&Expires=1647048986&Signature=t7rvS8oIr2xM6I1JLqP68ctEUCY%3D"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="side">
        <img
          class="verticalLine"
          src="http://imgcook-autoui.oss-cn-hangzhou.aliyuncs.com/local%2Fai_image%2F5f8d56ffc5f7c730636516fb49f0de51.png?OSSAccessKeyId=LTAITRRSqzaFMbxR&Expires=1647048986&Signature=a1BbFOwHwDBK%2F4oTswFXvkc1S2Q%3D"
        />
      </div>
    </div>
  </div>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>

<style>
 .mod {
  width: 750px;
  height: 829px;
}
.group {
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
}
.primary {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin-right: 4px;
  width: 100%;
  height: 829px;
}
.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 46px;
  margin-left: 29px;
}
.wrapper {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  height: 240px;
}
.group1 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  width: 700px;
}
.view {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.logo {
  position: relative;
  width: 114px;
  height: 28px;
}
.bg {
  position: relative;
  margin-top: 23px;
  width: 290px;
  height: 28px;
}
.entryPic {
  margin-top: 6px;
  width: 183px;
  height: 109px;
}
.group2 {
  display: flex;
  position: relative;
  align-items: flex-end;
  flex-direction: row;
  margin-top: 32px;
  height: 49px;
  white-space: nowrap;
}
.title {
  margin-right: 92px;
  margin-bottom: 6px;
  line-height: 32px;
  color: #333333;
  font-family: PingFang SC;
  font-size: 32px;
  font-weight: 400;
}
.input0 {
  margin-right: 83px;
  margin-bottom: 6px;
  line-height: 31px;
  color: #b3b3b3;
  font-family: PingFang SC;
  font-size: 31px;
  font-weight: 400;
}
.mmoll {
  margin-bottom: 14px;
  line-height: 29px;
  color: #333333;
  font-family: PingFang SC;
  font-size: 29px;
  font-weight: 400;
}
.wrapperItem0 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2px;
  height: 127px;
}
.horizontalLine {
  position: relative;
  margin-top: -2px;
  background-color: #f0f0f0;
  width: 681px;
  height: 2px;
}
.group3 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 37px;
  height: 46px;
  line-height: 32px;
  white-space: nowrap;
}
.title1 {
  margin-top: 1px;
  margin-right: 59px;
  color: #333333;
  font-family: PingFang SC;
  font-size: 32px;
  font-weight: 400;
}
.caption1 {
  margin-top: -1px;
  margin-right: 404px;
  color: #333333;
  font-family: PingFang SC;
  font-size: 32px;
  font-weight: 400;
}
.iconRight {
  margin-top: 3px;
  width: 11px;
  height: 19px;
  line-height: normal;
  white-space: normal;
}
.wrapperItem1 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2px;
  height: 127px;
}
.horizontalLine1 {
  position: relative;
  margin-top: -2px;
  background-color: #f0f0f0;
  width: 681px;
  height: 2px;
}
.group4 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 34px;
  height: 49px;
  line-height: 32px;
  white-space: nowrap;
}
.title2 {
  margin-top: 4px;
  margin-right: 61px;
  color: #333333;
  font-family: PingFang SC;
  font-size: 32px;
  font-weight: 400;
}
.caption2 {
  margin-top: -4px;
  margin-right: 124px;
  color: #333333;
  font-family: PingFang SC;
  font-size: 32px;
  font-weight: 400;
}
.iconRight1 {
  margin-top: 7px;
  width: 21px;
  height: 28px;
  line-height: normal;
  white-space: normal;
}
.wrapperItem2 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2px;
  height: 127px;
}
.horizontalLine2 {
  position: relative;
  margin-top: -2px;
  background-color: #f0f0f0;
  width: 681px;
  height: 2px;
}
.group5 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 37px;
  height: 45px;
  line-height: 32px;
  white-space: nowrap;
}
.title3 {
  margin-right: 124px;
  color: #333333;
  font-family: PingFang SC;
  font-size: 32px;
  font-weight: 400;
}
.caption3 {
  margin-right: 231px;
  color: #b3b3b3;
  font-family: PingFang SC;
  font-size: 32px;
  font-weight: 400;
}
.iconRight2 {
  margin-top: 4px;
  width: 11px;
  height: 19px;
  line-height: normal;
  white-space: normal;
}
.wrapper1 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2px;
}
.horizontalLine3 {
  position: relative;
  margin-top: -2px;
  background-color: #f0f0f0;
  width: 681px;
  height: 2px;
}
.badgeWrapper {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 47px;
  border-radius: 46px;
  background-color: #ed8797;
  width: 682px;
  height: 94px;
}
.badge {
  margin-top: -3px;
  width: 64px;
  height: 31px;
}
.side {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  width: 0px;
}
.verticalLine {
  width: 4px;
  height: 829px;
}
</style>
