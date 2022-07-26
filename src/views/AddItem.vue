<template>
  <div class="page">
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
      <!-- <b-button @click="successAlert">Open Modal</b-button> -->
      <b-modal v-model="modalShow" @ok="handlingokay"
        >Data added Successfully!</b-modal
      >

      <div class="newitem">
        <h3>{{ componentName }} Data</h3>
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
          <b-button class="btn btn-success" @click="addData"
            >{{ componentName }} Data</b-button
          >
          <b-button class="btn btn-danger" @click="canceladding"
            >Cancel</b-button
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      id: "",
      author: "",
      description: "",
      showAlert: false,
      modalShow: false,
      componentName: "",
    };
  },
  methods: {
    canceladding() {
      this.$router.push({
        path: "/",
      });
    },
    handlingokay() {
      if (this.componentName == "Add") {
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
          // if (this.modalShow) {
          //   this.$router.push({
          //     path: "/",
          //   });
          // }
          this.$store.commit("addItem", {
            id: this.id,
            title: this.title,
            author: this.author,
            description: this.description,
          });
        }
      } else {
        // console.log("edit");
        if (this.title == "" || this.author == "" || this.description == "") {
          this.showAlert = true;
        } else {
          this.$store.commit("editItem", {
            id: this.id,
            title: this.title,
            author: this.author,
            description: this.description,
          });
          // alert("Data Updated");
          // this.$router.push({
          //   path: "/",
          // });
        }
      }

      this.$router.push({
        path: "/",
      });
    },
    addData() {
      // console.log(this.componentName);

      this.modalShow = true;
    },
  },
  mounted() {
    if (this.$route.name == "add") {
      this.componentName = "Add";
      // console.log("add");
    } else if (this.$route.name == "edit") {
      // console.log("edit");
      this.componentName = "Edit";
      let newsData = this.$store.getters["newsDetails"];
      let id = this.$store.getters["newsId"];

      // console.log(this.$store.getters["newsDetails"]);
      // console.log(id);

      newsData.forEach((item) => {
        if (item.id == id) {
          this.id = item.id;
          this.title = item.title;
          this.author = item.author;
          this.description = item.description;
        }
      });
    }
  },
};
</script>

<style scoped>
.newcard {
  background: whitesmoke;
}
.page {
  background-image: linear-gradient(
    to top,
    rgba(255, 212, 0, 0.5),
    rgba(255, 212, 212, 0.5)
  );
  height: 100vh;
  width: 100%;
}

.container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
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
  background: whitesmoke;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
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
