<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-item
                v-for="server in servers"
                :server="server"
                :key="server.id"></server-item>    
        </ul>
    </div>
</template>

<script>
import ServerItemVue from './ServerItem.vue';
import { EventBus } from '../../main';

export default {
    data() {
        return {
            servers: [
                { id: 1, status: 'Critical'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Normal'},
                { id: 4, status: 'Critical'},
            ]
        }
    },
    components: {
        'server-item': ServerItemVue
    }

}
</script>


<style>

</style>
