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
            <b-form-select
              text="Sort By"
              class="sorting"
              v-model="sorting_by"
              :options="option"
            >
              <b-form-select-option :value="null"></b-form-select-option>
              <!-- <b-dropdown-item value="body">Body</b-dropdown-item>
              <b-dropdown-item value="author">Author</b-dropdown-item> -->
            </b-form-select>
          </div>
          <div class="drop2">
            <b-nav-dropdown text="Sorting In" class="sorting">
              <b-dropdown-item @click="asc">Assending</b-dropdown-item>
              <b-dropdown-item @click="desc">Desending</b-dropdown-item>
            </b-nav-dropdown>
          </div>
          <!-- <router-link to="/login" class="btn btn-success" v-if="!hide"
            >Login</router-link
          > -->
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
      sorting_by: "",
      option: [
        {
          value: "",
          text: "Sort By",
        },
        {
          value: "title",
          text: "Title",
        },
        {
          value: "author",
          text: "Author",
        },
        {
          value: "description",
          text: "Description",
        },
      ],
    };
  },
  components: {
    productitem,
  },
  // computed: {
  //   hide() {
  //     return this.$store.getters.isLogin;
  //   },
  // },
  methods: {
    asc() {
      // console.log(this.sorting_by);
      if (this.sorting_by === "title") {
        this.$store.getters.newsDetails.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
      if (this.sorting_by === "author") {
        this.$store.getters.newsDetails.sort((a, b) =>
          a.author.localeCompare(b.author)
        );
      }
      if (this.sorting_by === "description") {
        this.$store.getters.newsDetails.sort((a, b) =>
          a.description.localeCompare(b.description)
        );
      }
    },
    desc() {
      // console.log(this.sorting_by);
      if (this.sorting_by === "title") {
        this.$store.getters.newsDetails.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
      if (this.sorting_by === "author") {
        this.$store.getters.newsDetails.sort((a, b) =>
          b.author.localeCompare(a.author)
        );
      }
      if (this.sorting_by === "description") {
        this.$store.getters.newsDetails.sort((a, b) =>
          b.description.localeCompare(a.description)
        );
      }
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
  margin-top: 50px;
  color: #000;
  border: none;
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
