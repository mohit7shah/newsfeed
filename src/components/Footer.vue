<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <b class="copyright">© Copyright 2022. All Rights Reserved.</b>
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

<style scoped>
.footer {
  background: rgb(173, 173, 173);
  height: 35px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.container {
  text-align: center;
  color: white;
  margin-top: 5px;
}

.material-icons {
  font-size: 20px;
  margin-top: 2px;
  /* margin-left: 25px; */
  /* padding: 5px; */
}
</style>
