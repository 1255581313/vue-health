/* <template>
  <div class="tabbar-user">
    <div class="info">
      <div class="van-card">
        <div class="van-card__header">
          <a class="van-card__thumb">
            <div class="van-image" style="width: 100%; height: 100%">
              <img src="https://img01.yzcdn.cn/vant/ipad.jpeg" class="van-image__img" style="object-fit: cover" /> </div
          ></a>
          <div class="van-card__content">
            <div
              ><div class="van-card__title van-multi-ellipsis--l2">瑞博达康</div>
              <!-- <div class="van-card__desc van-ellipsis">描述信息</div> --> </div
            ><div class="van-card__bottom">
              <div class="van-card__price"> </div>
              <!-- <div class="van-card__num">x2</div> -->
            </div>
          </div></div
        ></div
      >
    </div>
    <div class="pic"></div>
    <div class="cells">
      <van-cell
        v-for="(item, index) in cellsList"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        is-link
        :value="item.des"
        :url="item.url"
      />
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem, Grid, GridItem, Card } from 'vant'

export default {
  name: 'TabbarUser',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Card.name]: Card
  },
  data() {
    return {
      isLogin: false,
      cellsList: [
        { icon: 'location-o', title: '我的设备', des: '', url: '/health/home/device' },
        { icon: 'location-o', title: '健康档案', des: '完善信息获取积分' },
        // { icon: 'location-o', title: '我的奖品', des: '' },
        { icon: 'location-o', title: '订单管理', des: '' },
        { icon: 'location-o', title: '我的亲友', des: '' },
        { icon: 'location-o', title: '地址管理', des: '' }
        // { icon: 'location-o', title: '我的保修卡', des: '享受10包换服务' },
        // { icon: 'location-o', title: '签约管理', des: '' },
        // { icon: 'location-o', title: '在线客服', des: '7:30-21:00' },
        // { icon: 'location-o', title: '授权管理', des: '' },
        // { icon: 'location-o', title: '健康月报', des: '' }
      ]
    }
  },

  activated() {},

  methods: {}
}
</script>

<style scoped lang="scss">
.tabbar-user {
  > div {
    margin-bottom: 10px;
  }
  &__quit {
    border: 0;
    border-radius: 0;
  }
}
</style>
 */
