<template>
  <div class="quotes-list">
    <ul class="list-group">
      <li class="list-group-item"
        v-for="item in quotes"
        :key="item.id"
        @click="remove(item.id)">{{ item.text }}</li>
    </ul>

    <div class="row mt-2">
      <div class="col-sm-12">
        <div class="alert alert-primary" role="alert">
          {{ quotes.length ? 'Click on a Quote to delete it' : 'Create a new quote in the form beside.' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quotes'],
  methods: {
    remove(id) {
      this.$emit('remove', id);
    }
  }
}
</script>
