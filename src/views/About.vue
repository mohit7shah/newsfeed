<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/i3.png" alt="Image1" class="image" />
        </div>
        <div class="col-md-6">
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

<style scoped>
#about {
  background-color: #ffffff;
}

.image {
  width: 300px;
}

.container {
  padding-top: 150px;
  padding-bottom: 150px;
}

.row {
  padding-bottom: 50px;
}

h3 {
  color: brown;
  padding-top: 100px;
}
p {
  color: black;
}
</style>
