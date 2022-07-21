<template>
  <div class="container">
    <b-alert
      v-model="showAlert"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000"
      variant="warning"
      dismissible
    >
      Please fill all the fields properly
    </b-alert>
    <div class=""></div>
    <div class="newitem">
      <h3>New Data Input</h3>
      <b-card class="newcard">
        <div class="product_titles">
          <b class="title my-2">Title: </b>
          <b-input type="text" v-model="title" class="input_title" />
        </div>
        <div class="product_authors">
          <b class="author my-2">Author: </b>
          <b-input type="text" v-model="author" />
        </div>
        <div class="product_detail">
          <b class="describe my-2">Description: </b>
          <textarea
            type="text"
            v-model="description"
            rows="7"
            cols="50"
            class="desc"
          ></textarea>
        </div>
        <b-button class="btn btn-success" @click="addData">Add Data</b-button>
        <b-button class="btn btn-danger" @click="canceladding">Cancel</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      author: "",
      description: "",
      showAlert: false,
    };
  },
  methods: {
    canceladding() {
      this.$router.push({
        path: "/",
      });
    },
    addData() {
      if (
        this.title == "" ||
        this.author == "" ||
        this.description == "" ||
        this.title == " " ||
        this.author == " " ||
        this.description == " "
      ) {
        this.showAlert = true;
      } else {
        this.$store.commit("addItem", {
          id: this.id,
          title: this.title,
          author: this.author,
          description: this.description,
        });
        alert("Data added successfully");
        this.$router.push({
          path: "/",
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex: auto; */
}

.btn {
  margin: 10px;
  width: 100px;
}

.title,
.author,
.describe {
  font-size: 20px;
}

.title {
  padding-right: 75px;
}

.author {
  padding-right: 50px;
}

.describe {
  padding-right: 10px;
}

.newitem {
  margin-top: 100px;
  justify-content: center;
  width: 50%;
}

.product_titles {
  margin-top: 20px;
  display: flex;
}
.product_authors {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
}
.product_detail {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
}

.btn {
  margin-top: 30px;
}
</style>
