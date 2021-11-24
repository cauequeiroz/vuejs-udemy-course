<template>
  <button
    :class="{ 'active': currentTab == 'stored-resources' }"
    @click="$emit('change', 'stored-resources')"
  >Stored Resources</button>

  <button
    :class="{ 'active': currentTab == 'add-resource' }"
    @click="$emit('change', 'add-resource')"
  >Add Resource</button>
</template>

<script>
export default {
  name: "BaseTabs",

  props: {
    currentTab: {
      type: String,
      required: true
    }
  },

  emits: [
    'change'
  ]
};
</script>

<style>
button {
  border: none;
  background: none;
  padding: 10px 20px;
  border: 1px dashed #ccc;
  margin-right: 20px;
  cursor: pointer;
}

button:hover {
  background: rgb(235, 235, 235);
}

button.active {
  border-color: rgb(61, 61, 61);
}
</style>
