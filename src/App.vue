<script setup>
import { ref } from "vue";
const showMenu = ref(false);
</script>

<template>
  <button @click="showMenu = !showMenu">
    {{ showMenu ? "Hide" : "Show" }}
    Menu
  </button>
  <ul v-if="showMenu">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</template>
