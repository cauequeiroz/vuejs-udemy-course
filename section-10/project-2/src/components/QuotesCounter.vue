<template>
  <div class="quotes-counter">
    <h1 class="mt-5">Quotes Added</h1>
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{'width': width}">
        {{number}}/10
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['number'],

  computed: {
    width()  {
      return this.number ? `${this.number}0%` : 0
    }
  }
};
</script>


