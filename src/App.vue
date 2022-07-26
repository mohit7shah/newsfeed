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

<style></style>
