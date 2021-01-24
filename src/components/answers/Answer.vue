<template>
  <div>
    <h2>{{ this.data.bankName }}</h2>
    <p v-for="(item, index) in this.data.policies" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Answer",
  props: {
    data: Object
  }
};
</script>
<style>
p {
  word-break: break-word;
}
</style>
