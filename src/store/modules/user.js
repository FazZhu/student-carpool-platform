import { defineStore } from "pinia";
import { store } from "@/store";
import { systemLogin,systemLogout,systemUserDetail } from "@/utils/api/system";

const InitUserInfo = {
    userId: "",
};

export const userStore = defineStore('users', {
    state: () => ({
        userDetail: InitUserInfo,
    }),
    getters: {
        userId: state => state.userDetail.userId,
        hasLogin: state => state.userDetail.hasLogin,
    },
    actions: {
        async login(userInfo) {    
            const res = await systemLogin(userInfo);           
            if (res.code === 0) {
                this.userDetail = res.data;
            } else {
                throw new Error(res.msg)
            }
        },
        async logout() {
            this.userDetail = InitUserInfo
            const res = await systemLogout();
            if (res.code !== 0) {
                throw new Error(res.msg)
            }
        },
        async getUserDetail() {
            const res = await systemUserDetail()
            if (res.code === 0) {
                this.userDetail = res.data
            } else {
                throw new Error(res.msg)
            }
        }
    }
})

export function getUserStore() {
    return userStore(store);
}