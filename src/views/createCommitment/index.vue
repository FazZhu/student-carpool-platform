<template>
    <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }">
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
            <div class="createCommitmentView">
                <a-card title="发起拼车" style="width:350px">
                    <a-form class="createCommitment">
                        <a-form-item label="目的地" :rules="[{ required: true, message: '请输入目的地！' }]">
                            <a-input v-model:value="destination" />
                        </a-form-item>
                        <a-form-item label="联系方式" :rules="[{ required: true, message: '请输入联系方式！' }]">
                            <a-input v-model:value="contact" />
                        </a-form-item>
                        <a-form-item label="出发时间" :rules="[{ required: true, message: '请输入出发时间！' }]">
                            <a-input v-model:value="departureTime"/>
                        </a-form-item>
                        <a-form-item label="备注" :rules="[{ required: false }]">
                            <a-input v-model:value="tips" />
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary" html-type="submit" @click="submit()">发起拼车</a-button>
                        </a-form-item>
                    </a-form>
                </a-card>
                <p></p>
                <router-link to="/"><a-button>返回首页</a-button></router-link>
            </div>
        </a-layout-content>
        <a-layout-footer>
        </a-layout-footer>
    </a-layout>
</template>

<script setup>
import { userStore } from "@/store/modules/user";
import Cookie from "js-cookie";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { message } from 'ant-design-vue';
import { commitmentSubmit } from "@/utils/api/commit";
const router=useRouter();
const useUserStore = userStore();
const commitmentList = reactive({
    initiatorID: Cookie.get('USERID'),
    destination:'',
    departureTime:'',
    tips:'',
    contact:'',
});

const { destination , departureTime, tips, contact,departureDay,}=toRefs(commitmentList)


const submit=async()=>{
    
    try{
        await commitmentSubmit({
            initiatorID:commitmentList.initiatorID,
            destination:commitmentList.destination,
            departureTime:commitmentList.departureTime,
            tips:commitmentList.tips,
            members:[{
                userid:commitmentList.initiatorID,
                contact:commitmentList.contact
            }]
        })
        router.push('/home/main');
    }catch(err)
    {
        message.error(err.message);
    }



}

</script>

<style>
.createCommitmentView {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>