<template>
  <div class="order_detail">
    <div class="order-goods">
      <van-card
v-for="item in orderGoods"
                :key="item.id"
                :title="item.goodsName"
                desc="暂无描述"
                :num="item.number"
                :price="item.price +'.00'"
                :thumb="item.picUrl"></van-card>

      <van-cell-group>
        <van-cell title="商品金额">
          <span class="red">{{orderInfo.goodsPrice * 100 | yuan}}</span>
        </van-cell>
        <van-cell title="快递费用">
          <span class="red">{{orderInfo.freightPrice * 100 | yuan}}</span>
        </van-cell>
      </van-cell-group>
    </div>

    <van-cell-group style="margin-top: 20px;">
      <van-cell
icon="dingwei"
                :title="`${orderInfo.consignee}  ${orderInfo.mobile}`"
                :label="orderInfo.address" />
    </van-cell-group>

    <van-cell-group style="margin-top: 20px;">
      <van-cell title="下单时间">
        <span>{{orderInfo.addTime }}</span>
      </van-cell>
      <van-cell title="订单编号">
        <span>{{orderInfo.orderSn }}</span>
      </van-cell>
      <van-cell title="订单备注">
        <span>{{orderInfo.remark }}</span>
      </van-cell>

      <van-cell title="实付款：">
        <span class="red">{{orderInfo.actualPrice * 100 | yuan}}</span>
      </van-cell>
      <!-- 订单动作 -->
      <van-cell>
        <van-button
v-if="handleOption.cancel"
                    size="small"
                    style=" float:right"
                    round
                    type="danger"
                    @click="cancelOrder(orderInfo.id)">取消订单</van-button>
        <van-button
v-if="handleOption.pay"
                    size="small"
                    style=" float:right"
                    round
                    type="danger"
                    @click="payOrder(orderInfo.id)">去支付</van-button>
        <van-button
v-if="handleOption.delete"
                    size="small"
                    style=" float:right"
                    type="danger"
                    @click="deleteOrder(orderInfo.id)">删除订单</van-button>
        <van-button
v-if="handleOption.confirm"
                    size="small"
                    style=" float:right"
                    type="danger"
                    @click="confirmOrder(orderInfo.id)">确认收货</van-button>
        <van-button
v-if="handleOption.refund"
                    size="small"
                    style=" float:right"
                    type="danger"
                    @click="refundOrder(orderInfo.id)">退款</van-button>
      </van-cell>
    </van-cell-group>

    <van-cell-group
v-if="showExp()"
                    style="margin-top: 20px;">
      <van-cell title="快递公司">
        <span>{{orderInfo.expCode }}</span>
      </van-cell>
      <van-cell title="快递编号">
        <span>{{orderInfo.expNo }}</span>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Card, Field, SubmitBar, Button, Cell, CellGroup, Dialog } from 'vant'
// import _ from 'lodash';
import {
  orderDetail,
  orderDelete,
  orderConfirm,
  orderCancel,
  orderRefund
} from '@/api/health/api'

export default {

  components: {
    [Dialog.name]: Dialog,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [SubmitBar.name]: SubmitBar,
    [Card.name]: Card,
    [Field.name]: Field
  },
  data() {
    return {
      isSubmit: false,
      isDisabled: false,
      orderInfo: {},
      orderGoods: [],
      handleOption: {},
      expressInfo: {}
    }
  },
  created() {
    this.init()
  },

  methods: {
    showExp() {
      return _.has(this.orderInfo, 'expNo')
    },
    deleteOrder(id) {
      const that = this
      this.$dialog
        .confirm({ message: '确定要删除该订单吗?' })
        .then(() => {
          orderDelete({ orderId: id }).then(() => {
            this.$toast('已删除订单')
            this.$router.go(-1)
          })
        })
        .catch(() => {})
    },
    cancelOrder(id) {
      this.$dialog
        .confirm({ message: '确定要取消该订单吗?' })
        .then(() => {
          orderDelete({ orderId: id }).then(() => {
            this.init()
            this.$toast('已取消该订单')
          })
        })
        .catch(() => {})
    },
    confirmOrder(id) {
      this.$dialog
        .confirm({
          message: '请确认收到货物, 确认收货后无法撤销!'
        })
        .then(() => {
          orderConfirm({ orderId: id }).then(() => {
            this.init()
            this.$toast('已确认收货')
          })
        })
        .catch(() => {})
    },
    refundOrder(id) {
      this.$dialog
        .confirm({ message: '确定要申请退款吗?' })
        .then(() => {
          orderRefund({ orderId: id }).then(() => {
            this.init()
            this.$toast('已申请订单退款')
          })
        })
        .catch(() => {})
    },
    commentOrder(id) {},
    toPay(id) {
      this.$router.push({ name: 'payment', params: { orderId: id }})
    },
    init() {
      const orderId = this.$route.query.orderId
      orderDetail({ orderId: orderId }).then(res => {
        var data = res.data.data
        this.orderInfo = data.orderInfo
        this.orderGoods = data.orderGoods
        this.handleOption = data.orderInfo.handleOption
        this.expressInfo = data.expressInfo
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.order_detail {
  padding-bottom: 70px;
}
</style>
