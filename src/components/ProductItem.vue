<template>
  <div class="news">
    <b-modal v-model="modalShow" @ok="handlingOkay">Are you sure ?</b-modal>
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
export default {
  props: ["id", "title", "author", "description", "searchTxt"],
  data() {
    return {
      modalShow: false,
      newsId: "",
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },

  computed: {
    hide() {
      if (localStorage.getItem("isLogin") == "true") {
        return true;
      } else {
        return false;
      }
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
    handlingOkay() {
      if (localStorage.getItem("isLogin") == "true") {
        // alert("Are you sure you want to delete this data?");
        this.$store.commit("deleteNews", this.newsId);
      }
      this.modalShow = false;
      this.newsId = "";
    },
    editButton(id) {
      if (localStorage.getItem("isLogin") == "true") {
        // alert("Are you sure you want to edit this data?");
        this.$router.push({
          path: "/edititem",
        });
        // console.log("product" + id);
        this.$store.commit("setId", id);
      }
    },
    deleteEvent(id) {
      this.newsId = id;
      this.modalShow = true;
    },
  },
};
</script>

<style scoped>
.product {
  margin-top: 5px;
  margin-bottom: 30px;
  border: none !important;
  box-shadow: grey 0px 0px 5px;
  size: initial;
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
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 30px;
}

.btn-success {
  margin-right: 10px;
}

.btn {
  width: 100px;
}
</style>
