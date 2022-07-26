<template>
  <div class="contact">
    <b-alert
      v-model="showAlert"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000"
      variant="danger"
      dismissible
    >
      Please fill all the fields properly
    </b-alert>
    <b-modal
      v-model="modalShow"
      @ok="handlingokay"
      ok-only
      title="You have subscribed to our newsletter"
    >
      Data added Successfully!</b-modal
    >
    <b-card class="data">
      <b-form-group
        id="input-group-1"
        label="Email Address :"
        label-for="input-1"
        size="20"
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
      showAlert: false,
      modalShow: false,
      form: {
        email: "",
        name: "",
        number: "",
        checked: [],
      },
    };
  },
  methods: {
    handlingokay() {
      this.modalShow = false;
      this.$router.push({
        path: "/",
      });
    },
    onsubmit() {
      if (
        this.form.email == "" ||
        this.form.name == "" ||
        this.form.number == "" ||
        this.form.checked == ""
      ) {
        this.showAlert = true;
      } else {
        console.log(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(this.form.email));
        console.log(/^[a-zA-Z]/.test(this.form.name));
        console.log(/^[0-9]/.test(this.form.email));

        if (
          !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(this.form.email) &&
          this.form.number.length != 10 &&
          !/^[A-Za-z]/.test(this.form.name) &&
          !/^[0-9]/.test(this.form.number)
        ) {
          this.showAlert = true;
        } else {
          this.modalShow = true;
        }
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
