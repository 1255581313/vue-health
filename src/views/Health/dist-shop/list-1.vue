<template>
  <div class="page shop-page">

      <div class="list-title">
        <span class="line"></span>
        <span class="hot">商品列表</span>
        <span class="line"></span>
      </div>
      <div class="list list">
        <van-row>
          <van-col v-for="item in list" :key="item.id" span="12" class="list-item">
            <a id="click_js" target="_blank"  data-value="goods#1_1" @click="onDetailClick(item.id)">
              <!-- :href="item.jumpUrl" -->
              <img class="lazy loaded" :src="item.pic" alt="item.title" />
              <div class="list-price buy">
                <span class="price-new"><i>¥</i>{{ item.cprice }}</span>
                <i class="del">¥{{ item.oprice }}</i>
              </div>
              <h3 class="short">{{ item.name }}</h3>
            </a>
          </van-col>
        </van-row>
      </div>
  </div>
</template>

<script>
import { Search } from 'vant'
var list = require('./list.json')

export default {
  name: 'GoodList',
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      msg: 'home',
      list: list.data
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
@import './index.scss';
/*-----------list-------------------------------------------------------------------------*/
.list-item h3 {
  margin-top: 10px; /*px*/
  font-size: 12px; /*px*/
  height: 20px; /*px*/
  line-height: 20px; /*px*/
  text-align: left;
  padding-left: 10px; /*px*/
}
.del {
  color: #bbb;
  text-decoration: line-through;
  margin-left: 1px; /*px*/
  font-size: 10px; /*px*/
  vertical-align: baseline;
}
.list-price {
  text-align: left;
  padding-left: 10px; /*px*/
}
.price-new {
  font-size: 16px; /*px*/
  color: #ff464e;
  margin-right: 5px; /*px*/
}

/*list-----------------------------------------------------------------------------------------*/
.list-title {
  max-width: 1600px;
  width: 100%;
  height: 44px; /*px*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  background-color: rgb(238, 238, 238);
}
.list-title .line {
  width: 20px; /*px*/
  height: 2px; /*px*/
  background-color: black;
  opacity: 0.5;
}
.list-title .hot {
  font-size: 16px; /*px*/
  margin-left: 5px; /*px*/
  margin-right: 5px; /*px*/
  color: rgb(5, 27, 40);
}
.list {
  max-width: 1600px;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-flow: row wrap;
  align-content: flex-start;
  flex-shrink: 0;
  justify-content: space-between;
}
.list .list-item {
  width: 49.5%;
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
}
.list .list-item img {
  width: 100%;
}
</style>
