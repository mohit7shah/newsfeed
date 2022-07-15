<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <p>© Copyright 2022. All Rights Reserved.</p>
        </div>
        <div class="col-md-4">
          <i class="material-icons"> mail</i>
          <i class="material-icons"> phone</i>
          <i class="material-icons"> chat</i>
        </div>
      </div>
    </div>
  </footer>
</template>

<!-- <script>
import { MDBBtn, MDBIcon } from "mdb-vue-ui-kit";

export default {
  name: "App",
  components: {
    MDBBtn,
    MDBIcon,
  },
};
</script> -->

<style scoped>
footer {
  background: grey;
  height: 35px;
  width: 100%;
  position: fixed;
  bottom: 0;
  margin-top: 25px;
}
.container {
  text-align: center;
  color: white;
  margin-top: 5px;
}

.material-icons {
  font-size: 20px;
  margin-top: 2px;
  margin-left: 25px;
}
</style>
