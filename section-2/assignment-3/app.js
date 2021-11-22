const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      timer: null
    }
  },

  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet...';
      } else if (this.counter > 37) {
        return 'Too much!';
      } else {
        return this.counter;
      }
    }
  },

  watch: {
    result(value) {
      clearTimeout(this.timer);

      if (value == 'Not there yet...') return;

      this.timer = setTimeout(() => {
        this.counter = 0;
      }, 5000);
    }
  },

  methods: {
    addToCounter(value) {
      this.counter += value;
    }
  }
});

app.mount('#assignment');
