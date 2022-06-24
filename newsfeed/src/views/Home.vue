<template>
  <div class="hompage">
    <b-nav>
      <b-nav-form>
        <div class="dropdown">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search...">
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-form-input>
          <div class="add_item">
            <router-link to="/additem" class="item" @click="verifyLogin"
              >Add Item</router-link
            >
          </div>
          <div class="drop1">
            <b-nav-item-dropdown text="Sort By">
              <b-dropdown-item>Title</b-dropdown-item>
              <b-dropdown-item>Body</b-dropdown-item>
              <b-dropdown-item>Author</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div class="drop2">
            <b-nav-item-dropdown text="Sorting direction">
              <b-dropdown-item>Assending</b-dropdown-item>
              <b-dropdown-item>Desending</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
        </div>
      </b-nav-form>
    </b-nav>
    <div class="Data">
      <productitem></productitem>
    </div>
  </div>
</template>

<script>
import productitem from "../components/ProductItem.vue";
//import loginForm from "../views/Login.vue";
export default {
  components: {
    productitem,
    //  loginForm,
  },
  computed: {
    //   loginver() {
    //     return this.$router.getters.loginVerification;
    //   },
    //sorting() {
    /*let sortedNews = this.productitem;
      sortedNews = sortedNews.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
      });
      return 0;*/
    //},
  },

  methods: {
    verifyLogin() {
      // if (loginForm.loginSuccess === true) {
      //   this.$router.push({ path: "/additem" });
      // } else {
      //   alert("login first");
      // }
    },
  },
};
</script>

<style scoped>
.mr-sm-2 {
  margin-left: 235px;
  margin-top: 20px;
  justify-content: center;
  display: flex;
}

.item {
  margin-right: 15px;
}

.add_item {
  margin-left: 50px;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  text-decoration: none;
  text-transform: none;
}

.Data {
  margin: 15px;
}

.dropdown {
  margin-top: 10px;
  justify-content: center;
  display: flex;
}

.drop1,
.drop2 {
  margin-top: 7px;
  margin-left: 20px;
}
</style>
