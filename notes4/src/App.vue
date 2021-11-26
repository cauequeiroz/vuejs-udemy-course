<template>
  <h1>Hello world!</h1>

  <p><input type="text" v-model="message" /></p>
  <p>{{ message }}</p>

  <p>{{ user.firstname }} {{ user.lastname }}</p>
  <p>{{ fullname }}</p>
  
  <button @click="updateData">Update</button>
  <hr /> 

  <foo />
</template>

<script>
import { computed, reactive, ref, watch } from 'vue';
import Foo from './components/foo.vue';

export default {
  name: 'App',

  components: {
    Foo
  },

  setup() {
    // Data
    const message = ref('Lorem ipsum silor dot amet.');
    const user = reactive({ firstname: 'Caue', lastname: 'Queiroz' });

    // Methods
    const updateData = () => {
      message.value = 'Ops, I changed the content!'
      user.firstname = 'Jeffrey'
    };

    // Computed
    const fullname = computed(() => user.firstname + ' ' + user.lastname);

    // Watch
    watch(user, () => {
      console.log('User changed!');
    });

    return { message, user, fullname, updateData }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
