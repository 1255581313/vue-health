<template>

  <van-tabbar v-if="!$route.meta.tabbarHidean" v-model="active"  style="z-index: 2000" >
    <van-tabbar-item v-for="(tab, index) in tabbar":key="index" :icon="tab.icon" :to="tab.path" replace>
      {{ tab.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
      tabbar: [
        {
          name: '健康',
          path: '/dist-home',
          icon: 'home-o'
        },
        {
          name: '商城',
          path: '/dist-shop',
          icon: 'cart-o'
        },
        // {
        //   name: '发现',
        //   path: '/blog',
        //   icon: 'cart-o'
        // },
        {
          name: '我的',
          path: '/dist-user',
          icon: 'manager-o'
        }
      ]
    }
  },

  watch: {
    $route: 'setActive'
  },

  created() {
    this.setActive(this.$route.path)
  },

  methods: {
    setActive(path) {
      this.tabbar.forEach((tab, i) => {
        if (tab.path == path) {
          this.active = i
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar{
  height: 1.04rem;
}
.van-tabbar-item{
font-size: 0.2rem;
}
</style>
