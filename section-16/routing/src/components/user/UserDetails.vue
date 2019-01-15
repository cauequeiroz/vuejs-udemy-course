<template>
  <div class="mt-5">
    <p><strong>User:</strong> #{{ $route.params.id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, reiciendis?</p>
    <p>
      <router-link
        :to="`${$route.params.id}/edit`"
        class="btn btn-secondary">edit</router-link>
    </p>
  </div>
</template>

