
<template>
  <div class="page">
    <div class="header">
      <div class="input-box">
        <van-field v-model="value" label="" placeholder="请输入亲友手机号码">
          <template #button>
            <van-button type="danger" size="small">确认</van-button>
          </template>
        </van-field>
      </div>
      <van-button plain type="danger" class="scan" block>点击扫描亲友二维码</van-button>
    </div>

    <div class="main">
      <img src="../images/img_0.png" />
      <div class="text">扫一扫上面的二维码，加我为亲友</div>
    </div>
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
.page {
  background-color: #fafbfb;
  height: 100vh;
  width: 100%;
}
.header {
  padding: 0.37rem;
  background-color: #fff;
}
.scan {
  margin-top: 1rem;
}
.main {
  margin: 0.2rem 0.37rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
  }
  .text {
    font-size: 16px;
    margin-top: 0.4rem;
  }
}
</style>
