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
            <!-- <b-nav-dropdown text="Sorting In" class="drop2">
              <b-dropdown-item @click="asc">Assending</b-dropdown-item>
              <b-dropdown-item @click="desc">Desending</b-dropdown-item>
            </b-nav-dropdown> -->

            <b-form-select
              text="Sort In"
              class="drop2"
              @change="sortInFun"
              v-model="sorting_in"
              :options="option2"
            >
            </b-form-select>
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

      option2: [
        {
          value: "",
          text: "Sort in",
        },
        {
          value: "asc",
          text: "Ascending",
        },
        {
          value: "desc",
          text: "Descending",
        },
      ],
      sorting_in: "",
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
    sortInFun() {
      if (this.sorting_in == "asc") {
        this.asc();
      } else if (this.sorting_in == "desc") {
        this.desc();
      }
    },
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
  /* width: 100%;*/
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to top, #ffe5e5, rgb(237, 228, 255));
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
  margin-top: 20px;
  margin-right: 10px;
  width: 100px;
}

.drop2 {
  margin-top: 20px;
  width: 150px;
}

.search {
  margin: 25px 10px 10px 10px;
  padding: 10px;
  max-width: 300px;
  height: 35px;
  margin-right: 10px;
  min-width: 70px;
}
.item {
  margin-top: 25px;
  margin-bottom: 5px;
  max-width: 200px;
}
</style>
