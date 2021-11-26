<template>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
    inventore itaque beatae doloremque sint maxime magni dolor, obcaecati rerum
    assumenda quam dolorum saepe cumque deserunt sunt, voluptatem, consequatur
    dolore in!
  </p>

  <p><strong>{{ name }}</strong></p>

  <button @click="back">Back</button>
  <button @click="foward">Foward</button>
</template>

<script>
export default {
    name: 'DetailScreen',

    props: [
      'name'
    ],

    methods: {
      back() {
        this.$router.push('/form');
      },
      foward() {
        this.$router.push('/detail/carol')
      }
    }
}
</script>
