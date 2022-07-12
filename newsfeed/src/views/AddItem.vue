<template>
  <div class="newitem">
    <h3>New Data Input</h3>
    <b-card class="newcard">
      <div class="product_titles">
        <b>Title : </b>
        <input type="text" v-model="title" />
      </div>
      <div class="product_authors">
        <b>Author : </b>
        <input type="text" v-model="author" />
      </div>
      <div class="product_detail">
        <b>Description : </b>
        <textarea
          type="text"
          v-model="description"
          rows="4"
          class="desc"
        ></textarea>
      </div>
      <button class="btn btn-success" @click="addData">Submit</button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      author: "",
      description: "",
    };
  },
  methods: {
    addData() {
      if (this.title == "" || this.author == "" || this.description == "") {
        alert("Please fill all the fields");
      } else {
        this.$store.commit("addItem", {
          id: this.id,
          title: this.title,
          author: this.author,
          description: this.description,
        });
        this.$router.push({
          path: "/",
        });
      }
    },
  },
};
</script>

<style scoped>
.newitem {
  margin-top: 90px;
  text-align: center;
  width: 50%;
  margin-left: 400px;
}

.product_titles {
  margin-top: 20px;
  margin-left: 50px;
}
.product_authors {
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;
}
.product_detail {
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn {
  margin-top: 30px;
}

.desc {
  width: 26%;
}
</style>
