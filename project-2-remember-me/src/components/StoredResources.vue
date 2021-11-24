<template>
  <ul>
    <li v-for="item in resources" :key="item.id">
      <resource
        :id="item.id"
        :name="item.name"  
        :description="item.description"
        :url="item.url"
      />
    </li>
  </ul>
</template>

<script>
import Resource from './Resource.vue';

export default {
  name: 'StoredResources',

  components: {
    Resource
  },

  inject: [
    'resources'
  ]
}
</script>

<style scoped>
ul {
  padding: 0;
}

li {
  list-style: none;
}
</style>
