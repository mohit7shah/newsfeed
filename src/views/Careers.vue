<template>
  <div class="careers">
    <div class="container">
      <b-card class="card">
        <div class="row">
          <div class="col-md-12">
            <div class="careers_title text-center">
              <h2>Careers</h2>
            </div>
            <h5>Regarding Job details</h5>
          </div>
        </div>
        <div class="row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi,
            incidunt doloremque veniam repellat aliquid eos officiis tempore?
            Deleniti nesciunt laboriosam natus cumque esse, earum atque unde
            fugiat hic doloremque! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quis maiores accusantium ex amet consequatur nulla
            ea sunt? Molestias beatae doloremque, odit eos cumque similique vel
            autem, quasi illo facere tempora! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolores harum voluptate aliquid ipsum
            blanditiis doloremque sunt a est velit tenetur ut dolor, ex sapiente
            tempore accusantium sequi quisquam? Iure, fugit. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Et inventore temporibus
            tempore fuga unde accusantium, facere iste porro officia, voluptatum
            reiciendis quia ducimus dolore fugit, ea laboriosam consequatur
            saepe nesciunt!
          </p>
        </div>
        <div class="button">
          <button class="btn btn-success mx-2" @click="gotosave()">
            Agree
          </button>
          <button class="btn btn-warning" @click="gotoproduct()">
            Contact
          </button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotosave() {
      alert("Thank you for your interest in our company");
      this.$router.push({ path: "/" });
    },
    gotoproduct() {
      this.$router.push({
        path: "/contact",
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}

.card {
  background: brown;
}

.btn {
  margin-top: 30px;
  width: 100px;
}

.careers {
  background-image: linear-gradient(to bottom, #f0fab3, #89bfef);
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100vh;
  color: azure;
}
</style>
