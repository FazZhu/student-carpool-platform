import { createApp } from 'vue'

import App from './App.vue'
const app=createApp(App)

import { store } from './store'
app.use(store)

import router from './router'
app.use(router)

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
app.use(Antd)
app.mount('#app')

