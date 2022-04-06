<template>
  <div class="page shop-page-detail">
    <!-- <div class="statusbar"> -->
    <!-- <span class="input-0">输入文本</span>
    <div class="status-bar">
      <div class="organization-wrapper">
        <img
          class="badge"
          src="./images/img_0.png"
        />
        <span class="organization">千库网</span>
      </div>
      <img
        class="label"
        src="./images/img_1.png"
      />
      <span class="label-1">9:41 AM</span>
      <div class="group">
        <img
          class="icon-bluetooth"
          src="./images/img_2.png"
        />
        <span class="percent">100%</span>
        <div class="view"><div class="mask" /></div>
        <img
          class="dot"
          src="./images/img_3.png"
        />
      </div>
    </div> -->
    <!-- <span class="title">商品</span>
    </div> -->
    <div class="container">
      <img class="thumbnail" src="./images/xt.jpg" />
    </div>
    <div class="goods">
      <span class="summary">血糖试纸</span>
      <div class="body"> <span class="price">¥</span> <span class="caption">20</span> </div>
      <!-- <div class="footer">
      <div class="benifit-wrapper">
        <span class="benifit">店铺券满10减2</span>
      </div>
      <div class="group-1"><span class="buy">购买得积分</span></div>
    </div> -->
      <div class="origin-price">原价：¥ 30.00</div>
    </div>
    <div class="list-1-v-4">
      <div class="header-item-0" @click="show1 = true">
        <span class="title-1">选择</span> <span class="caption-1">商品选择</span>
        <img class="icon-right" src="./images/img_5.png" />
      </div>
      <!-- <div class="body-1">
      <div class="icon-avatar-wrapper-item-0">
        <img
          class="icon-avatar"
          src="./images/img_6.png"
        />
      </div>
      <div class="icon-avatar-wrapper-item-1">
        <img
          class="icon-avatar-1"
          src="./images/img_7.png"
        />
      </div>
      <div class="icon-avatar-wrapper-item-2">
        <img
          class="icon-avatar-2"
          src="./images/img_8.png"
        />
      </div>
      <div class="icon-avatar-wrapper-item-3">
        <img
          class="icon-avatar-3"
          src="./images/img_9.png"
        />
      </div>
    </div>
    <div class="header-item-1">
      <span class="title-2">发货</span> <span class="location">安徽合肥</span>
      <span class="caption-2">快递:免运费</span>
      <img
        class="icon-right-1"
        src="./images/img_10.png"
      />
    </div>
    <div class="main-1">
      <div class="group-2">
        <div class="view-1">
          <span class="title-3">配送至</span>
          <span class="address">长治市 壶关县 龙泉镇</span>
        </div>
        <img
          class="icon-right-2"
          src="./images/img_11.png"
        />
      </div>
      <div class="group-3">
        <div class="view-2">
          <span class="caption-3">参数</span> <span class="title-4">品牌</span>
        </div>
        <img
          class="icon-right-3"
          src="./images/img_12.png"
        />
      </div>
    </div> -->
    </div>

    <van-sku
  v-model="show1"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :message-config="messageConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>

    <!-- <van-popup v-model="propsPopup" position="bottom">
      <popup-props :props-str="props_str"></popup-props>
    </van-popup> -->
    <div class="container-1">
      <div class="primary">
        <div class="empty" />
        <span class="detail">宝贝详情</span>
      </div>
      <div class="side"><div class="empty-1" /></div>
    </div>
    <!-- <div class="list">
    <div class="primary-item-0">
      <img
        class="icon-complete"
        src="./images/img_13.png"
      />
      <span class="word">客服</span>
    </div>
    <div class="primary-item-1">
      <img
        class="icon-star"
        src="./images/img_14.png"
      />
      <span class="favor">收藏</span>
    </div>
    <div class="primary-item-2">
      <img
        class="icon-share"
        src="./images/img_15.png"
      />
      <span class="share">分享</span>
    </div>
    <div class="button-0"><span class="buy-1">立即购买</span></div>
  </div> -->

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" @click="showPopup"/>
      <!-- <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" /> -->
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

    <van-popup
v-model="show"
position="bottom"
class="contact"
>
      客服电话1661668789
    </van-popup>
  </div>
</template>
<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Popup, Sku } from 'vant'
// import popupProps from './popup-props'

export default {
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Popup.name]: Popup,
    [Sku.name]: Sku
    // [popupProps.name]: popupProps
  },
  data() {
    return {
      show: false,
      constants: {},
      show1: false,
      // 商品 id
      goodsId: '946755',
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          // {
          //   k: '颜色', // skuKeyName：规格类目名称
          //   k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          //   v: [
          //     {
          //       id: '1', // skuValueId：规格值 id
          //       name: '红色', // skuValueName：规格值名称
          //       imgUrl: 'https://img01.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
          //       previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg' // 用于预览显示的规格类目图片
          //     },
          //     {
          //       id: '1',
          //       name: '蓝色',
          //       imgUrl: 'https://img01.yzcdn.cn/2.jpg',
          //       previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg'
          //     }
          //   ],
          //   largeImageMode: true //  是否展示大图模式
          // }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          // {
          //   // 商品留言
          //   datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
          //   multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
          //   name: '留言', // 留言名称
          //   type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
          //   required: '1', // 是否必填 '1' 表示必填
          //   placeholder: '', // 可选值，占位文本
          //   extraDesc: '' // 可选值，附加描述文案
          // }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: 'https://img01.yzcdn.cn/1.jpg'
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(() => resolve('https://img01.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000)
          })
        }
      }

    }
  },
  computed: {
    props_str() {
      return []
      // const props_arr = []
      // _.each(this.goods.attribute, json => {
      //   props_arr.push([json['attribute'], json['value']])
      // })
      // return props_arr || []
    }
  },
  methods: {
    showPopup() {
      this.show = true
    },
    select() {
      console.log(12345)
    },
    onBuyClicked() {
      this.$router.push('./dist-shop/checkout')
    },
    onAddCartClicked() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import './App.scss';

.origin-price {
  margin-top: 0.27rem;
  margin-left: 0.29rem;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 0.42rem;
  color: #000;
  font-family: PingFang SC;
  font-size: 0.3rem;
  font-weight: 400;
}

.contact{

   height: '10%';
 text-overflow: ellipsis;
    line-height: 0.42rem;
    color: #000;
    font-family: PingFang SC;
    font-size: 0.1rem;
    font-weight: 400;
    padding:0.2rem

}
</style>
