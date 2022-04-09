<template>
  <div>
    <van-form>
      <!-- 通过 pattern 进行正则校验 -->
      <van-field v-model="name" name="姓名" label="姓名" placeholder="姓名" :rules="[{ message: '请填写姓名' }]" />
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="birth"
        label="出生日期"
        placeholder="点击选择出生日期"
        @click="showPicker = true"
      />
      <van-calendar v-model="showPicker" @cancel="showPicker = false" @confirm="onConfirm" />
      <div style="margin: 16px">
        <van-button round block type="danger" native-type="submit">保存</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Button, Field, RadioGroup, Radio, Popup, DatetimePicker, Calendar } from 'vant'

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
    [Calendar.name]: Calendar
  },

  data() {
    return {
      name: '',
      sex: '',
      birth: '',
      showPicker: false
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
