<template>
  <h1>Remember Me</h1>

  <base-tabs :current-tab="currentTab" @change="changeTab" />
  
  <keep-alive>
    <component :is="currentTab" />
  </keep-alive>
</template>

<script>
import BaseTabs from "./components/BaseTabs.vue";
import StoredResources from "./components/StoredResources.vue";
import AddResource from './components/AddResource.vue';

export default {
  name: "App",

  components: {
    BaseTabs,
    StoredResources,
    AddResource,
  },

  data() {
    return {
      currentTab: "stored-resources",

      storedResources: [
        {
          id: "google",
          name: "Google",
          description: "Lorem ipsum silor dot amet.",
          url: "https://google.com/",
        },

        {
          id: "vuejs",
          name: "VueJS",
          description: "Another lorem ipsum info quanttum apendum.",
          url: "https://vuejs.org/",
        },
      ],
    };
  },

  provide() {
    return {
      resources: this.storedResources,
      deleteResource: this.deleteResource,
      addResource: this.addResource
    };
  },

  methods: {
    changeTab(newTab) {
      this.currentTab = newTab;
    },

    addResource(resource) {
      console.log(resource)
      this.storedResources.push(resource);
      this.changeTab('stored-resources');
    },

    deleteResource(id) {
      const resIndex = this.storedResources.findIndex(res => res.id === id);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>

<style>
body {
  width: 600px;
  margin: 0 auto;
}

* {
  font-family: "Courier New", Courier, monospace;
}
</style>
