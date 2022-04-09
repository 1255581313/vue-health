<template>
  <div>
    <van-form>
      <van-field v-model="name" name="身高" label="身高" placeholder="身高"  />
      <van-field v-model="name" name="体重" label="体重" placeholder="体重"  />
      <van-field v-model="name" name="腰围" label="腰围" placeholder="腰围"  />
      <van-field v-model="name" name="BMI" label="BMI" placeholder="BMI"  />
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
