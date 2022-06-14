<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <img src="../assets/download1.jpeg" alt="Image1" width="700" />
        </div>
        <div class="col-md-5">
          <h3>Lorem Details</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            nesciunt veniam qui. Voluptate quod ex reiciendis quibusdam fuga.
            Repellat, distinctio veritatis? Iste, deleniti! Quia cupiditate,
            corporis vel veniam maiores tempora!
          </p>
          <b-button class="btn btn-outline-warning" @click="gotocontact()">
            Contact us
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotocontact() {
      this.$router.replace("/contact");
    },
  },
};
</script>

<style>
#about {
  background: lightyellow;
  padding-top: 50px;
  padding-bottom: 50px;
}
h3 {
  color: brown;
  margin-top: 150px;
  margin-bottom: 15px;
}
p {
  color: black;
}
</style>
