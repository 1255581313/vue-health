<template>
  <div>
    <p class="title">你的糖尿病类型</p>
    <van-form>
      <van-field name="radio" label="">
        <template #input>
          <van-radio-group v-model="radio">
            <van-radio name="1">1 型</van-radio>
            <van-radio name="2">2 型</van-radio>
            <van-radio name="3">壬辰型</van-radio>
            <van-radio name="4">特殊类型</van-radio>
            <van-radio name="5">糖前期</van-radio>
            <van-radio name="6">健康</van-radio>
            <van-radio name="7">其他</van-radio>
          </van-radio-group>
        </template>
      </van-field>

          <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="birth"
        label="确诊时间"
        placeholder="点击选择确诊时间"
        @click="showPicker = true"
      />
<van-popup v-model="showPicker" position="bottom">
  <van-datetime-picker
      v-model="currentDate"
  type="year-month"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
   @cancel="showPicker = false"
@confirm="onConfirm"
  />
</van-popup>

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
      showPicker: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    }
  },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  padding: 0 0.37rem;
  padding-top: 0.4rem;
  font-size: 16px
}
/deep/ .van-radio{
      margin-top: 0.3rem;
}
</style>
