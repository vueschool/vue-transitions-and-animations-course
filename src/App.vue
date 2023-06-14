<script setup>
import { ref } from "vue";
const show = ref(true);
</script>

<template>
  <Transition appear>
    <div v-if="show">Hello Awesome Dev!</div>
  </Transition>
  <div><button @click="show = !show">Toggle</button></div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
