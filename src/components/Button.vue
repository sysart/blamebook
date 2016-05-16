<template>
  <button class="button"><slot></slot></button>
</template>

<style scoped>

button {
  outline: none;
  border: none;
  color: white;
  outline: none;
  background-color: transparent;
  color: #42b983;
  border: 1px solid #42b983;
  cursor: pointer;
}

button[round] {
  border-radius: 50%;
}

button[opaque] {
  background-color: #42b983;
  border: 1px solid #42b983;
  color: white;
}

button[light] {
  border: 1px solid white;
  color: white;
}

</style>
