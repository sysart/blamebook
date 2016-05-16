<template>
  <Overlay v-on:click="close" v-if="visible">

    <div class="modal modal-wrapper" position="{{ position }}" name="{{ name }}" v-on:click="stopClick">

      <slot name="title"></slot>

      <slot></slot>

      <slot name="footer">

      </slot>
    </div>

  </Overlay>
</template>
<script>

import Overlay from './Overlay';

export default {
  props: {
    position: {
      type: String,
    },

    name: {
      type: String,
    },

    visible: {
      type: Boolean,
    },

    close: {
      type: Function,
    },
  },

  components: {
    Overlay,
  },

  methods: {
    stopClick(evt) {
      evt.stopPropagation();
    },
  },

};

</script>
<style >
  .modal-wrapper[position="right"]{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .modal-wrapper{
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 80px -20px rgba(0,0,0,0.7);
    overflow-y: scroll;
  }

  .modal-wrapper .modal-content{
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    color: white;
    position: relative;
    padding: 16px;
  }

  .modal-wrapper [slot="title"], .modal-wrapper [slot="footer"]{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 8px 0;
    flex: none;
  }

  .modal-wrapper [slot="footer"] button{
    margin: 0 8px;
  }


</style>
