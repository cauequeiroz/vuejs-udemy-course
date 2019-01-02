<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-server-list></app-server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-server-detail></app-server-detail>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <app-server-manager></app-server-manager>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import ServerList from './ServerList.vue';
import ServerDetail from './ServerDetails.vue';
import ServerManager from './ServerManager.vue';

export default {
    components: {
        'app-header': Header,
        'app-server-list': ServerList,
        'app-server-detail': ServerDetail,
        'app-server-manager': ServerManager
    }
}
</script>

<style>

</style>
