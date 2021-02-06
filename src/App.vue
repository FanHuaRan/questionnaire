<template>
  <Login v-if="this.step === 0" @change-step="changeStep" />
  <div v-else class="questionnaire-wrapper">
    <h1 class="title">诚誉轩</h1>
    <h3 class="description">测一测贷款资质</h3>
    <van-button v-if="this.step > 1" class="return-btn" round @click="prev"
      >返回</van-button
    >
    <Questionnaire v-if="this.step === 1" @change-step="changeStep" />
    <Questions
      v-if="this.step === 2"
      :questionnaireId="this.questionnaireId"
      @change-step="changeStep"
    />
    <Answers
      v-else-if="this.step === 3"
      :questionnaireId="this.questionnaireId"
      :result="this.result"
      @change-step="changeStep"
    />
    <footer>Power By chengyuxuan</footer>
  </div>
</template>

<script>
import Login from "./components/login/Login";
import Questionnaire from "./components/questionnaire/Questionnaire";
import Questions from "./components/questions/Questions";
import Answers from "./components/answers/Answers";

export default {
  name: "App",
  components: {
    Login,
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
      if (step === 2) {
        this.questionnaireId = data;
      } else if (step === 3) {
        this.result = data;
      } else {
        this.questionnaireId = -1;
        this.result = {};
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
  max-width: 100%;
  height: 100%;
}
.questionnaire-wrapper {
  max-width: 1200px;
  height: 100%;
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
