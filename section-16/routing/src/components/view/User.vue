<template>
  <div>
    <ul class="list-group">
      <router-link
        tag="li"
        class="list-group-item d-flex justify-content-between align-items-center"
        active-class="active"
        :to="`/user/1`">
          User #1
          <span class="badge badge-primary badge-pill">14</span>
      </router-link>

      <router-link
        tag="li"
        class="list-group-item d-flex justify-content-between align-items-center"
        active-class="active"
        :to="`/user/2`">
          User #2
          <span class="badge badge-primary badge-pill">5</span>
      </router-link>

      <router-link
        tag="li"
        class="list-group-item d-flex justify-content-between align-items-center"
        active-class="active"
        :to="`/user/3`">
          User #3
          <span class="badge badge-primary badge-pill">8</span>
      </router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goToUser(id) {
      this.$router.push(`/user/${id}`)
    }
  }
}
</script>
