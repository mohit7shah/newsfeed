<template>
  <div class="hompage">
    <b-nav>
      <b-nav-form>
        <div class="dropdown">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search..."
            v-model.trim="query"
          >
          </b-form-input>
          <div class="add_item" @click="verifyLogin">
            <router-link to="/additem" class="item">Add Item</router-link>
          </div>
          <div class="drop1">
            <b-nav-item-dropdown text="Sort By" class="sorting">
              <b-dropdown-item @click="sortbyTitle">Title</b-dropdown-item>
              <b-dropdown-item @click="sortbybody">Body</b-dropdown-item>
              <b-dropdown-item @click="sortbyauthor">Author</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div class="drop2">
            <b-nav-item-dropdown text="Sorting In" class="sorting">
              <b-dropdown-item>Assending</b-dropdown-item>
              <b-dropdown-item>Desending</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <router-link to="/login" class="btn btn-success" v-if="!hide"
            >Login</router-link
          >
        </div>
      </b-nav-form>
    </b-nav>
    <div class="Data">
      <productitem :searchTxt="query"></productitem>
    </div>
  </div>
</template>

<script>
import productitem from "../components/ProductItem.vue";
export default {
  data() {
    return {
      query: "",
    };
  },
  components: {
    productitem,
  },
  computed: {
    hide() {
      return this.$store.getters.isLogin;
      // return this.hidebutton;
    },
  },
  methods: {
    sortbyTitle() {
      this.$store.getters.newsDetails.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        // if (a.title > b.title) {
        //   return 1;
        // }
        return 0;
      });
    },
    sortbybody() {
      this.$store.getters.newsDetails.sort((a, b) => {
        if (a.description < b.description) {
          return -1;
        }
        // if (a.description > b.description) {
        //   return 1;
        // }
        return 0;
      });
    },
    sortbyauthor() {
      this.$store.getters.newsDetails.sort((a, b) => {
        if (a.author < b.author) {
          return -1;
        }
        // if (a.author > b.author) {
        //   return 1;
        // }
        return 0;
      });
    },
    verifyLogin() {
      // console.log(this.$store.getters.isLogin);
      if (this.$store.getters.isLogin) {
        this.$router.push({
          path: "/additem",
        });
      } else {
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>

<style scoped>
.sorting {
  color: #000;
}
.mr-sm-2 {
  margin-left: 235px;
  margin-top: 50px;
  justify-content: center;
  display: flex;
}

.item {
  margin-right: 15px;
  text-decoration: none;
  text-transform: none;
  color: black;
}

.add_item {
  margin-left: 50px;
  justify-content: center;
  width: 80%;
  margin-top: 55px;
}

.Data {
  margin: 15px;
}

.dropdown {
  margin-top: 40px;
  justify-content: center;
  display: flex;
  color: #000;
}

.drop1,
.drop2 {
  margin-top: 7px;
  margin-left: 20px;
  text-decoration: none;
  text-transform: none;
  color: black;
}

.btn {
  margin-left: 50px;
  margin-top: 50px;
}
</style>
