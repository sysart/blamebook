<template>
  <div class="view">

    <h1>blamebook</h1>

    <div class="text-center container">
      <p>Syytöstenkirjausohjelma. paras ikinä.</p>
    </div>

    <Background class="users-wrapper container">

      <div class="user-wrapper" v-for="(userId, user) in api.users">

        <Bar v-on:click="blame(userId)"
          :value="user.blame"
          :label="user.name"
          :max="maxValue">
        </Bar>

      </div>

    </Background>

    <Background class="container">
      <Adduser></Adduser>
    </Background>
  </div>

  <Blame></Blame>
</template>

<script>

import { api } from './api';

import Adduser from './components/Adduser';
import Bar from './components/Bar';
import Background from './components/Background';
import Blame from './components/Blame';

export default {
  components: {
    Adduser,
    Bar,
    Background,
    Blame,
  },

  data() {
    return {
      api,
      maxValue: 100,
    };
  },

  methods: {
    blame(userId) {
      this.$broadcast('blame', userId);
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
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html {
  font-size: 10pt;
  font-family: 'Open Sans', sans-serif;
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  color: #42b983;
}

*{
  box-sizing: border-box;
}


h1{
  font-weight: 300;
  text-align: center;
  font-size: 70pt;
  margin: 32px 0 0 0;
}

.container{
  width: 700px;
  max-width: 100%;
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

.user-wrapper:hover{
  background-color: rgba(66, 185, 131, 0.28);
}

.user-wrapper:hover button{
  opacity: 1;
}

.users-wrapper .bar{
  height: 200px;
}

.row{
  display: flex;
  flex-direction: row;
}

.column{
  display: flex;
  flex-direction: column;
}

.flex{
  flex: 1;
}

.text-center{
  text-align: center;
}

hr{
  margin: 32px -16px;
  border: none;
  border-top: 1px solid;
  border-color: rgba(66, 185, 131, 0.41);
}
</style>
