<template>
  <van-skeleton title :row="10" :loading="this.isRequestion">
    <van-form v-if="!this.error" @submit="commit" scroll-to-error ref="form">
      <customer-info
        :customerName="state.customerName"
        :customerPhone="state.customerPhone"
      />

      <question
        v-for="questionnaire in this.questionnaire.questions"
        :key="questionnaire.seq"
        :questionData="questionnaire"
        :questionAnswer="
          state.questionAnswers.find(
            answer => answer.questionSeq === questionnaire.seq
          )
        "
      />
      <van-button
        round
        type="primary"
        native-type="submit"
        class="submit-btn"
        loading-text="提交中..."
        :loading="this.isCommitting"
      >
        提交
      </van-button>
    </van-form>
    <van-empty v-else :description="this.error.detail" />
  </van-skeleton>
</template>
<script>
import { reactive } from "vue";
import Util from "../../utils/Util";
import CustomerInfo from "./CustomerInfo";
import Question from "./Question";

export default {
  name: "Questions",
  components: {
    Question,
    CustomerInfo
  },
  props: {
    questionnaireId: Number
  },
  data() {
    return {
      error: null,
      isRequestion: true,
      isCommitting: false,
      questionnaire: {
        questions: []
      }
    };
  },
  methods: {
    commit(values) {
      this.isCommitting = true;
      const { customerName, customerPhone, ...restValues } = values;
      const questionAnswers = Object.entries(restValues).map(
        ([questionSeq, answerSeq]) => ({
          questionSeq,
          answerSeq
        })
      );
      const answers = {
        customerName,
        customerPhone,
        questionAnswers
      };
      Util.commit({ ...answers, questionnaireId: this.questionnaireId })
        .then(data => {
          this.$emit("change-step", 2, data);
        })
        .catch(error => {
          this.$toast({
            message: error ? error.detail || "系统异常" : "系统异常",
            position: "bottom"
          });
        })
        .finally(() => {
          this.isCommitting = false;
        });
    }
  },
  setup() {
    const state = reactive({
      customerName: "",
      customerPhone: "",
      questionAnswers: []
    });

    return {
      state
    };
  },
  created() {
    Util.getQuestions(this.questionnaireId)
      .then(result => {
        this.questionnaire = result;
      })
      .catch(error => {
        this.error = error;
      })
      .finally(() => {
        this.isRequestion = false;
      });
  }
};
</script>
<style>
.submit-btn {
  width: 200px;
  margin-top: 24px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
