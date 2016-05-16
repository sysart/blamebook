<template>
  <div class="add-user">
    <input type="text" v-model="name">
    <div class="spacer"></div>
    <Button opaque round v-on:click="add(name)">+</Button>
  </div>
</template>
<script>

import { api } from '../api';
import Button from './Button';

export default {

  components: {
    Button,
  },

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

}

button{
  width: 64px;
  height: 64px;
}

.spacer{
  width: 16px;
}
</style>
