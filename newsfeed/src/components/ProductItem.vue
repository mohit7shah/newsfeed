<template>
  <div class="news">
    <b-card
      class="product"
      v-for="(data, index) in filterproduct"
      :key="data.id"
    >
      <div class="product_title">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="product_author">
        <h5>Author : {{ data.author }}</h5>
      </div>
      <div class="product_description">
        <p>{{ data.description }}</p>
      </div>
      <b-button
        v-if="hide"
        class="btn btn-success"
        @click="editButton(data.id)"
      >
        Edit
      </b-button>
      <b-button v-if="hide" class="btn btn-danger" @click="deleteEvent(index)">
        Remove
      </b-button>
    </b-card>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  props: ["id", "title", "author", "description", "searchTxt"],

  mounted() {
    this.$store.dispatch("getProducts");
  },

  computed: {
    hide() {
      return this.$store.getters.isLogin;
    },
    filterproduct() {
      if (!this.searchTxt) {
        return this.$store.getters.newsDetails;
      } else {
        let tempData = this.$store.getters.newsDetails.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(this.searchTxt.toLowerCase());
        });
        return tempData;
      }
    },
  },
  methods: {
    editButton(id) {
      if (this.$store.getters.isLogin) {
        this.$router.push({
          path: "/edititem",
        });
        console.log("product" + id);
        this.$store.commit("setId", id);
      } else {
        this.$router.push({ path: "/login" });
      }
    },
    deleteEvent(id) {
      // console.log(id);
      if (this.$store.getters.isLogin) {
        this.$store.commit("deleteNews", id);
        // console.log(id);
      } else {
        alert("Please login first");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
.product {
  margin-top: 20px;
  margin-bottom: 30px;
}

.product_title {
  text-align: left;
}

.product_author {
  text-align: left;
  font-style: italic;
}

.product_description {
  text-align: left;
}
.news {
  margin-top: 10px;
  margin-left: 220px;
  width: 70%;
  margin-bottom: 65px;
}

.btn-success {
  margin-right: 10px;
}
</style>
