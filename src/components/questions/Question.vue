<template>
  <van-field
    :name="'' + this.questionData.seq"
    :border="false"
    :rules="[{ required: true }]"
  >
    <template #input>
      <p>{{ `${this.questionData.seq}. ${this.questionData.questionDesc}` }}</p>
      <van-radio-group v-model="checked" direction="horizontal">
        <van-grid :column-num="1" :center="false">
          <van-grid-item
            v-for="item in this.questionData.questionOptions"
            :key="item.optionSeq"
            :border="false"
          >
            <van-radio :name="item.optionSeq">
              {{ item.optionDesc }}
            </van-radio>
          </van-grid-item>
        </van-grid>
      </van-radio-group>
    </template>
  </van-field>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Question",
  props: {
    questionData: Object
  },
  setup() {
    const checked = ref(null);
    return {
      checked
    };
  }
};
</script>
<style>
.van-field__control--custom {
  flex-direction: column;
  align-items: flex-start;
}
.van-grid-item__content {
  padding: 0px 8px;
  background-color: transparent;
}
</style>
