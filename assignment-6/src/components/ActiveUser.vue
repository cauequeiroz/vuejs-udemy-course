<template>
  <section>
    <p>
      <strong>{{ name }}</strong> ({{ age }})
    </p>
  </section>
</template>

<script>
export default {
  name: "ActiveUser",

  props: {
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
section {
  width: 200px;
  margin: 0 auto;
}
</style>
