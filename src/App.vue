<script setup>
import { ref } from "vue";
const showMenu = ref(false);
</script>

<template>
  <button @click="showMenu = !showMenu">
    {{ showMenu ? "Hide" : "Show" }}
    Menu
  </button>
  <Transition>
    <ul v-if="showMenu">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </Transition>
</template>
<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
