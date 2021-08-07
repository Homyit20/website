<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
//要驼峰命名哦
// import NavBar from "./components/common/nav.vue";
import NavBar from "./components/enter/enter.vue"
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
