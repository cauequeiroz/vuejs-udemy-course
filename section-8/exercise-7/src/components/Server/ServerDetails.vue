<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details:</p>

        <hr>
        <template v-if="server">
            <p>Server #{{ server.id }}</p>
            <p>Status: {{ server.status }}</p>
            <button @click="changeStatus">Change status</button>
        </template>
        <template v-else>
            <p>Select a server on the left list.</p>
        </template>
    </div>
</template>

<script>
import { EventBus } from '../../main';

export default {
    data() {
        return {
            server: null
        }
    },
    methods: {
        changeStatus() {
            this.server.status = 'Normal'
        }
    },
    created() {
        EventBus.$on('serverSelected', server => {
            this.server = server;
        });
    }
}
</script>

<style>

</style>
