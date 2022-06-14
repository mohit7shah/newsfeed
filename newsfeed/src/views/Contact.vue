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
          <b-form-checkbox value="me">Do you want any updates?</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" class="btn btn-success">Subscribe</b-button>
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
    onsubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
.data {
  padding-top: 20px;
  margin: auto;
  border: 1rem bold black;
  display: block;
  height: 350px;
  width: 400px;
}

.btn {
  margin-top: 20px;
}
</style>
