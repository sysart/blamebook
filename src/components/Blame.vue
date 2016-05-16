<template>
  <Modal :close="close" position="right" name="blame" :visible="visible">
    <div slot="title">
      Syytös
    </div>


    <div class="modal-content">
      <input-container label="Syy" light>
        <input type="text" v-model="reason">
      </input-container>
      <input-container label="Retardi" light>
        <input type="checkbox" v-model="retard">
      </input-container>
    </div>

    <div slot="footer">
      <Button light>Cancel</Button>
      <Button light>Poista koko paska</Button>
      <Button light>Lisää</Button>
    </div>

  </Modal>
</template>

<script>
import Background from './Background';
import Button from './Button';
import Modal from './Modal';
import InputContainer from './InputContainer';

export default {
  components: {
    Background,
    Button,
    Modal,
    InputContainer,
  },

  props: {
    show: {
      type: Function,
    },
  },

  data() {
    return {

      reason: 'Koska syy',

      retard: true,

      visible: false,
    };
  },

  events: {
    blame(userId) {
      console.log(userId);
      this.visible = true;
    },
  },

  methods: {
    close() {
      this.visible = false;
    },
  },

};

</script>

<style>
.modal[name="blame"] {
  width: 40%;
}
</style>
