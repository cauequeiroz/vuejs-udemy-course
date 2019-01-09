<template>
  <div class="row">
    <div class="col-sm-6">
      <label for="firstName">First Name</label>
      <input
        v-model="firstName"
        type="text"
        class="form-control"
        id="firstName"
        placeholder="Enter first name"
        @input="updateParent"
      >
    </div>
    <div class="col-sm-6">
      <label for="lastName">Last Name</label>
      <input
        v-model="lastName"
        type="text"
        class="form-control"
        id="lastName"
        placeholder="Enter last name"
        @input="updateParent"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },

  methods: {
    updateParent() {
     this.$emit('input', `${this.firstName} ${this.lastName}`);
    }
  }

}
</script>

