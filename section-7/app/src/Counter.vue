<template>
  <div>
    <button @click="counter--">Remove</button>
    <span>{{ counter }}</span>
    <button @click="counter++">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return { counter: 0 }
  }
}
</script>

