<template>
  <div class="login" @submit.prevent="login">
    <h1>Login</h1>
    <b-card>
      <div class="details">
        Username :
        <input type="text" name="username" v-model="input.username" />
      </div>
      <br />
      <div class="password">
        Password :
        <input type="password" name="password" v-model="input.password" />
      </div>
      <b-button class="button btn-success" @click="login()">Login</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ path: "/" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 150px;
  text-align: center;
  width: 50%;
  margin-left: 400px;
}

.details {
  margin-top: 20px;
}

.password {
  margin-left: 5px;
}

.button {
  margin-top: 30px;
}
</style>
