<template>
  <div class="edititem">
    <h3>Edit Data Inputed</h3>
    <b-card class="editcard">
      <div class="product_titles">
        <b>Title : </b>
        <input type="text" />
      </div>
      <div class="product_authors">
        <b>Author : </b>
        <input type="text" />
      </div>
      <div class="product_detail">
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
    editData() {},
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
</style>
