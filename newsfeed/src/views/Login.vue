<template>
  <div class="login">
    <div class="details">
      Email :
      <input type="text" />
    </div>
    <br />
    <div class="password">Password : <input type="password" /></div>
    <b-button class="button btn-success" @click="gotohome()">Login</b-button>
  </div>
</template>
<script>
export default {
  methods: {
    gotohome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 20px;
  text-align: center;
}

.button {
  margin-top: 10px;
}
</style>
