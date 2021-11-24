<template>
  <form @submit.prevent="updateUser">
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="innerName" />
    <br />

    <label for="age">Age:</label>
    <input type="text" id="age" v-model="innerAge" />
    <br />

    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "UserData",

  props: {
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },
  },

  emits: [
    'update-user'
  ],

  data() {
    return {
      innerName: this.name,
      innerAge: this.age,
    };
  },

  methods: {
    updateUser() {
      this.$emit("update-user", {
        name: this.innerName,
        age: this.innerAge
      });
    },
  },
};
</script>

<style scoped>
form {
  width: 200px;
  margin: 0 auto;
}

label {
  display: block;
}

input {
  margin: 10px 0px;
}
</style>
