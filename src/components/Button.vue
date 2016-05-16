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
  padding: 8px 16px;
  transition: 0.2s;
}

button:hover{
  background-color: rgba(66, 185, 131, 0.24);
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
