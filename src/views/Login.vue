<template>
  <div class="page">
    <b-modal v-model="modalShow" @ok="handlingOkay" title="Login"
      >Login Successful</b-modal
    >
    <b-modal v-model="modal" @ok="handlingUnsuccess" title="Login Failed"
      >The username or password is incorrect</b-modal
    >
    <b-modal v-model="modalinput" @ok="handlingSpace" title="Fields are Empty">
      Please fill in all the fields
    </b-modal>

    <div class="login" @submit.prevent="login">
      <h1 class="heading">Login</h1>
      <b-card class="bcard">
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
        <b-button class="button btn-danger" @click="cancel()">Cancel</b-button>
      </b-card>
    </div>
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
      modalShow: false,
      modal: false,
      modalinput: false,
    };
  },
  methods: {
    handlingUnsuccess() {
      this.modalShow = false;
    },
    handlingOkay() {
      localStorage.setItem("isLogin", "true");
      this.$router.replace({ path: "/" });
    },
    handlingSpace() {
      this.modalinput = false;
    },
    cancel() {
      this.$router.push({
        path: "/",
      });
    },
    login() {
      if (
        this.input.username != "" &&
        this.input.password != "" &&
        this.input.username != " " &&
        this.input.password != " "
      ) {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.modalShow = true;
        } else {
          // alert("error in login");
          this.modal = true;
          console.log("The username and password is incorrect");
        }
      } else {
        this.modalinput = true;
        // alert("Please fill all the fields");
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style scoped>
.login {
  padding-top: 150px;
  height: 100vh;
  padding-left: 250px;
  padding-right: 150px;
  background-image: url("../assets/backgroundlogin.jpg");
}

.details {
  margin-top: 20px;
}

.heading {
  font-size: 50px;
  color: #fff;
}

.bcard {
  align-content: center;
  justify-content: center;
  padding-top: 50px;
  height: 300px;
  background: whitesmoke;
}

.password {
  margin-left: 5px;
}

.button {
  margin-top: 30px;
  margin-right: 10px;
}
</style>
