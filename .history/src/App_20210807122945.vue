<template>
  <div id="app">
    <router-view></router-view>
    <NavBar v-show="$store.state.isnav"></NavBar>
  </div>
</template>

<script>
import NavBar from "./components/common/nav.vue";
// import NavBar from "./components/enter/enter.vue"
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
