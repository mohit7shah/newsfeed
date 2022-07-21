<template>
  <div id="nav">
    <HeaderVue></HeaderVue>
    <footer-section></footer-section>
  </div>
</template>

<script>
import FooterSection from "../src/components/Footer.vue";
import HeaderVue from "./components/Header.vue";

export default {
  components: {
    FooterSection,
    HeaderVue,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
