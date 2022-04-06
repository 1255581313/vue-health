<template>
  <div id="app" class="vant-global">
    <Header></Header>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="view-router"></router-view>
    </keep-alive> -->
    <router-view  class="view-router"></router-view>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Header from './components/Header'
import Tabbar from './components/Tabbar'

export default {
  components: {
    Header,
    Tabbar
  }
}
</script>

