<template>
  <div>
    <van-form>
  <van-field
  readonly
  clickable
  name="area"
  :value="value"
  label="地区选择"
  placeholder="点击选择省市区"
  @click="showArea = true"
/>
<van-popup v-model="showArea" position="bottom">
  <van-area
    :area-list="areaList"
    @confirm="onConfirm"
    @cancel="showArea = false"
  />
</van-popup>

      <div style="margin: 16px">
        <van-button round block type="danger" native-type="submit">保存</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Button, Field, RadioGroup, Radio, Popup, DatetimePicker, Calendar, Area } from 'vant'
import { areaList } from '@vant/area-data'

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
    [Area.name]: Area
  },

  data() {
    return {
      value: '',
      showArea: false,
      areaList: areaList // 数据格式见 Area 组件文档
    }
  },
  methods: {
    onConfirm(values) {
      this.value = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
      this.showArea = false
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
