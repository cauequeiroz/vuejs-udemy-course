const app = Vue.createApp({
  data() {
    return {
      firstOutput: '',
      secondOutput: ''
    }
  },

  methods: {
    showAlert() {
      alert('Hello, world!');
    },

    updateFirstOutput(event) {
      this.firstOutput = event.target.value;
    },

    updateSecondOutput(event) {
      this.secondOutput = event.target.value;
    }
  }
});

app.mount('#assignment');
