import Vue from 'vue';

function pad(value) {
  return (`0${value}`).slice(-2);
}

Vue.filter('date', (timestamp) => {
  const date = new Date(timestamp);
  return `
    ${date.getHours()}:${pad(date.getMinutes())}:${pad(date.getSeconds())}
    ${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
});
