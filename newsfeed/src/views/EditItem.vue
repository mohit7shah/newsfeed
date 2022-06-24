<template>
  <div class="edititem">
    <h3>New Data Input</h3>
    <b-card class="editcard">
      <div class="product_title">
        <b>Title : </b>
        <input type="text" />
      </div>
      <div class="product_author">
        <b>Author : </b>
        <input type="text" />
      </div>
      <div class="product_details">
        <b>Description : </b>
        <input type="text" />
      </div>
      <button class="btn btn-success" @click="editData">Submit</button>
    </b-card>
  </div>
</template>

<script>
export default {
  methods: {
    editData() {
      //   let newData = {
      //     title: this.$refs.title.value,
      //   };
    },
  },
};
</script>

<style>
.edititem {
  margin-top: 90px;
  text-align: center;
  width: 50%;
  margin-left: 400px;
}

.product_title {
  margin-top: 20px;
  margin-left: 50px;
}
.product_author {
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;
}

.btn {
  margin-top: 30px;
}
</style>
