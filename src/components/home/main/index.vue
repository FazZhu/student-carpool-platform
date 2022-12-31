<template>
  <a-table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === '目的地'">
        <span>
          目的地
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'destination'">

        {{ record.destination }}
      </template>
      <template v-else-if="column.key === 'number'">
        {{ record.number }}
      </template>
      <template v-else-if="column.key === 'action'" :> 
        <router-link to="'/commitMent/'+"><a-button></a-button></router-link>
      </template>
    </template>
  </a-table>
</template>

<script >
export default {
  setup() {
    return {
      dataSource: [
        {
          
        }
      ],
      columns: [
        {
          title: '目的地',
          dataIndex: 'destination',
          key: 'destination',
        },
        {
          title: '人数',
          dataIndex: 'number',
          key: 'number',
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
        },
      ],
    };
  },
};
</script>

<style>

</style>