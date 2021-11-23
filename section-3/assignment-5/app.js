const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      tasks: [],

      isListVisible: true
    }
  },

  computed: {
    toggleText() {
      return this.isListVisible ? "Hide List" : "Show List"
    }
  },

  methods: {
    addTask() {
      this.tasks.push(this.userInput);
      this.userInput = '';
    },

    toggleVisibility() {
      this.isListVisible = !this.isListVisible;
    }
  }
});

app.mount('#assignment')
