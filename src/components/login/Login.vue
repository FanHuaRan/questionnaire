<template>
  <div class="login-wrapper">
    <van-form @submit="onSubmit" class="login-content">
      <h1 class="title">诚誉轩</h1>
      <van-field
        v-model="state.username"
        name="username"
        placeholder="用户名"
        left-icon="contact"
        :rules="[{ required: true, message: '请填写用户名' }]"
        @focus="hideError"
      >
        <template v-slot:left-icon>
          <van-icon class-prefix="qn-icons" name="user" />
        </template>
      </van-field>
      <van-field
        v-model="state.password"
        :type="isPwdShow ? 'text' : 'password'"
        name="password"
        placeholder="密码"
        :right-icon="isPwdShow ? 'eye-o' : 'closed-eye'"
        :rules="[{ required: true, message: '请填写密码' }]"
        @click-right-icon="changePwdVisibility"
        @focus="hideError"
      >
        <template v-slot:left-icon>
          <van-icon class-prefix="qn-icons" name="lock" />
        </template>
      </van-field>
      <p v-show="this.isError" class="login-error">用户名或者密码错误</p>
      <div style="margin: 38px 16px">
        <van-button
          class="submit-button"
          block
          type="primary"
          size="small"
          native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { reactive } from "vue";
import Util from "../../utils/Util";

export default {
  name: "Login",
  emits: ["change-step"],
  setup() {
    const state = reactive({
      username: "",
      password: ""
    });
    return {
      state
    };
  },
  data() {
    return {
      isPwdShow: false,
      isError: false
    };
  },
  methods: {
    changePwdVisibility() {
      this.isPwdShow = !this.isPwdShow;
    },
    hideError() {
      this.isError = false;
    },
    onSubmit(values) {
      Util.login(values)
        .then(() => {
          this.$emit("change-step", 1);
          this.isError = false;
        })
        .catch(() => {
          this.isError = true;
        });
    }
  }
};
</script>
<style>
.login-wrapper {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.login-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 48px);
  max-width: 450px;
}
.login-content .van-cell {
  background-color: transparent;
}
.login-content .van-field__control {
  color: rgba(255, 255, 255, 0.85);
}
.login-content .van-field__left-icon {
  color: rgba(255, 255, 255, 0.85);
}
.login-content .title {
  text-align: center;
  color: #fff;
}
.login-error {
  position: absolute;
  color: red;
  padding: 0 16px;
  font-size: 12px;
}
.submit-button {
  border-radius: 4px;
}
</style>
