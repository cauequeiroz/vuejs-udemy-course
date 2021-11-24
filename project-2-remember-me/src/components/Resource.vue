<template>
  <div class="resource">
    <div class="resource__content">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <a :href="url">View Resource</a>
    </div>

    <button @click="deleteResource(id)">Remove</button>
  </div>
</template>

<script>
export default {
  name: "Resource",

  props: {
    id: {
      type: String,
      required: true
    },
    
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },
  },

  inject: [
    'deleteResource'
  ]
};
</script>

<style scoped>
.resource {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.resource button {
  height: 50px;

}
</style>
