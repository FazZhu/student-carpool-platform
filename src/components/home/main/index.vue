<template>
  <a-table :dataSource="tableDetail.dataSource" :columns="tableDetail.columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'destination'">
        {{ record.destination }}
      </template>
      <template v-else-if="column.dataIndex === 'departureTime'">
        {{ record.departureTime }}
      </template>
      <template v-else-if="column.dataIndex === 'members'">
        {{ record.members }}/4
      </template>
      <template v-else-if="column.dataIndex === 'action'">
        <router-link :to="'/commitDetail/' + record.key">查看详情</router-link>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { getCommitments } from '@/utils/api/commit'
import { message } from 'ant-design-vue'
import { reactive, ref } from 'vue';

const tableDetail=reactive({
  columns:[
  {
    title: '目的地',
    dataIndex: 'destination'
  },
  {
    title: '出发时间',
    dataIndex: 'departureTime'
  },
  {
    title: '人数',
    dataIndex: 'members'
  },
  {
    title: '操作',
    dataIndex: 'action',
  },
  
],

dataSource:[]
})
const getData = async () => {
  try {
    const res = await getCommitments()
    
    tableDetail.dataSource = res.data
    // console.log(dataSource);
  } catch (err) {
    message.error(err.message)
  }
}
getData()

</script>

<style>

</style>