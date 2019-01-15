<template>
  <div class="form-group mt-5">
    <label>Edit user #{{$route.params.id}} bio:</label>
    <textarea class="form-control"></textarea>

    <router-link
        :to="{name: 'userRoot', params: { id: $route.params.id }}"
        class="btn btn-secondary mt-2">save</router-link>
  </div>
</template>
