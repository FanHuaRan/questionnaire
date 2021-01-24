<template>
  <van-grid :column-num="3" icon-size="128" clickable class="questionnaires">
    <van-grid-item
      v-for="item in this.questionnaires"
      :key="item.id"
      :border="false"
      :text="item.name"
      icon="./images/questionnaire.svg"
      @click="handleClick(item.id)"
    />
  </van-grid>
</template>
<script>
import Util from "../../utils/Util";

export default {
  name: "Questionnaire",
  data() {
    return {
      questionnaires: []
    };
  },
  methods: {
    handleClick(id) {
      this.$emit("change-step", 1, id);
    }
  },
  created() {
    Util.getQuestionnaires()
      .then(result => {
        this.questionnaires = result;
      })
      .catch(error => {
        this.$toast({
          message: error ? error.detail || "系统异常" : "系统异常",
          position: "bottom"
        });
      });
  }
};
</script>
<style>
.van-grid-item {
  margin: 16px 0;
}
@media screen and (max-width: 576px) {
  .questionnaires .van-icon {
    font-size: 64px !important;
  }
}
</style>
