<template> 
  <div>
    <div v-if="!hasLogin()">
      <h1>请先登录！</h1>
      <router-link to="/login" ><a-button>点我跳转</a-button></router-link>
  </div>
  <div v-if="hasLogin()">
      首页
  </div>
  </div>
</template>

<script>
import { userStore } from '@/store';
import Cookies from 'js-cookie';
export default {

  methods:{
      hasLogin(){
            const isLogin=Cookies.get('HAS_LOGIN');
            if(isLogin){
                return true
            }
            return false
          //const isLogin=document.cookie.
        //   if(){
        //       return false
        //   }
        //   return true 
      }
  }

}
</script>

<style>

</style>