<template>
  <base-dialog title="Invalid fields." v-if="invalidFill">
    <template #default>
      <p>You need to fill at least Name and Description fields.</p>
    </template>

    <template #actions>
      <button @click="confirmError">I got it.</button>
    </template>
  </base-dialog>

  <form @submit.prevent="fetchUserInputs">
    <div>
      <label for="name">Name:</label>
      <input type="text" ref="name" id="name">
    </div>

    <div>
      <label for="description">Description:</label>
      <textarea rows="2" ref="description" id="description"></textarea>
    </div>

    <div>
      <label for="link">Url:</label>
      <input type="url" ref="link" id="link">
    </div>

    <div>
      <button class="add-button">Add</button>
    </div>
  </form>
</template>

<script>
import BaseDialog from './BaseDialog.vue';

export default {
  name: 'AddResource',

  components: {
    BaseDialog,
  },

  data() {
    return {
      invalidFill: false,
    }
  },

  inject: [
    'addResource'
  ],

  methods: {
    fetchUserInputs() {
      const name = this.$refs.name.value;
      const description = this.$refs.description.value;
      const url = this.$refs.link.value;

      if (!name.trim() || !description.trim()) {
        this.invalidFill = true;
      } else {
        const id = new Date().toISOString();
        this.addResource({ name, description, url, id });
      }
    },

    confirmError() {
      this.invalidFill = false;
    }
  }
}
</script>

<style scoped>
form {
  margin-top: 100px;
}
div {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

label {
  width: 160px;
}

input, textarea {
  width: 200px;
  padding: 10px;
  /* border-radius: 5px; */
  border: 1px solid #ccc;
}

.add-button {
  margin-left: 160px;
  width: 222px;
}
</style>
