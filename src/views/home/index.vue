<template>
  <a-layout :style="{ minheight: '100%' }">
    <a-layout-sider breakpoint="lg" collapsed-width="0">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="3">
          <router-link to="/home/main">首页</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/home/about">发帖</router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link to="/home/user">账号</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
  
<script>
import { defineComponent, ref } from "vue";
import { router } from "vue-router";
import { userStore } from "@/store";

export default defineComponent({
  name: "HomeView",
  setup() {
    const onCollapse = (conllapsed, type) => {
      //console.log(conllapsed, type);
    };
    const onBreakpoint = (broken) => {
      //console.log(broken);
    };
    return {
      selectedKeys: ref(["3"]),
      onCollapse,
      onBreakpoint,
    };
  },
  
});
</script>
  
  
<style>

</style>


