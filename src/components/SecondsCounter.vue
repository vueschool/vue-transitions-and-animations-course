<script setup>
import { computed } from "vue";
import { useNow } from "@vueuse/core";
const now = useNow();
const seconds = computed(() => now.value.getSeconds());
</script>

<template>
  <div class="wrapper">
    <Transition>
      <span class="seconds" :key="seconds">{{ seconds }}</span>
    </Transition>
  </div>
</template>

<style>
html {
  font-size: 3rem;
}
.wrapper {
  position: relative;
}

.seconds {
  position: absolute;
  top: 0;
  left: 0;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
