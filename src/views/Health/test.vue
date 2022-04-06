<template>
  <div>接口</div>
</template>

<script>
import { getPagedList } from '@/api/health/api'
export default {

  data() {
    return {
      list: []
    }
  },
  created() {
    this.getPagedList()
  },
  methods: {
    getPagedList() {
      const params = {
        'endTime': '',
        'filters': {},
        'imei': '',
        'maxResultCount': 0,
        'organizationId': '',
        'searchKey': '',
        'skipCount': 0,
        'sortDirection': '',
        'sorting': '',
        'sortingFiled': '',
        'startTime': '',
        'userId': ''
      }
      getPagedList(params).then(res => {
        console.log(res)
      })
    }
  }

}
</script>

