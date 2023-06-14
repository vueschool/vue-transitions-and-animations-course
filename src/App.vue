<script setup>
import { ref } from "vue";
const show = ref(true);
</script>

<template>
  <Transition name="fade">
    <span v-if="show">Hello Fade In</span>
  </Transition>
  <br />
  <Transition name="pop">
    <span v-if="show">Hello Pop In</span>
  </Transition>
  <br />
  <div><button @click="show = !show">Toggle</button></div>
</template>
<style scoped>
/* Fade */
.fade-enter-active,
.fade-leave-active {
  transform-origin: unset;
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Pop */
.pop-enter-active,
.pop-leave-active {
  transform-origin: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 2.275);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(1.3);
}

span {
  display: inline-block;
}
</style>
