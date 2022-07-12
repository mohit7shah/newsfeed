<template>
  <div class="edititem">
    <h3>Edit Data Inputed</h3>
    <b-card class="editcard">
      <div class="product_titles">
        <b>Title : </b>
        <input type="text" v-model="newsData.title" />
      </div>
      <div class="product_authors">
        <b>Author : </b>
        <input type="text" v-model="newsData.author" />
      </div>
      <div class="product_detail">
        <b>Description : </b>
        <textarea
          type="text"
          v-model="newsData.description"
          rows="4"
          class="desc"
        ></textarea>
      </div>
      <button class="btn btn-success" @click="editData">Submit</button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsData: {},
    };
  },
  methods: {
    editData() {
      if (
        this.newsData.title == "" ||
        this.newsData.author == "" ||
        this.newsData.description == ""
      ) {
        alert("Please fill all the fields");
      } else {
        // console.log(this.newsData);
        this.$store.commit("editItem", {
          id: this.newsData.id,
          title: this.newsData.title,
        });
        alert("Data Updated");
        this.$router.push({
          path: "/",
        });
      }
    },
  },
  created() {
    let data = this.$store.getters["newsDetails"];
    let id = this.$store.getters["newsId"];

    data.forEach((item) => {
      if (item.id == id) {
        this.newsData = item;
      }
    });
  },
};
</script>

<style scoped>
.edititem {
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
