const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      isVisible: true,
      userBackground: 'white'
    }
  },

  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
});

app.mount('#assignment');
