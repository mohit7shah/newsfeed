<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="warning" fixed="top">
      <b-navbar-brand href="/" class="dataname"> Newsfeed</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav>
          <router-link to="/" class="menu" active>Home</router-link>
          <router-link to="/about" class="menu">About</router-link>
          <router-link to="/careers" class="menu">Careers</router-link>
          <router-link to="/contact" class="menu">Contact</router-link>
          <div v-if="isLoginFun" class="menu logoutLink" @click="logout">
            Logout
          </div>
          <router-link v-if="!isLoginFun" to="/login" class="menu"
            >Login</router-link
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
      authenticated: true,
      mockAccount: {
        username: "admin",
        password: "123456",
      },
    };
  },
  computed: {
    isLoginFun() {
      console.log(this.$store.getters.isLogin);
      // return this.$store.getters.isLogin;
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
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      console.log("hii");
      // this.authenticated = false;
      // this.$store.commit("logout");
      localStorage.setItem("isLogin", "false");
      this.$router.replace({ path: "/login" });
      alert("Logout Successful");
    },
  },
};
</script>

<style scoped>
#nav {
  text-align: center;
}

.dataname {
  margin-left: 15px;
  display: flex;
}
.menu {
  text-decoration: none;
  margin-left: 15px;
  color: black;
}
.logoutLink {
  cursor: pointer;
}
</style>
