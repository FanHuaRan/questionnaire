<template>
  <h1 class="title">诚誉轩</h1>
  <h3 class="description">测一测贷款资质</h3>
  <van-button v-if="this.step !== 0" class="return-btn" round @click="prev"
    >返回</van-button
  >
  <Questions
    v-if="this.step === 1"
    :questionnaireId="this.questionnaireId"
    @change-step="changeStep"
  />
  <Answers
    v-else-if="this.step === 2"
    :questionnaireId="this.questionnaireId"
    :result="this.result"
    @change-step="changeStep"
  />
  <Questionnaire v-else @change-step="changeStep" />
  <footer>Power By XXX</footer>
</template>

<script>
import Questionnaire from "./components/questionnaire/Questionnaire";
import Questions from "./components/questions/Questions";
import Answers from "./components/answers/Answers";

export default {
  name: "App",
  components: {
    Questionnaire,
    Questions,
    Answers
  },
  data() {
    return {
      step: 0,
      questionnaireId: -1,
      result: {}
    };
  },
  methods: {
    changeStep(step, data) {
      if (step === 1) {
        this.questionnaireId = data;
      } else if (step === 2) {
        this.result = data;
      }
      this.step = step;
    },
    prev() {
      this.changeStep(this.step - 1, this.questionnaireId);
    }
  }
};
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
footer {
  position: relative;
  margin-top: 32px;
  padding: 16px 0;
  text-align: center;
}
footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 60%;
  height: 1px;
  transform: translateX(-50%);
  background-color: #ccc;
}
.title,
.description {
  text-align: center;
}
.return-btn {
  position: absolute;
  top: 16px;
  right: 24px;
}
.van-grid-item__content::after {
  border-width: 0;
}
.van-hairline--top::after {
  border-width: 0;
}
</style>
