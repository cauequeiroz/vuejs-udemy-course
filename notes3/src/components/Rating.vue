<template>
    <section>
        <input type="radio" name="rating" v-model="rating" id="poor" value="poor">
        <label for="poor">Poor</label>

        <input type="radio" name="rating" v-model="rating" id="medium" value="medium">
        <label for="medium">Medium</label>

        <input type="radio" name="rating" v-model="rating" id="great" value="great">
        <label for="great">Great</label>

        <br>
    </section>
</template>

<script>
export default {
    name: 'Rating',

    props: ['modelValue'],
    emits: ['update:modelValue'],


    computed: {
        rating() {
            return this.modelValue
        }
    },

    watch: {
        rating(value) {
            this.$emit('update:modelValue', value);
        }
    }
}
</script>
