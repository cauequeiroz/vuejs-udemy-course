<template>
  <div>
    <h2>User Details</h2>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <button @click="resetNameEmit">Reset Name Emit</button>
    <button @click="resetName('Caue Queiroz')">Reset Name Cb</button>
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
    }
  },

  created() {
    EventBus.$on('ageChanged', data => this.age = data);
  }
}
</script>


<style scoped>
 div {
   width: 50%;
   float: left;
   border: 1px dotted black;
   height: 200px;
   clear: both;
 }
</style>
