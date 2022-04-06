<template>
  <div class="page shop-page-dist-list">
    <!-- <div class="tal_class_searchBox">
      <van-search placeholder="点击前往搜索" @click="$router.push({ name: 'search' })" />
      <div class="tal_class_searchMask"></div>
    </div> -->
    <!-- <div class="list-title">
        <span class="line"></span>
        <span class="hot">商品列表</span>
        <span class="line"></span>
      </div> -->
    <div class="img-wrapper">

      <img class="img" src="./display.jpg">

       </div>
    <van-card
      v-for="(item, index) in list"
      :key="index"
      :price="item.price"
      :title="item.title"
      :thumb="item.img"
      :origin-price="item.originPrice"
      @click="onDetailClick(item.id)"
    >
      <template #content>
        <van-button size="mini">购物车</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
import { Search, Card } from 'vant'
var list = require('./list.json')

export default {
  name: 'GoodList',
  components: {
    [Search.name]: Search,
    [Card.name]: Card
  },
  data() {
    return {
      msg: 'home',
      list: [
        {
          price: 20,
          title: '血糖',
          img: require('./images/xt.jpg'),
          originPrice: 30
        },
        {
          price: 20,
          title: '总胆固醇',
          img: require('./images/zdgc.jpg'),
          originPrice: 30
        },
        {
          price: 20,
          title: '甘油三酯',
          img: require('./images/gysz.jpg'),
          originPrice: 30
        },
        {
          price: 20,
          title: '尿酸',
          img: require('./images/ns.jpg'),
          originPrice: 30
        }
      ]
    }
  },
  methods: {
    onDetailClick(id) {
      // this.$router.push({ path: '/goods-detail', query: { id } });
      this.$router.push({ path: '/dist-shop-detail' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

.shop-page-dist-list.page{
    display: flex;
    flex-direction: column;
    // align-items: center;
    background-color: #fafbfb;
    font-family: PingFangSC-Medium;
}
.img-wrapper{
  width:100%;
  height: 3rem;
  img{
    width: 100%;
    height: 100%
  }
}
// @import './index.scss';
// /*-----------list-------------------------------------------------------------------------*/
// .list-item h3 {
//   margin-top: 10px; /*px*/
//   font-size: 12px; /*px*/
//   height: 20px; /*px*/
//   line-height: 20px; /*px*/
//   text-align: left;
//   padding-left: 10px; /*px*/
// }
// .del {
//   color: #bbb;
//   text-decoration: line-through;
//   margin-left: 1px; /*px*/
//   font-size: 10px; /*px*/
//   vertical-align: baseline;
// }
// .list-price {
//   text-align: left;
//   padding-left: 10px; /*px*/
// }
// .price-new {
//   font-size: 16px; /*px*/
//   color: #ff464e;
//   margin-right: 5px; /*px*/
// }

// /*list-----------------------------------------------------------------------------------------*/
// .list-title {
//   max-width: 1600px;
//   width: 100%;
//   height: 44px; /*px*/
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   align-content: flex-start;
//   background-color: rgb(238, 238, 238);
// }
// .list-title .line {
//   width: 20px; /*px*/
//   height: 2px; /*px*/
//   background-color: black;
//   opacity: 0.5;
// }
// .list-title .hot {
//   font-size: 16px; /*px*/
//   margin-left: 5px; /*px*/
//   margin-right: 5px; /*px*/
//   color: rgb(5, 27, 40);
// }
// .list {
//   max-width: 1600px;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   position: relative;
//   box-sizing: border-box;
//   flex-flow: row wrap;
//   align-content: flex-start;
//   flex-shrink: 0;
//   justify-content: space-between;
// }
// .list .list-item {
//   width: 49.5%;
//   display: flex;
//   margin-bottom: 10px;
//   flex-direction: column;
// }
// .list .list-item img {
//   width: 100%;
// }
</style>
