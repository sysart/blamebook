<template>
  <label class="input-container">
    <slot></slot>
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
};
</script>

<style>
  .input-container{
    position: relative;
    padding: 8pt 8px 8px 8px;
    display: flex;
    flex-direction: row;
    margin: 8px 0;
  }

  .input-container span{
    position: absolute;
    top: 0;
    left: 8px;
    color: #42b983;
    font-size: 8pt;
    line-height: 8pt;
  }

  .input-container input{
    background-color: transparent;
    outline: none;
    border: none;
    color: #42b983;
    border-bottom: 2px solid #42b983;
    padding: 8px 0;
    flex: 1;
  }

  .input-container[light] input{
    color: white;
    border-color: white;
  }

  .input-container[light] span{
    color: white;
  }
</style>
