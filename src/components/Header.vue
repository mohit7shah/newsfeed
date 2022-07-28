<template>
  <div id="nav">
    <b-modal v-model="modalShow" @ok="handlingOkay" title="LogOut"
      >Logout Successful</b-modal
    >
    <b-navbar toggleable="lg" type="light" variant="warning" fixed="top">
      <b-navbar-brand href="/" class="dataname"> Newsfeed</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav>
          <router-link to="/" class="menu" active>Home</router-link>
          <router-link to="/about" class="menu">About</router-link>
          <router-link to="/careers" class="menu">Careers</router-link>
          <router-link to="/contact" class="menu">Contact</router-link>
          <b-button
            v-if="isLoginFun"
            class="logoutLink btn-outline-warning"
            @click="logout"
          >
            Logout
          </b-button>
          <b-button
            v-if="!isLoginFun"
            to="/login"
            class="logoutLink btn-success"
            >Login</b-button
          >
        </b-nav>
      </b-collapse>
    </b-navbar>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalShow: false,
      authenticated: true,
      mockAccount: {
        username: "admin",
        password: "123456",
      },
    };
  },
  computed: {
    isLoginFun() {
      let isLogin;
      if (localStorage.getItem("isLogin") == "true") {
        isLogin = true;
      } else {
        isLogin = false;
      }
      return isLogin;
    },
  },
  methods: {
    handlingOkay() {
      localStorage.setItem("isLogin", "false");
      this.$router.replace({ path: "/login" });
      this.modalShow = false;
    },
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      console.log("hii");
      this.modalShow = true;
      // alert("Logout Successful");
    },
  },
};
</script>

<style scoped>
#nav {
  text-align: center;
}

.dataname {
  margin-left: 10px;
  font-weight: bold;
  /* display: flex; */
}
.menu {
  margin-top: 5px;
  text-decoration: none;
  margin-left: 15px;
  color: black;
}
.logoutLink {
  width: 100px;
  margin-left: 1010px;
  text-decoration: none;
  cursor: pointer;
}
</style>
