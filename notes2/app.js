const app = Vue.createApp({
  data() {
    return {
      goal: 'Learn all those Vue 3 new features!',

      goalA: 'Learn VueJS!',
      goalB: 'Master Vuejs!',

      htmlData: '<h2>Want more?</h2>',

      learnMoreUrl: 'http://www.udemy.com',

      counter: 0,
      counterStep: 2
    }
  },

  watch: {
    counter(value) {
      console.log('Updating counter to value', value);
    }
  },

  methods: {
    generateRandomGoal() {
      const randomNumber = Math.random();

      return randomNumber < 0.5
        ? this.goalA
        : this.goalB;
    },

    setCounterStep(event) {
      this.counterStep = event.target.value;
    },

    upCounter(step) {
      this.counter += +step;
    },

    downCounter(step) {
      this.counter -= +step;
    },

    submitForm(event) {
      event.preventDefault();
      alert('submitted!');
    }
  }
});

app.mount('#user-goal');
