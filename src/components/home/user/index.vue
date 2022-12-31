
<script setup>
import { userStore } from '@/store';
import { useRouter } from "vue-router";
import { message } from 'ant-design-vue';

const useUserStore = userStore();
const router = useRouter();

const logoutSubmit = () => {
    try {
        console.log("logout");
        useUserStore.logout()
        router.push('/login');
    } catch (err) {
        message.err(err.message);
    }

}

</script>
<template>
    <div>
        <a-form>
            <a-button @click="logoutSubmit()" html-type="submit">退出登录</a-button>
        </a-form>
        
    </div>
</template>

<style>

</style>