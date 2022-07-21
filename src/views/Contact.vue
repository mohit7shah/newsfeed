<template>
  <div class="contact">
    <b-card class="data">
      <b-form-group
        id="input-group-1"
        label="Email Address :"
        label-for="input-1"
        size="20"
        description="We'll never share the information with anyone else..."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter Email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Name :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Contact No :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.number"
          placeholder="Number"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkbox">
          <b-form-checkbox value="me" class="empty">
            Do you want any updates?</b-form-checkbox
          >
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" class="btn btn-success" @click="onsubmit"
        >Subscribe</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        number: "",
        checked: [],
      },
    };
  },
  methods: {
    onsubmit() {
      if (
        this.form.email == "" ||
        this.form.name == "" ||
        this.form.number == "" ||
        this.form.checked == ""
      ) {
        alert("Please fill all the fields");
      } else {
        alert("Subscribed");
      }
    },
  },
};
</script>

<style scoped>
.contact {
  background: url("../assets/subscriptionservice.png");
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* width: 100vw; */
  background-position: center;
  background-repeat: no-repeat;
}
.data {
  padding-top: 20px;
  border: none;
  box-shadow: rgb(4, 4, 4) 0px 0px 10px;
  background: rgb(256, 256, 256);
  color: #000;
}

.btn {
  margin-top: 30px;
  margin-left: 10px;
}

.text-muted {
  color: #f5f5f5;
}
</style>
