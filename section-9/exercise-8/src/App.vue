<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="routeTo('appBlue')">Load Blue Template</button>
                <button class="btn btn-success" @click="routeTo('appGreen')">Load Green Template</button>
                <button class="btn btn-danger" @click="routeTo('appRed')">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">I'm the one who knocks.</component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                selectedComponent: 'appBlue'
            }
        },
        methods: {
            routeTo(component) {
                this.selectedComponent = component;
            }
        }
    }
</script>

<style>
</style>
