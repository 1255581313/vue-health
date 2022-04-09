
<template>
  <div>
    <div class="info">
      <div class="name">123456</div>
      <div class="sex">女</div>
    </div>
    <van-cell-group inset>
      <van-cell title="手机号" value="" label="16599938668" />
      <van-cell title="姓名/性别/出生日期" value="" label="1111/女/2022年03月11日" is-link to="/dist-user/healthRecords/base" />
      <van-cell title="居住地址" value="" label="广东-广州-白云区" is-link to="/dist-user/healthRecords/address"/>
      <van-cell title="身体指标" value="" label="身高111.0cm/体重111.0kg/BMI90.09" is-link to="/dist-user/healthRecords/size"/>
      <van-cell title="糖尿病类型" value="" label="待完善" is-link to="/dist-user/healthRecords/type"/>
      <van-cell title="血糖管理情况" value="" label="每周血糖次数" is-link to="/dist-user/healthRecords/manage"/>
    </van-cell-group>

  </div>
</template>

<script>
import { CellGroup, Cell } from 'vant'

export default {
  name: 'HealthRecords',

  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },
  data() {
    return {
    }
  }

}
</script>
<style lang="scss" scoped>
.info{
  padding: 0.8rem 0.37rem;
  .name{
    font-size: 18px;

  }
  .sex{
    font-size: 12px;
    margin-top: 0.4rem;
  }

}
</style>
