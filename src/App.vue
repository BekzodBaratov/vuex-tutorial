<template>
  <Counter />
  <button @click="addCounter">counter</button>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {
  data() {
    return {};
  },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
  },
  components: {
    Counter,
  },
};
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
