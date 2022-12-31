<template>
    <div>
        <div v-if="hasCommitment()">
            <h1>你现在还没拼车约定</h1>
            <router-link to='/home/main'><a-button>去广场看看</a-button></router-link> or <router-link to="/createCommitment"><a-button>发起拼车</a-button></router-link>
        </div>
        <div v-if="!hasCommitment()">
            有拼车约定
        </div>
    </div>
</template>

<script setup>
import { systemUserDetail } from "@/utils/api/system";
import { ref } from "vue";
const commitment = ref(null)
const user = async () => {
    const res = await systemUserDetail()
    console.log(res.data.commitment);
    commitment = res.data.commitment
}
user()
const hasCommitment=()=>{
    if(commitment=="-1"){
        return false
    }
    return true
}



</script>

<style>

</style>