<template>
  <div class="add-user">
    <input-container label="name">
      <input type="text" v-model="name" @keyup.enter="add()">
    </input-container>
    <div class="spacer"></div>
    <Button opaque round v-on:click="add(name)">+</Button>
  </div>
</template>
<script>

import { api } from '../api';
import Button from './Button';
import InputContainer from './InputContainer';

export default {

  components: {
    Button,
    InputContainer,
  },

  data() {
    return {
      name: '',
    };
  },

  methods: {
    add() {
      if (!!this.name) {
        api.save(this.name);
        this.name = '';
      }
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

.input-container{
  flex: 1;
}

button{
  width: 64px;
  height: 64px;
}

.spacer{
  width: 16px;
}
</style>
