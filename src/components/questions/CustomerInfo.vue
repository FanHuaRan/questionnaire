<template>
  <van-field
    name="customerName"
    v-model="state.name"
    label="姓名"
    :rules="[{ required: true, message: '请填写姓名' }]"
  />
  <van-field
    name="customerPhone"
    v-model="state.tel"
    type="tel"
    label="手机号"
    :rules="[{ required: true, message: '请填写手机号' }]"
  />
</template>
<script>
import { reactive } from "vue";

export default {
  name: "CustomerInfo",
  props: {
    customerName: String,
    customerPhone: String
  },
  setup(props) {
    const state = reactive({
      name: props.customerName,
      tel: props.customerPhone
    });

    return { state };
  }
};
</script>
<style></style>
