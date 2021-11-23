const app = Vue.createApp({
  data() {
    return {
      name: 'Caue Queiroz',
      age: 26,

      catImage: 'http://placekitten.com/400/250'
    }
  },

  methods: {
    generateRandomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');
