<template>
  <div class="page">
    <van-form>
    <p class="title">每周测血糖次数</p>
      <van-field name="radio" label="">
        <template #input>
          <van-radio-group v-model="radio">
            <van-radio name="1">0次</van-radio>
            <van-radio name="2">少于5次</van-radio>
            <van-radio name="3">5到10次</van-radio>
            <van-radio name="4">11到14次</van-radio>
            <van-radio name="5">14次以上</van-radio>
          </van-radio-group>
        </template>
      </van-field>
    <p class="title">治疗方式</p>

      <van-field name="checkboxGroup" label="">
  <template #input>
    <van-checkbox-group v-model="checkboxGroup" >
      <van-checkbox name="1" shape="square">饮食治疗</van-checkbox>
      <van-checkbox name="2" shape="square">运动治疗</van-checkbox>
      <van-checkbox name="2" shape="square">口服降糖药</van-checkbox>
      <van-checkbox name="2" shape="square">注射胰岛素</van-checkbox>
      <van-checkbox name="2" shape="square">中药</van-checkbox>
      <van-checkbox name="2" shape="square">保健品</van-checkbox>
      <van-checkbox name="2" shape="square">无</van-checkbox>
      <van-checkbox name="2" shape="square">其他</van-checkbox>
    </van-checkbox-group>
  </template>
</van-field>

      <div style="margin: 16px">
        <van-button round block type="danger" native-type="submit">保存</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Button, Field, RadioGroup, Radio, Popup, DatetimePicker, Calendar, CheckboxGroup, Checkbox } from 'vant'

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
    [Calendar.name]: Calendar,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox
  },

  data() {
    return {
      name: '',
      sex: '',
      birth: '',
      showPicker: false,
      checkbox: false,
      checkboxGroup: []
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.page{
  overflow: scroll;
  height: 100%;
}
.title{
  padding: 0 0.37rem;
  padding-top: 0.4rem;
  font-size: 16px
}
/deep/ .van-radio,/deep/ .van-checkbox{
      margin-top: 0.3rem;
}
</style>
