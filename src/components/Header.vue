<template>
  <div id="nav">
    <b-modal v-model="modalShow" @ok="handlingOkay" title="LogOut"
      >Logout Successful</b-modal
    >
    <b-navbar toggleable="lg" type="light" variant="warning" fixed="top">
      <b-navbar-brand href="/" class="dataname"> Newsfeed</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <div>
          <router-link to="/" class="menu" active>Home</router-link>
          <router-link to="/about" class="menu">About</router-link>
          <router-link to="/careers" class="menu">Careers</router-link>
          <router-link to="/contact" class="menu">Contact</router-link>
        </div>
        <div class="btn-container">
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
        </div>
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
.dataname {
  /* padding-right: 5px; */
  font-weight: bold;
  color: #ffc107;
}

#nav {
  text-align: center;
}

.menu {
  margin-top: 5px;
  text-decoration: none;
  padding-right: 10px;
  color: black;
  /* font-weight: bold; */
}
.logoutLink {
  width: 100px;
  text-decoration: none;
  cursor: pointer;
}
.navbar-collapse {
  justify-content: space-between;
}
</style>
