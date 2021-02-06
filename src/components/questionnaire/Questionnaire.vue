<template>
  <van-loading v-if="this.isRequesting" class="requesting" size="24px" vertical>
    加载中...
  </van-loading>
  <van-grid
    v-else-if="this.questionnaires && this.questionnaires.length"
    :column-num="3"
    icon-size="128"
    clickable
    class="questionnaires"
  >
    <van-grid-item
      v-for="item in this.questionnaires"
      :key="item.id"
      :border="false"
      :text="item.name"
      icon="./images/questionnaire.svg"
      @click="handleClick(item.id)"
    />
  </van-grid>
  <van-empty v-else description="暂无问卷" />
</template>
<script>
import Util from "../../utils/Util";

export default {
  name: "Questionnaire",
  emits: ["change-step"],
  data() {
    return {
      isRequesting: true,
      questionnaires: []
    };
  },
  methods: {
    handleClick(id) {
      this.$emit("change-step", 2, id);
    }
  },
  created() {
    Util.getQuestionnaires()
      .then(result => {
        this.questionnaires = result;
        this.isRequesting = false;
      })
      .catch(error => {
        if ([40001, 40005].includes(error.code)) {
          this.$toast({
            message: "登录失效",
            position: "bottom"
          });
          this.$emit("change-step", 0);
        } else {
          this.$toast({
            message: error ? error.detail || "系统异常" : "系统异常",
            position: "bottom"
          });
          this.isRequesting = false;
        }
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
.requesting {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
