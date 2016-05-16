<template>
  <div class="bar">
    <div class="bar-content">
      <div class="bar-indicator" v-bind:style="{ height: height + '%' }">
        <div class="bar-value-label">{{ value }}</div>
      </div>
    </div>
    <div class="bar-label">{{ label }}</div>
  </div>
</template>

<script>
export default {

  props: {
    value: {
      type: Number,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    label: {
      type: [Number, String],
    },
  },

  default: {
    value: 0,
    min: 0,
    max: 100,
  },

  computed: {
    height() {
      return (this.value || 0) / this.max * 100;
    },
  },
};
</script>

<style scoped>
.bar{
  vertical-align: bottom;
  margin: 8px;
  width: 64px;
  padding-bottom: 24px;
  padding-top: 24px;
  position: relative;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.bar-content{
  flex: 1;
  position: relative;
}

.bar-indicator{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #42b983;
  transition: 0.4s;
}

.bar-label, .bar-value-label{
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
}

.bar-value-label{
  bottom: auto;
  top: -24px;
}



</style>
