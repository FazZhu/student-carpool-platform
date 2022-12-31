<template>
   <a-table :dataSource="dataSource" :columns="columns" >
    <template #bodyCell="{ column,record }">
      <template v-if="column.dataIndex==='destination'">
        {{ record.destination }}
      </template>
      <template v-else-if="column.dataIndex==='departureTime'">
        {{ record.departureTime }}
      </template>
      <template v-else-if="column.dataIndex==='members'">
        {{ record.members }}/4
      </template>
      <template v-else-if="column.dataIndex==='action'">
        <router-link to="'/commitMent/'+record.key">查看详情</router-link>
      </template>
    </template>
    
   </a-table>
</template>

<script >
export default {
  setup() {
    return {
        columns: [
          {
            title:'目的地',
            dataIndex:'destination'
          },
          {
            title:'出发时间',
            dataIndex:'departureTime'
          },
          {
            title:'人数',
            dataIndex:'members'
          },
          {
            title:'操作',
            dataIndex:'action',
          },
          
        ],
        dataSource:[
          {
            key:'200103340101',
            destination:'广州',
            departureTime:'2023-1-1',
            members:'1',  
          }
        ]
    }
  },

}
</script>

<style>

</style>