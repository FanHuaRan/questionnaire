<template>
  <h3>测试结果</h3>
  <p>{{ bankNames }}</p>
  <answer
    v-for="item in this.result.matchBanks"
    :key="item.bankId"
    :data="item"
  />
</template>
<script>
import Answer from "./Answer";
export default {
  name: "Answers",
  components: {
    Answer
  },
  props: {
    questionnaireId: Number,
    result: Object
  },
  computed: {
    bankNames() {
      return `能满足条件的银行有${this.result.matchBanks
        .map(matchBank => matchBank.bankName)
        .join("、")}`;
    }
  }
};
</script>
<style></style>
