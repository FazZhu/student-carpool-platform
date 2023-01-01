
<script setup>

import { reactive } from '@vue/reactivity';
import { useRoute,useRouter } from 'vue-router';
import { getCommitmentData,joinCommitment,quitCommitment } from '@/utils/api/commit';
import Cookies from 'js-cookie'
const route = useRoute();
const router = useRouter();
// const commitDetail = {
//     initiatorID: "200103340101",
//     destination: "广州",
//     departureTime: "2023-1-1-07:30",
//     tips: 'tips',
//     members: [{
//         userid: '200103340101',
//         contact: '13788888888'
//     }]
// }
const commitDetail=reactive({
    commitmentid:"",
    initiatorID: "",
    destination: "",
    departureTime: "",
    tips: '',
    members: []
})

const columns = [
    {
        title: '成员',
        dataIndex: 'userid'
    },
    {
        title: '联系方式',
        dataIndex: 'contact'
    },
]
commitDetail.commitmentid=route.params.id
const getCommitDetail=async ()=>{
    const res = await getCommitmentData({commitmentid:commitDetail.commitmentid});
    console.log(res.data)
    commitDetail.destination=res.data.destination;
    commitDetail.departureTime=res.data.departureTime;
    commitDetail.tips=res.data.tips;
    commitDetail.members=res.data.members;
}
getCommitDetail()

const isMember=()=>{
    return commitDetail.members.find(m=>m.userid==Cookies.get('USERID'))
}
const submitList=reactive({
    userid:'',
    commitmentid:'',
    contact:'',
})
const joinThisCommitment=async ()=>{
    submitList.userid= Cookies.get('USERID')
    submitList.commitmentid=commitDetail.commitmentid
    await joinCommitment({
        userid:submitList.userid,
        commitmentid:submitList.commitmentid,
        contact:submitList.contact,
    });
    router.push('/home/main')
}
const quitThisCommitment=async ()=>{
    submitList.userid= Cookies.get('USERID')
    submitList.commitmentid=commitDetail.commitmentid
    await quitCommitment({
        userid:submitList.userid,
        commitmentid:submitList.commitmentid,
    });
    router.push('/home/main')
}

</script>

<template>
    <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }">
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
            <div class="View">
                <a-card title="拼车约定" style="width:350px">
                    <a-space direction="vertical">
                        <a-space>
                            <p>发起者：</p>
                            <p>{{ commitDetail.initiatorID }}</p>
                        </a-space>
                        <a-space>
                            <p>目的地：</p>
                            <p>{{ commitDetail.destination }}</p>
                        </a-space>
                        <a-space>
                            <p>出发时间：</p>
                            <p>{{ commitDetail.departureTime }}</p>
                        </a-space>
                        <a-space>
                            <p>Tips：</p>
                            <p>{{ commitDetail.tips }}</p>
                        </a-space>
                        <a-space>
                            <p>当前人数：</p>
                            <p>{{ commitDetail.members.length }}/4</p>
                        </a-space>
                        <a-table :columns="columns" :dataSource="commitDetail.members" />
                        
                        <a-space>
                            <a-input v-if="!isMember()" placeholder="你的联系方式" v-model:value="submitList.contact"/>
                        <a-button v-if="!isMember()" @click="joinThisCommitment()">加入他们</a-button>
                        </a-space>
                        
                        <a-button v-if="isMember()" @click="quitThisCommitment()">结束约定</a-button>
                    </a-space>
                </a-card>
                <p></p>
                <router-link to="/"><a-button>返回首页</a-button></router-link>
            </div>
        </a-layout-content>
        <a-layout-footer>
        </a-layout-footer>
    </a-layout>
</template>

<style>
.View {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>