
<script setup>
import { userStore } from "@/store/modules/user";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { message } from 'ant-design-vue';

const router = useRouter();
const useUserStore = userStore();
const loginList = reactive({
  userID: '',
  password: ''
});

const { userID, password } = toRefs(loginList);

const loginSubmit = async () => {
  try {
    await useUserStore.login({
      userID: loginList.userID,
      password: loginList.password,
    });
    router.push('/home/main');
  } catch (err) {
    if(err.message=="loginPage.noUser"){
      message.error("输入的账号或密码有误");
    }else if(err.message=="loginPage.empty"){
      message.error("输入不能为空");
    }else{
      message.error(err.message);
    }
  }
};
</script>
<template>
  <a-layout>
    <a-layout-header :style="{ background: '#fff', padding: 0 }">
    </a-layout-header>
    <a-layout-content :style="{ margin: '24px 16px 0' }">
      <div class="loginView">
        <a-card title="登录" style="width:350px">
          <a-form class="loginForm">
            <a-form-item label="账号" :rules="[{ required: true, message: '请输入账号！' }]">
              <a-input v-model:value="userID" />
            </a-form-item>
            <a-form-item label="密码" :rules="[{ required: true, message: '请输入密码！' }]">
              <a-input-password v-model:value="password" />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" @click="loginSubmit">登录</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </div>
    </a-layout-content>
    <a-layout-footer>
    </a-layout-footer>
  </a-layout>
</template>

<style>
.loginView {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>