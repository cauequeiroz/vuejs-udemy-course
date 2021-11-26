<template>
  <form @submit.prevent="submitForm">
    <!-- input name with validation for empty value -->
    <div class="form-control" :class="{ invalid: invalidUserName }">
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="userName"
        @blur="validateUsernameInput"
      />
      <p>You must fill with same value.</p>
    </div>

    <!-- inputs password with validation for different values -->
    <div class="form-control" :class="{ invalid: invalidPassword }">
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" v-model="password" />
      <p>Passwords don't match.</p>
    </div>

    <div class="form-control" :class="{ invalid: invalidPassword }">
      <label for="confirmPassword">Confirm password:</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        v-model="confirmPassword"
        @blur="validatePasswordInput"
      />
      <p>Passwords don't match.</p>
    </div>

    <!-- custom rating component -->
    <rating v-model="rating" />

    <button>Submit</button>
  </form>
</template>

<script>
import Rating from './Rating.vue';

export default {
  name: "FormScreen",
  components: {
    Rating,
  },

  data() {
    return {
      userName: "",
      invalidUserName: false,

      password: "",
      confirmPassword: "",
      invalidPassword: false,

      rating: 'great'
    };
  },

  methods: {
    validateUsernameInput() {
      this.invalidUserName = !this.userName.trim();
    },

    validatePasswordInput() {
      this.invalidPassword =
        this.password != this.confirmPassword ||
        !this.password.trim() ||
        !this.confirmPassword.trim();
    },

    submitForm() {
      this.validateUsernameInput();
      this.validatePasswordInput();

      if (this.invalidUserName || this.invalidPassword) {
        return;
      }

      console.log('Submting form :)');
      this.resetForm();
    },

    resetForm() {
      this.userName = '';
      this.password = '';
      this.confirmPassword = '';
      this.rating = 'poor';
    }
  },
};
</script>

<style scoped>
.form-control {
  border: 1px dotted #ccc;
  width: 400px;
  padding: 20px;
}
.form-control p {
  display: none;
  color: red;
}
.form-control.invalid {
  border-color: red;
  border-style: solid;
}
.form-control.invalid p {
  display: block;
}
.form-control.invalid label {
  color: red;
}
</style>
