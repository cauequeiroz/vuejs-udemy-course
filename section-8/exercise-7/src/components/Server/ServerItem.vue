<template>
  <li class="list-group-item" @click="selectServer(server)">
    Server #{{ server.id }} - {{ server.status }}
  </li>
</template>

<script>
import { EventBus } from '../../main';

export default {
  props: ['server'],
  methods: {
    selectServer(server) {
      EventBus.$emit('serverSelected', this.server);
    }
  }
}
</script>

