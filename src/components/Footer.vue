<template>
  <footer class="footer">
    <div class="container">
      <p>
        © Copyright 2022. All Rights Reserved.
        <i class="material-icons">call</i>
        +3151244125
      </p>
      <!-- <MDBBtn
        tag="a"
        color="primary"
        href="#!"
        floating
        size="lg"
        style="background-color: rgb(172, 43, 172)"
      >
        <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
      </MDBBtn> -->
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
  font-size: 17px;
}
</style>
