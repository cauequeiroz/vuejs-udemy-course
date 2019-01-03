<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>User: {{ name }} ({{age}})</h1>
    <button @click="changeName">Change name</button>

    <hr>
    <app-user-details :name="name" @nameReseted="resetName" :resetName="resetName" :age="age"></app-user-details>
    <app-user-edit :name="name" @nameReseted="resetName" :resetName="resetName" :age="age"></app-user-edit>
  </div>
</template>

<script>
import UserDetailsVue from './components/UserDetails.vue';
import UserEditVue from './components/UserEdit.vue';

export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'Caue Queiroz',
      age: 15
    }
  },

  methods: {
    changeName() {
      this.name = 'Another name'
    },
    resetName($event) {
      this.name = $event
    }
  },

  components: {
    'app-user-details': UserDetailsVue,
    'app-user-edit': UserEditVue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
