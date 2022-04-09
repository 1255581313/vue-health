
<template>
  <div>
    <van-cell title="新亲友" is-link to="/dist-user/relatives/list">
      <template #icon>
        <van-icon name="search" class="search-icon" />
      </template>
    </van-cell>
    <van-cell title="添加亲友" is-link to="/dist-user/relatives/add">
      <template #icon>
        <van-icon name="search" class="search-icon" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { Form, Button, Field, RadioGroup, Radio, Popup, DatetimePicker, Cell } from 'vant'

export default {
  name: 'LinkBase',

  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Popup.name]: Popup,
    [DatetimePicker.name]: DatetimePicker,
    [Cell.name]: Cell
  },

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.van-icon {
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  margin-right: 10px;
}
</style>
