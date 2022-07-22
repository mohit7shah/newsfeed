<template>
  <div class="hompage">
    <div>
      <div class="container">
        <div class="dropdown">
          <div class="sorting">
            <b-form-select
              text="Sort By"
              class="drop1"
              v-model="sorting_by"
              :options="option"
            >
            </b-form-select>
            <b-nav-dropdown text="Sorting In" class="drop2">
              <b-dropdown-item @click="asc">Assending</b-dropdown-item>
              <b-dropdown-item @click="desc">Desending</b-dropdown-item>
            </b-nav-dropdown>
          </div>
          <b-form-input
            size="sm"
            class="search"
            placeholder="Search..."
            v-model.trim="query"
          >
          </b-form-input>
          <b-button to="/additem" class="item btn-warning" @click="verifyLogin"
            >AddItem</b-button
          >
        </div>
      </div>
    </div>
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
      if (localStorage.getItem("isLogin") == "true") {
        this.$router.push({
          path: "/additem",
        });
      } else {
        alert("Please Login First");
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>

<style scoped>
.hompage {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #c5c5c5;
}

.dropdown {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sorting {
  display: flex;
  max-width: 250px;
  padding-right: 35px;
}

.drop1 {
  margin-top: 13px;
}

.drop2 {
  margin-top: 13px;
}

.search {
  padding: 10px;
  max-width: 300px;
  height: 35px;
}
.item {
  margin-top: 20px;
  margin-bottom: 5px;
  max-width: 200px;
}
</style>
