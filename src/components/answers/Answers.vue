<template>
  <h3>测试结果</h3>
  <div v-if="this.notEmpty">
    <p>{{ bankNames }}</p>
    <answer
      v-for="item in this.result.matchBanks"
      :key="item.bankId"
      :data="item"
    />
  </div>
  <van-empty v-else :description="this.bankNames" />
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
    notEmpty() {
      return this.result.matchBanks && this.result.matchBanks.length > 0;
    },
    bankNames() {
      return this.notEmpty
        ? `能满足条件的银行有${this.result.matchBanks
            .map(matchBank => matchBank.bankName)
            .join("、")}`
        : "暂无满足条件的银行";
    }
  }
};
</script>
<style></style>
