
<template>
  <div>
  <van-contact-list
  v-model="chosenContactId"
  :list="list"

/>
  <!--default-tag-text="默认" @add="onAdd"
  @edit="onEdit"
  @select="onSelect" -->
  </div>
</template>

<script>
import { Toast, ContactList } from 'vant'

export default {
  name: 'RelativesList',
  components: {
    [ContactList.name]: ContactList
  },
  data() {
    return {
      chosenContactId: '',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000'
          // isDefault: true
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000'
        }
      ]
    }
  },
  methods: {
    onAdd() {
      Toast('新增')
    },
    onEdit(contact) {
      Toast('编辑' + contact.id)
    },
    onSelect(contact) {
      Toast('选择' + contact.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
