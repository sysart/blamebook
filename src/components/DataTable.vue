<template>
<table class="data-table">
  <tr>
    <th v-for="column in options.columns">{{ column.label }}</th>
  </tr>

  <tr v-for="row in data">
    <td
      v-for="column in options.columns"
      class="{{ column.classNames ? column.classNames : '' }}">
      {{ column.filter ? column.filter(row[column.key]) : row[column.key] }}
    </td>
  </tr>
</table>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: {},
    },
    data: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
.data-table{
  color: rgb(66, 185, 131);
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
}

td, th{
  text-align: left;
  padding: 16px;
}

th{
  border-bottom: 1px solid rgba(66, 185, 131,0.2);
}

tr:not(:last-child) {
  border-bottom: 1px solid rgba(66, 185, 131,0.2);
}

td:not(:last-child){
  border-right: 1px solid rgba(66, 185, 131,0.2);
}

td.thin{
  width: 1%;
  white-space: nowrap;
}

tr:nth-child(even){
  background-color: rgba(66, 185, 131,0.1);
}

</style>
