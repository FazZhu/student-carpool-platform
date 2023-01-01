<template>
    <div>
        <div v-if="hasCommitment()">
            <h1>你现在还没拼车约定</h1>
            <router-link to='/home/main'><a-button>去广场看看</a-button></router-link> or <router-link to="/createCommitment"><a-button>发起拼车</a-button></router-link>
        </div>
        <div v-if="!hasCommitment()">
            <router-link :to="'/commitDetail/'+userCommitment.commitment"><a-button>查看我的拼车约定</a-button></router-link>
            
        </div>
    </div>
</template>

<script setup>
import { systemUserDetail } from "@/utils/api/system";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userCommitment=reactive({
    commitment:'-1'
})
const user = async () => {
    const res = await systemUserDetail()
    console.log(res.data.commitment);
    userCommitment.commitment = res.data.commitment;
    console.log(userCommitment.commitment);
}
user()
const hasCommitment=()=>{
    if(userCommitment.commitment=="-1"){
        return true
    }
    else{
        return false
    }
}



</script>

<style>

</style>