<template>
  <div>
    <!--     <span @click="goBack">返回</span>
    <span>{{ title }}</span> -->

    <!-- <svg class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
      <polygon
        points="100,10 40,180 190,60 10,60 160,180"
        style="fill: lime; stroke: purple; stroke-width: 5; fill-rule: evenodd"
      />
    </svg> -->
  </div>
</template>
<script>
export default {
  name: 'ShopHeader',
  data() {
    return {
      title: '',
      showHeader: true
    }
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.back(-1)
    }
  }
}
</script>
