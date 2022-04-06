<template>
  <div class="add-page">
    <template v-if="$route.query.type === '血糖'">
      <div class="header">
        <div class="title">控糖目标</div>
        <div class="des">餐后：3.9～7.9mmol/L </div>
      </div>
      <div class="main">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="血糖值"
            label="血糖值"
            placeholder="请输入血糖值"
            :rules="[{ required: true, message: '请填写血糖值' }]"
          />

          <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="检测时段"
            placeholder="请选择所在检测时段"
            @click="show = true"
          />

          <!-- {"words_result":[{"words":"<"},{"words":"血糖记录"},{"words":"控糖目标"},{"words":"餐后：3.9~7.9mmol/L"},{"words":"血糖值"},{"words":"请输入血糖值"},{"words":"mmol/L"},{"words":"检测时段"},{"words":"晚餐后"},{"words":">"},{"words":"检测时间"},{"words":"2022年03月12日20：45"},{"words":">"},{"words":"备注"},{"words":"添加备注（选填）"},{"words":"7"},{"words":"保存"}],"words_result_num":17,"log_id":1502803986113490922} -->

          <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="检测时间"
            placeholder="请选择所在检测时间"
            @click="show1 = true"
          />

          <van-field
            v-model="remark"
            is-link
            name="备注"
            label="备注"
            placeholder="添加备注（选填）"
            :rules="[{ required: false, message: '请填写备注' }]"
            @click="show2 = true"
          />
          <div style="margin: 16px">
            <van-button
color="linear-gradient(to right, #f7919c, #f7919c)"
round
block
typ="info"
native-type="submit"
              >保存</van-button
            >
          </div>
        </van-form>
      </div>
    </template>
    <template v-if="$route.query.type === '血压'">
      <div class="header">
        <div class="title">正常范围</div>
        <div class="des">舒张压：60-80mmHg，收缩压：90～120mmHg，脉搏：60～101次/分钟 </div>
      </div>
      <div class="main">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="收缩压"
            label="收缩压"
            placeholder="请输入收缩压"
            :rules="[{ required: true, message: '请填写收缩压' }]"
          />
          <van-field
            v-model="username"
            name="舒张压"
            label="舒张压"
            placeholder="请输入舒张压"
            :rules="[{ required: true, message: '请填写舒张压' }]"
          />
          <van-field
            v-model="username"
            name="脉搏"
            label="脉搏"
            placeholder="请输入脉搏"
            :rules="[{ required: true, message: '请填写脉搏' }]"
          />

          <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="检测时间"
            placeholder="请选择所在检测时间"
            @click="show1 = true"
          />

          <van-field
            v-model="remark"
            is-link
            name="备注"
            label="备注"
            placeholder="添加备注（选填）"
            :rules="[{ required: false, message: '请填写备注' }]"
            @click="show2 = true"
          />
          <div style="margin: 16px">
            <van-button
color="linear-gradient(to right, #f7919c, #f7919c)"
round
block
typ="info"
native-type="submit"
              >保存</van-button
            >
          </div>
        </van-form>
      </div>
    </template>
    <template v-if="$route.query.type === '血氧'">
      <div class="header">
        <div class="title">正常范围</div>
        <div class="des">血氧：60-80mmHg</div>
      </div>
      <div class="main">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="血氧"
            label="血氧"
            placeholder="请输入血氧"
            :rules="[{ required: true, message: '请填写血氧' }]"
          />

          <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="检测时间"
            placeholder="请选择所在检测时间"
            @click="show1 = true"
          />

          <van-field
            v-model="remark"
            is-link
            name="备注"
            label="备注"
            placeholder="添加备注（选填）"
            :rules="[{ required: false, message: '请填写备注' }]"
            @click="show2 = true"
          />
          <div style="margin: 16px">
            <van-button
color="linear-gradient(to right, #f7919c, #f7919c)"
round
block
typ="info"
native-type="submit"
              >保存</van-button
            >
          </div>
        </van-form>
      </div>
    </template>
    <template v-if="$route.query.type === '胆固醇'">
      <div class="header">
        <div class="title">正常范围</div>
        <div class="des">胆固醇：60-80mmHg</div>
      </div>
      <div class="main">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="胆固醇"
            label="胆固醇"
            placeholder="请输入胆固醇"
            :rules="[{ required: true, message: '请填写胆固醇' }]"
          />

          <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="检测时间"
            placeholder="请选择所在检测时间"
            @click="show1 = true"
          />

          <van-field
            v-model="remark"
            is-link
            name="备注"
            label="备注"
            placeholder="添加备注（选填）"
            :rules="[{ required: false, message: '请填写备注' }]"
            @click="show2 = true"
          />
          <div style="margin: 16px">
            <van-button
color="linear-gradient(to right, #f7919c, #f7919c)"
round
block
typ="info"
native-type="submit"
              >保存</van-button
            >
          </div>
        </van-form>
      </div>
    </template>
     <template v-if="$route.query.type === '甘油三酯'">
      <div class="header">
        <div class="title">正常范围</div>
        <div class="des">甘油三酯：60-80mmHg</div>
      </div>
      <div class="main">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="甘油三酯"
            label="甘油三酯"
            placeholder="请输入甘油三酯"
            :rules="[{ required: true, message: '请填写甘油三酯' }]"
          />

          <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="检测时间"
            placeholder="请选择所在检测时间"
            @click="show1 = true"
          />

          <van-field
            v-model="remark"
            is-link
            name="备注"
            label="备注"
            placeholder="添加备注（选填）"
            :rules="[{ required: false, message: '请填写备注' }]"
            @click="show2 = true"
          />
          <div style="margin: 16px">
            <van-button
color="linear-gradient(to right, #f7919c, #f7919c)"
round
block
typ="info"
native-type="submit"
              >保存</van-button
            >
          </div>
        </van-form>
      </div>
    </template>
     <template v-if="$route.query.type === '尿酸'">
      <div class="header">
        <div class="title">正常范围</div>
        <div class="des">尿酸：60-80mmHg</div>
      </div>
      <div class="main">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="尿酸"
            label="尿酸"
            placeholder="请输入尿酸"
            :rules="[{ required: true, message: '请填写尿酸' }]"
          />

          <van-field
            v-model="fieldValue"
            is-link
            readonly
            label="检测时间"
            placeholder="请选择所在检测时间"
            @click="show1 = true"
          />

          <van-field
            v-model="remark"
            is-link
            name="备注"
            label="备注"
            placeholder="添加备注（选填）"
            :rules="[{ required: false, message: '请填写备注' }]"
            @click="show2 = true"
          />
          <div style="margin: 16px">
            <van-button
color="linear-gradient(to right, #f7919c, #f7919c)"
round
block
typ="info"
native-type="submit"
              >保存</van-button
            >
          </div>
        </van-form>
      </div>
    </template>
    <van-popup v-model="show" round position="bottom">
      <van-picker title="" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
    </van-popup>
    <van-popup v-model="show1" round position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        is-link
        readonly
        type="datetime"
        title="检测时间"
        placeholder="请选择所在检测时间"
        :min-date="minDate"
        :max-date="maxDate"
        @click="show1 = true"
      />
    </van-popup>
    <van-popup v-model="show2" round position="bottom">
      <van-field
        v-model="message"
        rows="2"
        autosize
        label=""
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
    </van-popup>
  </div>
</template>

<script>
import { Field, Form, Picker, DatetimePicker, Popup } from 'vant'

export default {
  name: 'GoodList',
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Picker.name]: Picker,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup
  },

  data() {
    return {
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],

      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2021, 0, 17),
      message: '',
      username: '',
      remark: '',
      constants: {},
      active: 1,
      healthTabList: [
        { title: '血糖' },
        { title: '血压' },
        { title: '血氧' },
        { title: '胆固醇' },
        { title: '甘油三酯' },
        { title: '尿酸' }
        // { title: '血脂' },
        // { title: '运动' },
        // { title: '饮食' },
        // { title: '体重' },
        // { title: '用药' },
      ],
      images: ['https://img01.yzcdn.cn/vant/apple-1.jpg', 'https://img01.yzcdn.cn/vant/apple-2.jpg'],

      show: false,
      show1: false,
      show2: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }]
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }]
        }
      ]
    }
  },
  created() {
    console.log()
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false
      this.fieldValue = selectedOptions.map(option => option.text).join('/')
    },
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    },
    onChange(picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    },
    onCancel() {
      this.$toast('取消')
      this.show = false
    },
    onConfirm1(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    },
    onChange1(picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`)
    },
    onCancel1() {
      this.$toast('取消')
      this.show1 = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
