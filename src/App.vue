<script setup>
import { ref } from "vue";
import GsapTransition from "@/components/GsapTransition.vue";
const show = ref(true);
</script>

<template>
  <div><button @click="show = !show">Toggle</button></div>
  <br />
  <GsapTransition>
    <div v-if="show" class="circle"></div>
  </GsapTransition>
</template>

<style scoped>
.circle {
  @apply w-12 h-12 bg-green-500 rounded-full;
}
</style>
