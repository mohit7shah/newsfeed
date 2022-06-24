<template>
  <div class="news">
    <b-card class="product" v-for="data in dataArray" :key="data.id">
      <div class="product_title">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="product_author">
        <h5>Author : {{ data.author }}</h5>
      </div>
      <div class="product_description">
        <p>{{ data.description }}</p>
      </div>
      <button class="btn btn-success" @click="editbutton">Edit</button>
      <button class="btn btn-danger">Remove</button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "author", "description"],
  computed: {
    dataArray() {
      return this.$store.getters.newsDetails;
    },
  },
  methods: {
    editbutton() {
      this.$router.push({
        path: "/edititem",
        query: {
          id: this.id,
          title: this.title,
        },
      });
    },
  },
};
</script>

<style>
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
