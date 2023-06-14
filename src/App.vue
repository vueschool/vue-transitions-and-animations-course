<script setup>
import { ref } from "vue";
import FadeTransition from "@/components/FadeTransition.vue";
import PopTransition from "@/components/PopTransition.vue";
const show = ref(true);
</script>

<template>
  <FadeTransition>
    <span v-if="show">Hello Fade In</span>
  </FadeTransition>
  <br />
  <PopTransition>
    <span v-if="show">Hello Pop In</span>
  </PopTransition>
  <br />
  <div><button @click="show = !show">Toggle</button></div>
</template>
