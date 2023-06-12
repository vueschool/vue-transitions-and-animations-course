<script setup>
import { ref, computed } from "vue";
import Spaghetti from "./Spaghetti.vue";
import Dumplings from "./Dumplings.vue";

const iWantItalian = ref(true);
const foodToEat = computed(() => (iWantItalian.value ? Spaghetti : Dumplings));
</script>
<template>
  <Transition mode="out-in">
    <component :is="foodToEat"></component>
  </Transition>
  <label><input type="checkbox" v-model="iWantItalian" /> I want italian</label>
</template>
<style>
label {
  font-size: 2rem;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
