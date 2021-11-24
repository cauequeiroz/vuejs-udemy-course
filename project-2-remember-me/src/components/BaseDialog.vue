<template>
  <teleport to="body">
    <div class="background"></div>
    <dialog open>
      <header>
        <slot name='header'>
          <h2>{{ title }}</h2>
        </slot>
      </header>

      <slot></slot>

      <menu>
        <slot name="actions"></slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  name: 'BaseDialog',

  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
.background {
  background: black;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.2;
}

dialog {
  width: 300px;
  padding: 50px;
  top: 20vh;
}

header {
  border-bottom: 1px dashed #ccc;
}

menu {
  padding: 0;
}
</style>
