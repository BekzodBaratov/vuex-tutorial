<template>
  <h1>{{ getCountercheck }}</h1>
  <button @click="handleInc">counter</button>
  <button @click="handleAsyncFunc">AsyncCounter</button>
</template>

<script setup>
import { computed } from "vue";
import { useStore, mapGetters } from "vuex";
const store = useStore();

const count = computed(function () {
  return store.getters.getCountercheck;
});

function handleInc() {
  store.commit("incriment", { value: 1 });
}
function handleAsyncFunc() {
  store.dispatch("asyncIncrement", { value: 10 });
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
