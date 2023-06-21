<script setup>
import { shuffleArray } from "./helper";
import { ref } from "vue";

const pokemon = ref([]);

fetch("https://pokeapi.co/api/v2/pokemon?limit=7").then(async (res) => {
  pokemon.value = (await res.json()).results;
});
</script>

<template>
  <div v-if="pokemon.length">
    <TransitionGroup tag="ul">
      <li v-for="(creature, index) in pokemon" :key="creature.name">
        {{ creature.name }}
        <button @click="pokemon.splice(index, 1)">X</button>
      </li>
    </TransitionGroup>
    <button @click="shuffleArray(pokemon)">Shuffle</button>
  </div>
</template>

<style>
.v-move,
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.v-leave-active {
  position: absolute;
}
</style>
