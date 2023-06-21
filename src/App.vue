<script setup>
import { ref } from "vue";
import "animate.css";

import RubberBandTransition from "@/components/RubberBandTransition.vue";
const show = ref(true);
</script>

<template>
  <div><button @click="show = !show">Toggle</button></div>
  <br />
  <RubberBandTransition>
    <div v-if="show" class="circle"></div>
  </RubberBandTransition>
</template>

<style scoped>
.circle {
  @apply w-12 h-12 bg-green-500 rounded-full;
}
</style>
