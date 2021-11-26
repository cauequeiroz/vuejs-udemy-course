<template>
    <h1>Page not found</h1>
    <p>{{ notFound }} doesn't exist.</p>

    <router-link :to="{ name: 'form' }">Back to home</router-link>
</template>

<script>
export default {
    name: 'NotFound',
    props: ['notFound']
}
</script>
