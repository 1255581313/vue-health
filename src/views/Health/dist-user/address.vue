<template>
  <div>
    <van-address-list v-model="chosenAddressId" :list="addressList" default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="onSelect"/>

  </div>
</template>

<script>
import { addressList, addressDetail, addressSave, addressDelete } from '@/api/health/api'
import { AddressList, NavBar } from 'vant'
import { setLocalStorage } from '@/utils/local-storage'

export default {

  components: {
    [NavBar.name]: NavBar,
    [AddressList.name]: AddressList
  },
  data() {
    return {
      chosenAddressId: '',
      addressList: []
    }
  },

  created() {
    this.loadAddress()
  },
  methods: {
    onAdd() {
      this.$router.push({ name: 'address-edit', query: { addressId: -1 }})
    },
    onEdit(item, index) {
      this.$router.push({ name: 'address-edit', query: { addressId: item.id }})
    },
    onSelect(item, index) {
      setLocalStorage({ AddressId: item.id })
    },
    goback() {
      this.$router.go(-1)
    },
    loadAddress() {
      const query = {
        userId: '73cdcf1c485c4416ab7741f3a23caf5b'
      }
      addressList(query).then(res => {
        var list = res.data
        for (var i = 0; i < list.length; i++) {
          var item = list[i]
          if(item.defaultAddress == 1){
            this.addressList.push({
              id: item.id,
              name: item.consignee,
              tel: item.mobile,
              address: item.province + item.city + item.county + ' ' + item.address,
              isDefault: true
            })
          }else{
            this.addressList.push({
              id: item.id,
              name: item.consignee,
              tel: item.mobile,
              address: item.province + item.city + item.county + ' ' + item.address
            })
          }

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.addressGroup {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}

.bottom_btn {
  position: fixed;
  bottom: 0;
}

.van-address-list__bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    box-sizing: border-box;
    width: 100%;
    padding: 0 16px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #fff;
}
</style>
