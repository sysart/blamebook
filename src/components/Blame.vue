<template>
  <Modal :close="close" name="blame" :visible="visible()" position="right">

    <div slot="title">
      Syytös
    </div>

    <div class="column">
      <input-container class="flex" label="Syy">
        <input type="text" v-model="reason" placeholder="{{defaultReason}}" @keyup.enter="blame()">
      </input-container>
      <input-container label="Retardi">
        <input type="checkbox" v-model="retard">
      </input-container>
    </div>

    <div class="toolbar row">
      <Button class="flex" v-on:click="blame">Lisää</Button>
    </div>

    <hr>

    <data-table :options="tableOptions" :data="blames"></data-table>

    <div class="toolbar row">
      <span class="flex"></span>
      <Button v-on:click="remove">Poista koko paska</Button>
      <span class="flex"></span>
    </div>

  </Modal>
</template>

<script>
import { api } from '../api';

import Background from './Background';
import Button from './Button';
import Modal from './Modal';
import InputContainer from './InputContainer';
import DataTable from './DataTable';

export default {
  components: {
    Background,
    Button,
    Modal,
    InputContainer,
    DataTable,
  },

  data() {
    return {
      api,

      reason: '',
      defaultReason: 'Koska syy',

      retard: true,

      visible() {
        return this.userId !== null;
      },

      blames: [],

      userId: null,

      tableOptions: {
        columns: [
          {
            label: 'Time',
            key: 'time',
            filter: this.$options.filters.date,
            classNames: 'thin',
          },
          {
            label: 'Syy',
            key: 'reason',
          },
          {
            label: 'Retard',
            key: 'retard',
            classNames: 'thin text-center',
            filter(value) {
              return value ? 'x' : '';
            },
          },
        ],
      },
    };
  },

  events: {
    blame(userId) {
      this.userId = userId;

      this.api.userBlames(this.userId).on('value', (snapshot) => {
        this.blames = [];
        const data = snapshot.val();

        if (data) {
          Object.keys(data).forEach((key) => {
            this.blames.push(data[key]);
          });
        }
      });
    },
  },

  methods: {

    blame() {
      this.api.blame(this.userId, {
        reason: this.reason || this.defaultReason,
        retard: this.retard,
      });

      this.close();
    },

    close() {
      this.reason = '';
      this.userId = null;
      this.blames = [];
    },

    remove() {
      this.api.remove(this.userId).then(() => this.close());
    },
  },

};

</script>

<style>
.modal[name="blame"] {
  width: 40%;
}
</style>
