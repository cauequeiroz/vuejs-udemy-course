<template>
  <div class="quotes-edit">
    <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button  @click="add" type="button" class="btn btn-primary mt-4">Add Quote</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },

  methods: {
    add() {
      this.$emit('add', this.text);
    }
  }
}
</script>
