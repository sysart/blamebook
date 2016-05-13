<template>
<div class="view">

  <h1>blamebook</h1>


  <Background class="users-wrapper container">

    <div class="user-wrapper" v-for="(userId, user) in api.users">

      <Bar v-on:click="blame(userId)"
        :value="user.blame"
        :label="user.name"
        :max="maxValue">
      </Bar>


      <button v-on:click="remove(userId)">x</button>

    </div>

  </Background>

  <Background class="container">
      <Adduser></Adduser>
  </Background>
</div>
</template>

<script>

import { api } from './api';

import Adduser from './components/Adduser';
import Bar from './components/Bar';
import Background from './components/Background';

export default {
  components: {
    Adduser,
    Bar,
    Background,
  },

  default: {
    maxValue: 100,
  },

  data() {
    return {
      api,
      testValue: 10,
    };
  },

  methods: {
    blame(userId) {
      this.api.blame(userId);
    },

    remove(userId) {
      console.log(userId);
      this.api.remove(userId);
    },
  },

  computed: {
    maxValue() {
      return Object.keys(this.api.users)
        .reduce((prev, next) => (
           this.api.users[next].blame > prev ? this.api.users[next].blame : prev
        ), 0);
    },
  },
};
</script>

<style>
html {
  font-size: 10pt;
  font-family: helvetica neue;
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

button{
  outline: none;
  background-color: transparent;
  color: #42b983;
  border: 1px solid #42b983;
  cursor: pointer;
}

h1{
  font-weight: 100;
  text-align: center;
  font-size: 70pt;
  color: #42b983;
}

.container{
  width: 700px;
  max-width: 90%;
  justify-content: center;
}

.users-wrapper{
  padding: 32px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.user-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-wrapper, .user-wrapper button{
  transition: 0.2s;
}

.user-wrapper button{
  opacity: 0;
  margin: 8px 0;
  display: block;
  width: 80%;
}

.user-wrapper button:hover{
  border-color: #b94254;
  background-color: #b94254;
  color: white;
}

.user-wrapper:hover{
  background-color: rgba(66, 185, 131, 0.28);
}

.user-wrapper:hover button{
  opacity: 1;
}

.users-wrapper .bar{
  height: 200px;
}

</style>
