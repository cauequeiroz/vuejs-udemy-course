<template>
  <main>
    <active-user
      :name="name"
      :age="age"
    />

    <user-data
      :name="name"
      :age="age"
      @update-user="updateUser"
    />
  </main>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: {
    ActiveUser,
    UserData,
  },

  data() {
    return {
      name: "Caue Queiroz",
      age: 26,
    };
  },

  methods: {
    updateUser({ name, age }) {
      this.name = name;
      this.age = Number(age);
    },
  },
};
</script>
