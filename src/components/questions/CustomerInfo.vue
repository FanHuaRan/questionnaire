<template>
  <div
    v-if="
      configHeaders === null ||
        configHeaders === undefined ||
        configHeaders.length === 0
    "
  >
    <van-field name="customerName" v-model="state.name" label="姓名" />
    <van-field
      name="customerAge"
      v-model="state.age"
      type="digit"
      label="年龄"
      :rules="[{ pattern: /^(\s*|\d+)$/, message: '年龄格式错误' }]"
    />
    <van-field
      name="customerPhone"
      v-model="state.tel"
      type="tel"
      label="手机号"
      required
      :rules="[{ pattern: /1[3-9]\d{9}/, message: '手机号格式错误' }]"
    />
  </div>

  <div
    v-if="
      configHeaders !== null &&
        configHeaders !== undefined &&
        configHeaders.length > 0
    "
  >
    <van-field
      v-for="configHeader in configHeaders"
      v-model="configHeader.value"
      :key="configHeader.name"
      :label="configHeader.name"
    />
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  name: "CustomerInfo",
  props: {
    configHeaders: Array,
    customerName: String,
    customerAge: [String, Number],
    customerPhone: String
  },
  setup(props) {
    const state = reactive({
      name: props.customerName,
      age: props.customerAge,
      tel: props.customerPhone
    });

    return { state };
  }
};
</script>
<style></style>
