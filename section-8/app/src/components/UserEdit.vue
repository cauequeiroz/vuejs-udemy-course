<template>
  <div>
    <h2>User Edit</h2>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <button @click="resetNameEmit">Reset Name Emit</button>
    <button @click="resetName('Caue Queiroz')">Reset Name Cb</button>
    <button @click="resetAge">Reset Age</button>
  </div>
</template>

<script>
import {EventBus} from '../main.js';

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    resetName: Function,
    age: Number
  },

  methods: {
    resetNameEmit() {
      this.$emit('nameReseted', 'Caue Queiroz');
    },
    resetAge() {
      this.age = 30;
      EventBus.$emit('ageChanged', this.age);
    }
  }
}
</script>

<style scoped>
 div {
   width: 49%;
   float: right;
   border: 1px dotted black;
   height: 200px;
 }
</style>