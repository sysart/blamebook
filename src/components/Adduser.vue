<template>
  <div class="add-user">
    <input type="text" v-model="name">
    <div class="spacer"></div>
    <button v-on:click="add(name)">+</button>
  </div>
</template>
<script>

import { api } from '../api';

export default {
  data() {
    return {
      name: '',
    };
  },

  methods: {
    add() {
      api.save(this.name);
      this.name = '';
    },
  },
};
</script>
<style scoped>
.add-user{
  display: flex;
  flex-direction: row;
  align-items: center;
}

input{
  background-color: transparent;
  outline: none;
  border: none;
  color: #42b983;
  border-bottom: 2px solid #42b983;
  padding: 8px;

  flex: 1;
}

button{
  width: 64px;
  height: 64px;
  outline: none;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 50%;
}

.spacer{
  width: 16px;
}
</style>
